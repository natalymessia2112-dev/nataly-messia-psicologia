import React from 'react';
import { SITE_CONFIG } from '../config/site';
import { CtaButton } from './CtaButton';
import fotoPrincipal from '../assets/Estudo Aconchegante com Mulher Pensativa.png';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative pt-[56px] sm:pt-[58px] pb-12 sm:pb-16 overflow-hidden bg-[#FAF5EE]"
    >
      {/* Warm natural aura */}
      <div
        className="absolute top-0 right-10 -z-10 w-96 h-96 rounded-full bg-[#EADBCE]/50 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-4 left-10 -z-10 w-80 h-80 rounded-full bg-[#DCE4D8]/50 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Content Container com respiro intencional de 55px a 60px abaixo do cabeçalho */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-10 sm:pt-12 lg:pt-[58px]">
        {/* Top Split: Presentation & Photo com centralização vertical harmoniosa */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Presentation — mantendo textos alinhados à esquerda */}
          <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-1 text-left">
            {/* Professional Identity line */}
            <div className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] tracking-[0.16em] uppercase text-[#A3482F] font-bold mb-2">
              <span>Nataly Messia | Psicóloga — {SITE_CONFIG.crp}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[50px] text-[#20130C] font-semibold leading-[1.12] tracking-tight mb-3">
              Psicoterapia Breve
            </h1>

            {/* Core Value Proposition */}
            <p className="text-base sm:text-lg text-[#38281E] leading-relaxed font-normal mb-5 max-w-lg">
              Uma psicoterapia feita de presença, escuta atenta e arte para cuidar de você por inteiro.
            </p>

            {/* Carl Jung Literary Quote Box */}
            <figure className="relative pl-4 py-2 border-l-[3px] border-[#A3482F] max-w-lg bg-[#F4EDE2] rounded-r-xl pr-4">
              <blockquote className="font-serif italic text-[15px] sm:text-base text-[#20130C] leading-snug">
                “Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana.”
              </blockquote>
              <figcaption className="mt-1.5 text-xs font-sans text-[#7A6050] tracking-wider uppercase font-semibold">
                — Carl Jung
              </figcaption>
            </figure>
          </div>

          {/* Photo Column: Centralizada verticalmente em relação ao bloco da esquerda */}
          <div className="md:col-span-5 order-1 md:order-2 flex justify-center items-center">
            <div className="w-full max-w-[250px] sm:max-w-[275px] md:max-w-[285px]">
              <figure className="relative overflow-hidden rounded-xl border border-[#D6C2AF] bg-[#F4EDE2] shadow-[0_12px_32px_-8px_rgba(40,24,16,0.14)] w-full aspect-[3/4]">
                <img
                  src={fotoPrincipal}
                  alt="Fotografia de Nataly Pereira Messia, psicóloga — Psicoterapia Breve"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.01]"
                />
              </figure>
              <div className="mt-2 text-center">
                <span className="text-[11px] text-[#7A6050] tracking-wider uppercase font-semibold">
                  Presença & Escuta Atenta
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Centralized Action Block (Below the quote, centralized button and info) */}
        <div className="mt-9 sm:mt-11 flex flex-col items-center justify-center text-center">
          <CtaButton size="large" variant="primary" className="w-full sm:w-auto min-w-[270px]" />
          <p className="mt-3 text-xs sm:text-[13px] text-[#69564A] font-normal tracking-normal max-w-md">
            Atendimento psicológico online para adultos no Brasil e no Exterior.
          </p>
        </div>
      </div>
    </section>
  );
};
