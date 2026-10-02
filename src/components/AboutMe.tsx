import React from 'react';
import fotoSobreMim from '../assets/foto-sobre-mim.jpg';
import fotoAlemPsicologia from '../assets/foto-alem-psicologia.png';
export const AboutMe: React.FC = () => {
  return (
    <section id="sobre-mim" className="py-12 sm:py-16 bg-[#FAF5EE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-12">
        {/* MOMENTO 1: Sobre mim (Clínica e Gestalt-terapia) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Photo Slot 1: Profissional */}
          <div className="md:col-span-4 flex justify-center">
            <div className="w-full max-w-[230px] sm:max-w-[260px]">
              <figure className="relative overflow-hidden rounded-xl border border-[#D6C2AF] bg-[#F4EDE2] shadow-[0_6px_20px_-6px_rgba(32,19,12,0.12)] w-full aspect-[3/4] flex items-center justify-center">
                <img
                  src={fotoSobreMim}
                  alt="Nataly Messia"
                  className="w-full h-full object-cover object-center"
                />
              </figure>
              <div className="mt-1.5 text-center">
                <span className="text-[11px] text-[#7A6050] tracking-wider uppercase font-semibold">
                  Prática Clínica · Gestalt-Terapia
                </span>
              </div>
            </div>
          </div>

          {/* Text Moment 1 */}
          <div className="md:col-span-8 flex flex-col justify-center">
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#A3482F] font-bold mb-1">
              Trajetória Clínica
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[38px] text-[#20130C] font-semibold leading-tight mb-4">
              Sobre mim
            </h2>

            <div className="space-y-3 text-[14px] sm:text-[15px] text-[#38281E] leading-relaxed font-normal">
              <p>
                Sou <strong className="font-semibold text-[#20130C]">Nataly Pereira Messia</strong>, psicóloga formada pela Unicesumar, em Maringá, em 2018. Minha abordagem é a Gestalt-terapia, e minha prática também é constituída por conhecimentos adquiridos ao longo da minha trajetória profissional.
              </p>

              <p>
                Atuo há quase 8 anos na área clínica, acompanhando diferentes histórias e momentos de vida. Uma das coisas que mais me encanta na psicologia é testemunhar o processo de transformação de cada pessoa: vê-la reconhecer suas potencialidades e construir novas formas de se relacionar consigo e com a vida.
              </p>

              <p className="bg-[#F4EDE2] p-3 sm:p-4 rounded-xl border border-[#E8DACB] font-serif text-[15px] sm:text-base text-[#20130C] font-medium leading-snug">
                “Acredito que a maneira como compreendemos e damos significado às nossas experiências influencia profundamente a forma como sentimos, nos relacionamos e conduzimos nossa vida. Quando algo muda dentro de nós, essa mudança também alcança aquilo que está ao nosso redor.”
              </p>
            </div>
          </div>
        </div>

        {/* MOMENTO 2: Para além da psicologia... (Aproximação orgânica sem linha rígida) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center pt-2">
          {/* Text Moment 2 */}
          <div className="md:col-span-8 order-2 md:order-1 flex flex-col justify-center">
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#2A3B26] font-bold mb-1">
              Arte, Escrita & Natureza
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-[#20130C] font-semibold leading-tight mb-4">
              Para além da psicologia...
            </h3>

            <div className="space-y-3 text-[14px] sm:text-[15px] text-[#38281E] leading-relaxed font-normal">
              <p>
                Também sou escritora e artista. A arte atravessa minha vida através da escrita, das colagens, dos desenhos e da fotografia.
              </p>

              <p>
                Foi através da minha própria relação com a arte que percebi sua potência como forma de expressão. Muitas vezes, imagens, símbolos e criações revelam aquilo que sentimos antes mesmo de encontrarmos palavras para explicar.
              </p>

              <p>
                Também tenho um interesse especial pelo universo dos sonhos e pelos significados que construímos a partir deles. Quando fizer sentido, sonhos, símbolos e expressões criativas também podem fazer parte do processo terapêutico.
              </p>

              <p className="bg-[#F4EDE2] p-3 sm:p-4 rounded-xl border border-[#E8DACB] font-serif text-[15px] sm:text-base text-[#20130C] font-medium leading-snug">
                Tenho uma conexão profunda com a natureza, os animais e os pequenos detalhes da vida. Essa também é a psicóloga que você encontrará do outro lado da tela: alguém que acredita na escuta, na sensibilidade, na criatividade e na possibilidade de construir uma vida com mais sentido.
              </p>
            </div>
          </div>

          {/* Photo Slot 2: Espontânea / Artística */}
          <div className="md:col-span-4 order-1 md:order-2 flex justify-center">
            <div className="w-full max-w-[230px] sm:max-w-[260px]">
              <figure className="relative overflow-hidden rounded-xl border border-[#D6C2AF] bg-[#F4EDE2] shadow-[0_6px_20px_-6px_rgba(32,19,12,0.12)] w-full aspect-[3/4] flex items-center justify-center">
                <img
                  src={fotoAlemPsicologia}
                  alt="Nataly Messia"
                  className="w-full h-full object-cover object-center"
                />
              </figure>
              <div className="mt-1.5 text-center">
                <span className="text-[11px] text-[#7A6050] tracking-wider uppercase font-semibold">
                  Escrita, Fotografia & Natureza
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
