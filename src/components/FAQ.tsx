import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/site';
import { CtaButton } from './CtaButton';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="duvidas" className="py-12 sm:py-16 bg-[#FAF5EE]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-7 sm:mb-9">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#A3482F] font-bold mb-1">
            Transparência & Orientação
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[38px] text-[#20130C] font-semibold leading-tight">
            Dúvidas frequentes
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#69564A] font-normal leading-relaxed">
            Respostas para as principais questões sobre o funcionamento e combinados da psicoterapia.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-2.5 sm:space-y-3 mb-9">
          {SITE_CONFIG.faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-[#D6C2AF] bg-[#FAF5EE] transition-colors duration-200 overflow-hidden hover:border-[#A3482F]"
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3482F] cursor-pointer group"
                >
                  <span className="font-serif text-base sm:text-lg text-[#20130C] font-medium group-hover:text-[#A3482F] transition-colors pr-2">
                    {item.question}
                  </span>

                  <span
                    className="shrink-0 w-7 h-7 rounded-full border border-[#D6C2AF] bg-[#F4EDE2] flex items-center justify-center text-base font-semibold text-[#20130C] group-hover:border-[#A3482F] group-hover:bg-[#A3482F] group-hover:text-[#FAF5EE] transition-all duration-200"
                    aria-hidden="true"
                  >
                    {isOpen ? '–' : '+'}
                  </span>
                </button>

                {/* Animated Drawer */}
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-[14px] sm:text-[15px] text-[#38281E] leading-relaxed font-normal space-y-3 border-t border-[#E8DACB]">
                      {item.answer.split('\n\n').map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA after FAQ */}
        <div className="text-center pt-1">
          <p className="text-xs sm:text-sm text-[#69564A] mb-3.5 font-normal">
            Ainda tem alguma dúvida ou gostaria de conversar diretamente?
          </p>
          <CtaButton size="large" variant="primary" />
        </div>
      </div>
    </section>
  );
};
