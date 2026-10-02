import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';
import { CtaButton } from './CtaButton';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#A3482F]/98 backdrop-blur-md py-2.5 sm:py-3 shadow-[0_4px_20px_-4px_rgba(42,20,12,0.22)]'
          : 'bg-[#A3482F] py-3 sm:py-4 shadow-[0_2px_12px_-3px_rgba(42,20,12,0.15)]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Identidade Tipográfica — Nataly Messia */}
          <div className="flex items-center pl-1 sm:pl-3 md:pl-4 pr-5 sm:pr-7 lg:pr-8 shrink-0">
            <a
              href="#inicio"
              aria-label="Página inicial — Nataly Messia"
              className="group flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded transition-opacity"
            >
              {/* Nome com tipografia serifada itálica editorial em marfim claro para contraste com terracota */}
              <span className="font-editorial-signature text-[25px] sm:text-[29px] md:text-[31px] font-normal text-[#FAF5EE] leading-none tracking-tight transition-colors group-hover:text-white whitespace-nowrap select-none py-0.5">
                Nataly Messia
              </span>
            </a>
          </div>

          {/* Zone 2: Navigation Links (Desktop com gap consistente de 28px a 34px entre itens) */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-7 lg:gap-8 xl:gap-[34px] text-[12.5px] lg:text-[13px] tracking-normal text-[#FAF5EE]/95 font-medium whitespace-nowrap"
          >
            {SITE_CONFIG.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 text-[#FAF5EE] hover:text-white transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#FAF5EE] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: CTA & Mobile Hamburger com margem confortável para o menu */}
          <div className="flex items-center gap-3 shrink-0 pl-5 sm:pl-7 lg:pl-8">
            <div className="hidden sm:block">
              <CtaButton size="compact" variant="light" />
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              className="md:hidden p-2 -mr-1 text-[#FAF5EE] hover:text-white focus-visible:outline-2 focus-visible:outline-white rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5m-16.5 5h16.5m-16.5 5h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[52px] bg-[#FAF5EE] z-40 md:hidden flex flex-col justify-between px-6 py-6 border-t border-[#E8DACB] overflow-y-auto animate-fade-in-gentle">
          <div className="space-y-5 pt-1">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#7A6050] font-semibold border-b border-[#E8DACB] pb-2">
              Menu de Navegação
            </p>
            <nav className="flex flex-col space-y-3.5">
              {SITE_CONFIG.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="font-serif text-2xl text-[#20130C] hover:text-[#A3482F] transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E8DACB] space-y-3.5">
            <CtaButton className="w-full justify-center py-3.5" variant="primary" />
            <div className="text-center text-xs text-[#7A6050]">
              <p className="font-medium text-[#20130C]">{SITE_CONFIG.fullName}</p>
              <p className="mt-0.5">{SITE_CONFIG.crp} · Atendimento Online</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
