import React from 'react';
import { CtaButton } from './CtaButton';

export const ArtAndCreativity: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 bg-[#F4EDE2] text-[#38281E] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#A3482F] font-bold mb-1.5">
            Diferencial Complementar
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] text-[#20130C] font-semibold leading-tight mb-4">
            Arte e criatividade no processo
          </h2>

          <div className="space-y-3 text-[14px] sm:text-[15px] text-[#38281E] leading-relaxed font-normal mb-6">
            <p className="font-serif italic text-base sm:text-lg text-[#20130C] font-medium leading-snug border-l-2 border-[#A3482F] pl-3 py-0.5">
              “A psicoterapia acontece através da palavra, mas nem sempre somente através dela.”
            </p>
            <p>
              Quando fizer sentido para o seu processo, podemos utilizar a arte, a escrita e outras formas de expressão criativa como caminhos para acessar aquilo que nem sempre conseguimos colocar em palavras.
            </p>
          </div>

          <div>
            <CtaButton size="normal" variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
