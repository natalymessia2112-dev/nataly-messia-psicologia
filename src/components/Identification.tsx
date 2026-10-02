import React from 'react';
import { CtaButton } from './CtaButton';

const IDENTIFICATION_POINTS = [
  "Está passando por algum sofrimento e sente que é o momento de se conhecer mais profundamente.",
  "Está vivendo uma fase de mudança e quer encontrar novos caminhos para sua vida ou carreira.",
  "Quer fortalecer sua autoconfiança e se sentir mais segura para fazer suas próprias escolhas.",
  "Tem dificuldade em dizer “não”, colocar limites ou expressar aquilo que sente e deseja.",
  "Quer compreender melhor suas emoções e a maneira como elas influenciam suas escolhas e relações.",
  "Deseja melhorar sua comunicação e construir relações mais saudáveis.",
  "Quer explorar sua criatividade, seus talentos e aquilo que tem de singular para oferecer ao mundo.",
  "Busca compreender melhor quem você é, o que deseja e qual sentido quer construir para sua vida.",
];

export const Identification: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#8F3E29] text-[#FAF5EE] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#EADBCE] font-semibold mb-1.5">
            Espaço de Escuta
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-[#FAF5EE] font-medium leading-tight">
            Talvez a terapia faça sentido para você se…
          </h2>
        </div>

        {/* 8 Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 mb-9 sm:mb-11">
          {IDENTIFICATION_POINTS.map((point, index) => (
            <div
              key={index}
              className="bg-[#7C3320] p-4 sm:p-5 rounded-xl border border-[#9E4933] transition-all duration-200 hover:border-[#EADBCE]/60 hover:bg-[#742E1C] flex items-start gap-3.5 shadow-xs"
            >
              {/* Subtle accent indicator */}
              <div
                className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#EADBCE] text-[#7C3320] font-serif text-xs font-bold flex items-center justify-center"
                aria-hidden="true"
              >
                {index + 1}
              </div>

              {/* Text with clear contrast */}
              <p className="text-[14px] sm:text-[15px] text-[#FAF5EE] leading-relaxed font-normal">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button: Warm Ivory on Terracotta for high contrast */}
        <div className="flex justify-center">
          <CtaButton size="large" variant="light" />
        </div>
      </div>
    </section>
  );
};
