import React, { useState } from 'react';

export const BriefPsychotherapyAccordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  return (
    <section id="psicoterapia" className="py-10 sm:py-14 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 bg-[#FAF5EE]">
      <div className="rounded-2xl border border-[#D6C2AF] bg-[#FAF5EE] p-5 sm:p-7 shadow-[0_4px_20px_-8px_rgba(32,19,12,0.06)] transition-all duration-300">
        <button
          type="button"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls="brief-psychotherapy-content"
          className="w-full flex items-center justify-between text-left gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A3482F] rounded-xl cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A3482F]" aria-hidden="true" />
            <h2 className="font-serif text-xl sm:text-2xl lg:text-[28px] text-[#20130C] font-semibold group-hover:text-[#A3482F] transition-colors">
              Como funciona a Psicoterapia Breve?
            </h2>
          </div>

          <div
            className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D6C2AF] bg-[#F4EDE2] flex items-center justify-center text-lg sm:text-xl font-medium text-[#20130C] group-hover:border-[#A3482F] group-hover:text-[#FAF5EE] group-hover:bg-[#A3482F] transition-all duration-200"
            aria-hidden="true"
          >
            {isOpen ? '–' : '+'}
          </div>
        </button>

        {/* Accordion Content with smooth transition */}
        <div
          id="brief-psychotherapy-content"
          role="region"
          aria-labelledby="brief-psychotherapy-heading"
          className={`grid transition-all duration-400 ease-in-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100 mt-5 pt-5 border-t border-[#E8DACB]' : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0'
          } overflow-hidden`}
        >
          <div className="min-h-0 space-y-3.5 text-[14px] sm:text-[15px] text-[#38281E] leading-relaxed font-normal">
            <p className="font-serif italic text-base sm:text-lg text-[#20130C] border-l-[3px] border-[#A3482F] pl-3.5 py-1 bg-[#F4EDE2] rounded-r-lg">
              “A psicoterapia breve parte de uma demanda focal: algo que você está vivendo hoje e deseja compreender, transformar ou atravessar com acompanhamento psicológico.”
            </p>

            <p>
              No primeiro encontro, vamos compreender o que está acontecendo, identificar suas necessidades e definir juntas qual será o foco inicial do processo.
            </p>

            <p>
              A partir dessa compreensão, proponho um percurso terapêutico considerando sua demanda, seus objetivos e as particularidades do seu momento.
            </p>

            <p>
              Esse percurso pode ser mais curto ou exigir um tempo maior, de acordo com a sua necessidade. Ao longo dos encontros, mantemos o foco na questão que definimos inicialmente, explorando também outros aspectos da sua história que estejam relacionados a ela.
            </p>

            <p>
              Quando entendermos que esse tema foi suficientemente trabalhado, podemos encerrar esse ciclo ou, se fizer sentido para você, definir uma nova questão para seguirmos juntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
