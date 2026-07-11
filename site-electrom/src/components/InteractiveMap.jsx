"use client";
import React, { useEffect, useRef, useState } from 'react';
import worksData from '../data/works-data.json';
import 'leaflet/dist/leaflet.css';

export default function InteractiveMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const initMap = async () => {
      try {
        const L = await import('leaflet');
        
        if (!mapRef.current) return;
        
        // Prevent double initialization if leaflet is already bound to this DOM node
        if (mapRef.current._leaflet_id) return;

        // Initialize Map centered on Southeast Brazil, fitting SP and neighboring states nicely
        const map = L.map(mapRef.current, {
          center: [-22.3, -48.0],
          zoom: 6,
          zoomControl: true,
          scrollWheelZoom: false, // Prevent scroll hijacking
          doubleClickZoom: true,
          attributionControl: true
        });

        mapInstanceRef.current = map;

        // Add CartoDB Dark Matter tile layer
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 20
        }).addTo(map);

        const hqCoords = [-23.55052, -46.633308]; // São Paulo HQ

        // 1. Draw Star-Graph connection lines first (so they render below markers)
        worksData.forEach(city => {
          const isHQ = city.city === 'São Paulo' && city.state === 'SP';
          if (!isHQ && city.coords && city.coords.length === 2) {
            L.polyline([hqCoords, city.coords], {
              color: '#00F0FF',
              weight: 0.6,
              opacity: 0.12,
              className: 'map-graph-line'
            }).addTo(map);
          }
        });

        // 2. Draw City circle markers
        worksData.forEach(city => {
          if (!city.coords || city.coords.length !== 2) return;

          const isHQ = city.city === 'São Paulo' && city.state === 'SP';
          
          // Logarithmic size scale for cities
          const radius = isHQ 
            ? 10 
            : Math.max(3.5, Math.min(8, 2.5 + Math.log2(city.totalWorks) * 1.5));
          
          // Use brand colors
          const hasSolar = city.categories.Solar > 0;
          const color = isHQ ? '#00F0FF' : (hasSolar ? '#00F0FF' : '#7AA2E4');
          
          const marker = L.circleMarker(city.coords, {
            radius,
            fillColor: color,
            color: isHQ ? '#FFFFFF' : color,
            weight: isHQ ? 1.5 : 0.8,
            opacity: 0.85,
            fillOpacity: 0.55
          }).addTo(map);

          // Build custom styled popup HTML content
          const categoriesHtml = Object.entries(city.categories)
            .filter(([_, count]) => count > 0)
            .map(([cat, count]) => `
              <div style="display: flex; justify-content: space-between; gap: 12px; margin-bottom: 2px;">
                <span style="font-size: 10px; color: #a1a1aa; font-family: monospace;">${cat}:</span>
                <span style="font-size: 10px; font-weight: bold; color: ${cat === 'Solar' ? '#00F0FF' : '#ffffff'}; font-family: monospace;">${count}</span>
              </div>
            `).join('');

          const worksListHtml = city.notableWorks.map(w => `
            <div style="border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 4px; margin-top: 4px;">
              <div style="font-size: 9.5px; font-weight: bold; color: #00F0FF; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 220px;">${w.client}</div>
              <div style="font-size: 9px; color: #d4d4d8; font-style: italic; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 220px;">${w.project}</div>
              ${w.description ? `<div style="font-size: 8px; color: #71717a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 220px;">${w.description}</div>` : ''}
            </div>
          `).join('');

          const popupContent = `
            <div style="min-width: 220px; padding: 4px 6px;">
              <div style="font-size: 13px; font-weight: 800; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 4px; margin-bottom: 6px; display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #ffffff;">${city.city} <span style="color: #7AA2E4; font-size: 10px; font-family: monospace;">${city.state}</span></span>
                <span style="background: rgba(0, 240, 255, 0.1); color: #00F0FF; font-size: 9px; padding: 2px 6px; border-radius: 4px; font-family: monospace; font-weight: bold;">
                  ${city.totalWorks} ${city.totalWorks === 1 ? 'Obra' : 'Obras'}
                </span>
              </div>
              <div style="margin-bottom: 6px;">
                ${categoriesHtml}
              </div>
              ${city.notableWorks.length > 0 ? `
                <div style="margin-top: 8px;">
                  <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; font-weight: bold; margin-bottom: 4px;">Obras Recentes</div>
                  ${worksListHtml}
                </div>
              ` : ''}
            </div>
          `;

          marker.bindPopup(popupContent, {
            maxWidth: 260,
            className: 'custom-leaflet-popup'
          });

          // Mouse hover interactions for markers
          marker.on('mouseover', function () {
            this.openPopup();
            this.setStyle({ fillOpacity: 0.9, weight: 1.8 });
          });
          marker.on('mouseout', function () {
            this.setStyle({ fillOpacity: 0.55, weight: isHQ ? 1.5 : 0.8 });
          });
        });

        setMapLoaded(true);
      } catch (err) {
        console.error('Error initializing Leaflet map:', err);
      }
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative group">
      {/* Loading Placeholder */}
      {!mapLoaded && (
        <div className="absolute inset-0 bg-[#030504] z-20 flex flex-col items-center justify-center gap-3">
          <div className="w-8 h-8 border-2 border-brand-cyan/20 border-t-brand-cyan rounded-full animate-spin" />
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Carregando Mapa Operacional...</span>
        </div>
      )}
      
      {/* Leaflet Container */}
      <div ref={mapRef} className="w-full h-full relative z-10" />

      {/* Futuristic Map HUD overlays */}
      <div className="absolute top-3 left-3 bg-black/75 border border-white/10 rounded-lg p-2.5 z-20 pointer-events-none backdrop-blur-sm shadow-xl font-mono text-[9px] text-gray-400 space-y-1">
        <div className="text-[10px] font-bold text-white mb-1 uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
          Radar de Cobertura
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-cyan border border-white/20" />
          <span>Sede São Paulo (QG)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#7AA2E4]" />
          <span>Obras Entregues</span>
        </div>
        <div className="text-[8px] text-gray-600 mt-1 pt-1 border-t border-white/5">
          Arraste e aproxime para explorar
        </div>
      </div>
    </div>
  );
}
