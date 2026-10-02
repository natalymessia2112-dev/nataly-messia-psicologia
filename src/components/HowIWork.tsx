import React from 'react';

const PILLARS = [
  {
    number: "01",
    title: "O passado no presente",
    quote:
      "“Olhamos para sua história e suas experiências para compreender como elas continuam presentes na maneira como você sente, escolhe e se relaciona hoje.”",
    context:
      "Acolhimento da sua trajetória e dos vínculos que formaram seu jeito de ser, abrindo caminhos para uma presença mais livre no presente.",
  },
  {
    number: "02",
    title: "Compreensão e significado",
    quote:
      "“Em vez de olhar apenas para aquilo que queremos eliminar ou evitar, buscamos compreender sentimentos, comportamentos e experiências, construindo novos significados e possibilidades.”",
    context:
      "Um olhar que não rotula nem reduz sua vivência, mas busca entender a função de cada sentimento e o sentido daquilo que você experimenta.",
  },
  {
    number: "03",
    title: "Espiritualidade e sentido",
    quote:
      "“A espiritualidade, a fé e a busca por sentido também podem fazer parte do processo terapêutico. Sua maneira de compreender a vida pode ser acolhida e integrada ao processo, sem julgamentos ou imposições.”",
    context:
      "Um espaço aberto e ético onde sua visão de mundo, seus valores e sua busca existencial encontram respeito e acolhimento pleno.",
  },
];

export const HowIWork: React.FC = () => {
  return (
    <section id="como-trabalho" className="py-12 sm:py-16 bg-[#253522] text-[#FAF5EE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#DCE6D9] font-bold mb-1.5">
            Bases da Prática Clínica
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-[#FAF5EE] font-medium leading-tight">
            Como eu trabalho
          </h2>
          <p className="mt-2 text-[#C8D2C5] text-[15px] font-normal leading-relaxed max-w-xl">
            Uma abordagem fundamentada na Gestalt-terapia, na presença autêntica e no respeito à singularidade de cada pessoa.
          </p>
        </div>

        {/* 3 Pillars Blocks (Deep moss cards with warm ivory text) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-[#1C2A1A] border border-[#354831] transition-all duration-200 hover:border-[#DCE6D9]/40 hover:bg-[#182416] shadow-xs"
            >
              <div>
                {/* Number mark in golden sand tone */}
                <span className="font-serif text-2xl sm:text-3xl text-[#E8DACB] font-bold block mb-2">
                  {pillar.number}
                </span>

                {/* Pillar Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#FAF5EE] font-medium mb-3">
                  {pillar.title}
                </h3>

                {/* Main Quote */}
                <p className="text-[14px] sm:text-[15px] text-[#FAF5EE] leading-relaxed font-normal italic mb-4">
                  {pillar.quote}
                </p>
              </div>

              {/* Context text (Without decorative line) */}
              <div className="pt-2 text-xs text-[#C8D2C5] leading-relaxed font-normal">
                {pillar.context}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
