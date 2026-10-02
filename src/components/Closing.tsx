import React from 'react';
import { CtaButton } from './CtaButton';

export const Closing: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#253522] text-[#FAF5EE] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Subtle organic botanical mark */}
        <div className="flex justify-center mb-6">
          <div className="w-10 h-10 rounded-full bg-[#1C2A1A] border border-[#354831] flex items-center justify-center text-[#DCE6D9]">
            <svg
              className="w-5 h-5 opacity-90"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9 9 0 100-18 9 9 0 000 18z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v8m-4-4h8"
              />
            </svg>
          </div>
        </div>

        {/* Highlighted Closing Phrase */}
        <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-[36px] text-[#FAF5EE] leading-snug font-medium mb-6 max-w-2xl mx-auto">
          “Há momentos em que tudo o que precisamos é de um espaço seguro para voltar a nos escutar.”
        </blockquote>

        <p className="text-xs sm:text-[13px] text-[#C8D2C5] font-normal mb-8">
          Atendimento psicológico online · Presença, escuta e arte
        </p>

        {/* Discreet CTA Button on Deep Moss */}
        <div className="flex justify-center">
          <CtaButton
            variant="light"
            size="normal"
            className="shadow-sm hover:shadow-md"
          />
        </div>
      </div>
    </section>
  );
};
