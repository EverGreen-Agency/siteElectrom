'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Soluções', href: '/solucoes' },
    { label: 'Cases', href: '/cases' },
    { label: 'Sustentabilidade', href: '/sustentabilidade' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-brand-petrol/85 backdrop-blur-md border-white/5 py-3 shadow-2xl'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group relative">
              {/* Subtle backglow effect on logo hover */}
              <div className="absolute -inset-2 bg-brand-blue/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/ElectROM - Horizontal.png"
                alt="Electrom Logo"
                width={180}
                height={45}
                className="h-10 w-auto relative z-10 transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-300 hover:text-white px-2 py-1 text-sm font-medium transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-blue transition-all duration-300 transform -translate-x-1/2 group-hover:w-full" />
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contato"
              className="ml-4 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-brand-petrol bg-brand-blue hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 animate-pulse-slow cursor-pointer"
            >
              Diagnóstico Gratuito
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-brand-blue hover:bg-white/5 focus:outline-none transition-colors"
            >
              <span className="sr-only">Abrir menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with glassmorphism */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-petrol/95 backdrop-blur-xl border-b border-white/10 animate-fade-in shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium border-b border-white/5 hover:bg-white/5 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="block w-full text-center mt-6 px-5 py-3 rounded-full text-sm font-semibold text-brand-petrol bg-brand-blue hover:bg-brand-blue/90 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Diagnóstico Gratuito
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
 