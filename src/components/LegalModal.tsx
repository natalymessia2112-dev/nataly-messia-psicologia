import React, { useEffect } from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'ethics' | null;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-fade-in-gentle"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#FAF5EE] p-6 sm:p-9 border border-[#D6C2AF] shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-5 right-5 p-2 rounded-full text-[#69564A] hover:text-[#20130C] hover:bg-[#EADBCE]/60 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {type === 'privacy' ? (
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#A3482F] font-bold block mb-2">
              Privacidade & Proteção de Dados
            </span>
            <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl text-[#20130C] font-semibold mb-5">
              Política de Privacidade e Sigilo
            </h3>

            <div className="space-y-4 text-sm text-[#38281E] leading-relaxed font-normal">
              <p>
                Este site tem finalidade estritamente informativa e de apresentação dos serviços profissionais de psicoterapia oferecidos por <strong>Nataly Pereira Messia (CRP 08/28444)</strong>.
              </p>
              <h4 className="font-serif text-lg text-[#20130C] font-semibold pt-1">
                1. Sigilo Profissional
              </h4>
              <p>
                Todo o atendimento psicológico e quaisquer informações compartilhadas durante os contatos e sessões estão estritamente resguardados pelo sigilo profissional, conforme preconizado pelo <em>Código de Ética Profissional do Psicólogo</em> (Resolução CFP nº 010/2005).
              </p>
              <h4 className="font-serif text-lg text-[#20130C] font-semibold pt-1">
                2. Tratamento de Dados (LGPD)
              </h4>
              <p>
                Os dados de contato fornecidos voluntariamente através do WhatsApp (nome, telefone e mensagem) são utilizados exclusivamente para fins de agendamento de consultas e esclarecimento de dúvidas prévias. Nenhuma informação é comercializada, compartilhada com terceiros ou utilizada para envio de mensagens promocionais indesejadas.
              </p>
              <h4 className="font-serif text-lg text-[#20130C] font-semibold pt-1">
                3. Segurança no Atendimento Online
              </h4>
              <p>
                As sessões online são realizadas em plataformas seguras que oferecem criptografia ponta a ponta. Recomenda-se à paciente realizar as sessões em local privativo, com fones de ouvido e conexão estável à internet para garantia de sua privacidade.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#2A3B26] font-bold block mb-2">
              Prática Regulamentada
            </span>
            <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl text-[#20130C] font-semibold mb-5">
              Informações Profissionais & Normas Éticas
            </h3>

            <div className="space-y-4 text-sm text-[#38281E] leading-relaxed font-normal">
              <p>
                <strong>Profissional:</strong> Nataly Pereira Messia<br />
                <strong>Registro Profissional:</strong> CRP 08/28444 (Conselho Regional de Psicologia do Paraná — 8ª Região)<br />
                <strong>Formação Acadêmica:</strong> Graduada em Psicologia pela UniCesumar (Maringá/PR, 2018)<br />
                <strong>Público-alvo:</strong> Atendimento exclusivamente a adultos (a partir de 18 anos)
              </p>
              <h4 className="font-serif text-lg text-[#20130C] font-semibold pt-1">
                Atendimento Psicológico Online
              </h4>
              <p>
                A prestação de serviços psicológicos realizados por meios de tecnologia da informação e comunicação é regulamentada pela Resolução CFP nº 11/2018 e Resolução CFP nº 04/2020.
              </p>
              <p>
                Em caso de urgência ou emergência psiquiátrica grave, procure o serviço de emergência médica de sua região (SAMU 192 ou pronto-socorro) ou entre em contato com o Centro de Valorização da Vida (CVV) pelo telefone 188 ou pelo site cvv.org.br.
              </p>
            </div>
          </div>
        )}

        <div className="mt-7 pt-5 border-t border-[#E8DACB] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#A3482F] text-[#FAF5EE] text-xs font-semibold tracking-wider uppercase hover:bg-[#8C3B24] transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
