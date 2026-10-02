import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/site';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'ethics' | null>(null);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#F4EDE2] text-[#38281E] py-10 sm:py-14 border-t border-[#E5D7C7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-[#E5D7C7]">
            {/* Identity & Registry — Assinatura profissional discreta */}
            <div className="md:col-span-6 space-y-1.5">
              <p className="font-serif text-lg sm:text-[19px] font-medium tracking-wide text-[#20130C]">
                {SITE_CONFIG.fullName}
              </p>
              <p className="text-xs sm:text-[13px] text-[#544033] font-normal">
                {SITE_CONFIG.profession} | {SITE_CONFIG.crp}
              </p>
              <p className="text-xs text-[#7A6658] font-normal max-w-md pt-0.5">
                {SITE_CONFIG.serviceModality}.
              </p>
            </div>

            {/* Social & Contact */}
            <div className="md:col-span-3 space-y-2">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#A3482F] font-bold">
                Instagram
              </p>
              <a
                href={SITE_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-[#20130C] hover:text-[#A3482F] transition-colors"
                aria-label={`Perfil no Instagram ${SITE_CONFIG.instagram.handle}`}
              >
                <svg
                  className="w-4 h-4 text-[#8C3B24]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>{SITE_CONFIG.instagram.handle}</span>
              </a>
            </div>

            {/* Legal and Ethical links */}
            <div className="md:col-span-3 space-y-2">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#A3482F] font-bold">
                Informações
              </p>
              <ul className="space-y-1.5 text-xs text-[#544033]">
                <li>
                  <button
                    type="button"
                    onClick={() => setModalType('privacy')}
                    className="hover:text-[#A3482F] transition-colors underline-offset-4 hover:underline text-left cursor-pointer"
                  >
                    Política de Privacidade & Sigilo
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setModalType('ethics')}
                    className="hover:text-[#A3482F] transition-colors underline-offset-4 hover:underline text-left cursor-pointer"
                  >
                    Informações Profissionais & CFP
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright notice and ethical disclaimer */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7A6658] font-normal">
            <p>
              © {currentYear} {SITE_CONFIG.fullName}. Todos os direitos reservados.
            </p>
            <p className="text-center sm:text-right">
              Psicoterapia online de acordo com o Código de Ética Profissional do Psicólogo.
            </p>
          </div>
        </div>
      </footer>

      {/* Interactive Modal */}
      <LegalModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType}
      />
    </>
  );
};
