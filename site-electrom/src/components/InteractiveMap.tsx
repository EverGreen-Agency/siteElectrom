"use client";
import React, { useEffect, useRef, useState } from 'react';
import worksData from '../data/works-data.json';
import 'leaflet/dist/leaflet.css';

export interface WorkCityData {
  city: string;
  state: string;
  count: number;
  coords: [number, number];
}

export default function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const initMap = async () => {
      try {
        const L = await import('leaflet');
        
        if (!mapRef.current) return;
        if ((mapRef.current as any)._leaflet_id) return;

        const map = L.map(mapRef.current, {
          center: [-22.3, -48.0],
          zoom: 6,
          zoomControl: true,
          scrollWheelZoom: false,
          doubleClickZoom: true,
          attributionControl: true
        });

        mapInstanceRef.current = map;

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 20
        }).addTo(map);

        const hqCoords: [number, number] = [-23.55052, -46.633308];

        (worksData as WorkCityData[]).forEach(city => {
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

        (worksData as WorkCityData[]).forEach(city => {
          if (!city.coords || city.coords.length !== 2) return;

          const isHQ = city.city === 'São Paulo' && city.state === 'SP';
          const radius = isHQ ? 12 : Math.min(4 + Math.sqrt(city.count) * 2, 10);
          const color = isHQ ? '#7AA2E4' : '#00F0FF';

          const marker = L.circleMarker(city.coords, {
            radius,
            color,
            fillColor: color,
            fillOpacity: isHQ ? 0.9 : 0.6,
            weight: isHQ ? 2 : 1
          }).addTo(map);

          const popupContent = `
            <div style="font-family: monospace; padding: 4px;">
              <strong style="color: #ffffff; font-size: 13px;">${city.city} - ${city.state}</strong><br/>
              <span style="color: #7AA2E4; font-size: 11px;">${city.count} ${city.count === 1 ? 'projeto registrado' : 'projetos registrados'}</span>
              ${isHQ ? '<br/><span style="color: #00F0FF; font-size: 10px; font-weight: bold;">SEDE OPERACIONAL ELECTROM</span>' : ''}
            </div>
          `;

          marker.bindPopup(popupContent, {
            className: 'custom-leaflet-popup'
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
    <div className="relative w-full h-full min-h-[350px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#030504]">
      {!mapLoaded && (
        <div className="absolute inset-0 bg-[#030504] z-20 flex flex-col items-center justify-center gap-3">
          <div className="w-8 h-8 border-2 border-brand-cyan/20 border-t-brand-cyan rounded-full animate-spin" />
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Carregando Mapa Operacional...</span>
        </div>
      )}
      <div ref={mapRef} className="w-full h-full min-h-[350px] z-10" />
    </div>
  );
}
