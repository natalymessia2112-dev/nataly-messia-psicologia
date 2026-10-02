import React, { useState, useEffect, useRef } from 'react';
import { CtaButton } from './CtaButton';

export interface TestimonialItem {
  id: number;
  initials: string;
  highlight: string;
  fullText?: string;
  isShort?: boolean;
}

// Estrutura com exatamente 19 relatos reais autorizados
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
    initials: "P.G.",
    highlight: "Nunca pensei que poderia me conhecer da forma que estou me conhecendo: profundamente, com amor, calma e confiança em mim mesma.",
    fullText: "Comecei a terapia com a Nataly há mais ou menos 6 meses e em pouco tempo percebi o quão benéfico estava sendo. Antes já havia feito terapia com outros 3 psicólogos, mas a identificação só ocorreu com ela. Me sinto compreendida, me trouxe clareza do porquê de determinados comportamentos e pensamentos e sinto uma evolução constante mesmo em dias que não tenho terapia. O autoconhecimento que me trouxe é indescritível, nunca pensei que poderia me conhecer da forma que estou me conhecendo, profundamente, com amor, calma e confiança em mim mesma. Agradeço o momento em que nossos caminhos se cruzaram, sei que ainda tenho muito o que evoluir e desenvolver, mas até aqui a jornada foi incrível.",
  },
  {
    id: 2,
    initials: "R.S.",
    highlight: "As trocas sempre foram muito ricas, consegui obter insights que contribuíram muito no meu entendimento pessoal, amadurecendo minha jornada individual e artística também.",
    fullText: "Me senti muito confortável e acolhida nas sessões com a Nátaly. Ela é profissional e ao mesmo tempo atenta às questões trazidas. Além disso, as trocas sempre foram muito ricas, consegui obter insights que contribuíram muito no meu entendimento pessoal, amadurecendo minha jornada individual e artística também.",
  },
  {
    id: 3,
    initials: "G.G.",
    highlight: "Com a sua ajuda pude começar a liberar todo o potencial da pessoa maravilhosa que eu sou.",
    fullText: "Eu agradeço a cada dia que passa por um estranho ter ouvido minha conversa e ter te indicado pra mim, esse ano foi excepcional e com a sua ajuda pude começar a liberar todo o potencial da pessoa maravilhosa que eu sou, gratidão por me ajudar a ver isso.\n\nTe desejo muita luz.",
  },
  {
    id: 4,
    initials: "Y.L.",
    highlight: "Hoje, me sinto confiante e segura com a pessoa que me tornei.",
    fullText: "Minha jornada de psicoterapia com Nataly tem sido profundamente transformadora. Começamos nossa jornada durante o começo da pandemia de COVID, naquela época, eu me sentia como um verdadeiro mar de incertezas, com ansiedades e medos me dominando. Com o passar de nossas sessões, Nataly não apenas fez o papel de uma extraordinária terapeuta, mas também se tornou uma mentora e guia essencial, que de pouco em pouco foi me mostrando que eu não preciso carregar todo esse peso que eu sentia me esmagando. Ela me ajudou a observar, compreender e controlar esses sentimentos turbulentos, me proporcionando um entendimento mais palpável de mim mesma.\n\nHoje, olhando para trás, eu vejo o quanto cresci e me adaptei nesses últimos anos. A direção de Nataly agregou um valor inestimável à minha vida, principalmente em questão ao meu comportamento emocional e social. Juntas, eu pude perceber e realizar mudanças necessárias para viver de forma mais leve, e com gratidão pelos momentos e experiências que a vida me oferece. Nossa jornada não foi apenas terapêutica; foi uma jornada de autodescoberta e crescimento pessoal. Nataly é mais do que uma terapeuta; ela é como um porto seguro onde eu posso verdadeiramente me abrir, me conhecer e re-conhecer. Sou e serei eternamente grata por seu apoio e orientação contínua. Hoje, me sinto confiante e segura com a pessoa que me tornei, graças a essa jornada que construímos juntas, transformando incertezas comuns em uma compreensão mais profunda de mim mesma e do mundo ao meu redor. Nataly é realmente excepcional em seu papel de terapeuta e mentora, e eu sempre serei grata pelo cuidado, atenção e energia que ela transmite em todas nossas sessões.",
  },
  {
    id: 5,
    initials: "M.L.",
    highlight: "Para mim, terapia também depende muito da conexão e da confiança que conseguimos construir com o profissional, e com a Nat encontrei exatamente isso.",
    fullText: "Faço terapia com a Nat há aproximadamente 8 anos e acho que esse tempo todo já diz bastante sobre a relação de confiança que construímos. Ela é uma psicóloga maravilhosa e, desde o início, sempre me senti muito segura e confortável com ela. Tanto que, depois de tantos anos, nunca consegui deixá-la. 😂\n\nA Nataly é extremamente sensata, prudente e responsável, mas, ao mesmo tempo, é muito carinhosa, acolhedora e atenciosa. Gosto muito da forma como ela conduz as sessões porque nunca sinto que estou sendo julgada ou que existe uma resposta ‘certa’ que eu preciso encontrar.\n\nA abordagem da Gestalt me ajuda muito justamente nisso: a perceber melhor o que estou sentindo, entender meus próprios padrões e chegar às minhas conclusões de uma maneira muito natural, sempre respeitando o meu tempo.\n\nAo longo desses anos, ela esteve comigo em fases completamente diferentes da minha vida, acompanhando mudanças, momentos difíceis, conquistas e muitas versões minhas. E acho muito especial ter encontrado uma profissional com quem consigo falar absolutamente sobre tudo e ainda me sentir tão segura.\n\nTenho um carinho enorme por ela e sou muito grata por todo esse tempo juntas. Para mim, terapia também depende muito da conexão e da confiança que conseguimos construir com o profissional, e com a Nat encontrei exatamente isso.\n\nÉ uma profissional que admiro e em quem confio de verdade. ♥️",
  },
  {
    id: 6,
    initials: "C.A.",
    highlight: "Hoje posso dizer que me sinto como uma borboleta que saiu do casulo, livre do passado, leve pra seguir voando.",
    fullText: "A Nataly apareceu na hora certa na minha vida, como se fosse um presente do Universo para mim. Estava vivendo um momento muito importante de muitas mudanças e desafios, e apesar de ter feito muitos anos de terapia ainda ficava presa a alguns traumas do passado e pensamentos que não me deixavam prosseguir na minha jornada, e ela com todo seu conhecimento e delicadeza em ser direta ao ponto e mesmo assim ter leveza, me fez enxergar o mundo de uma nova maneira, me fez ressignificar muitas coisas, e hoje posso dizer que me sinto como uma borboleta que saiu do casulo, livre do passado, leve pra seguir voando e me sentindo preparada para viver a experiência mais linda da minha vida que é ser mãe! Obrigada por me guiar com tanta sabedoria, desejo que todo mundo tivesse a oportunidade de conhecer o seu trabalho, é transformador! ❤️",
  },
  {
    id: 7,
    initials: "D.P.",
    highlight: "Ela cria uma conexão incrível com quem somos e com quem queremos ser.",
    fullText: "Demorei muito tempo procurando uma terapeuta que conseguisse entender o que eu acredito para ter noção do quanto isso me afeta psicologicamente. Já tive outras experiências que não foram muito boas, até que por uma conspiração do universo recebi a indicação da Nataly. Desde o nosso primeiro contato gostei muito dela, do jeito de falar e o como ela recebe aquelas coisas que você mais tem medo dentro de si, com ternura e ao mesmo tempo te instiga a entender o porquê que está se sentindo assim.\n\nEla cria uma conexão incrível com quem somos e com quem queremos ser, e ajuda a colocar para fora o melhor de nós mostrando assim que nada é impossível.",
  },
  {
    id: 8,
    initials: "G.S.",
    highlight: "Poesia e poema é ser atendida pela Nataly!",
    fullText: "Poesia e poema é ser atendida pela Nataly!\n\nSeu olhar atento e amigável fez com que eu me sentisse abraçada e acolhida, o que é indispensável para um bom processo terapêutico.\n\nSua metodologia aberta e abrangente inclui todas as nuances do Ser, dando-nos, com isso, a liberdade e a confiança de nos mostrarmos com verdade e autenticidade.\n\nFui atendida por ela em um momento turbulento da minha vida, em que algumas descobertas e mudanças me deixaram um pouco perdida e sem chão. A psicoterapia com ela fez todo o diferencial nesse processo, me nutrindo de novos olhares e despertando novas possibilidades para que eu pudesse lidar com tudo de uma forma mais harmônica e madura.\n\nSinto-me agradecida por ter me permitido vivenciar essa clínica.\n\nAgradecida, Nataly.\nAgradecida, vida!",
  },
  {
    id: 9,
    initials: "L.Z.",
    highlight: "Estou aprendendo a me amar e a fazer mais por mim.",
    fullText: "Eu já estava sem esperanças de encontrar alguém/algo que fosse realmente me ajudar a sair do abismo que estava, a me reerguer, me conhecer, entender o que eu sinto, me fazer enxergar que algumas situações precisam de limites, e que eu preciso impor esses limites!! Está sendo incrível, eu me sinto muito leve nos finais das nossas sessões, estou aprendendo a me amar, e a fazer mais por mim. Gratidão por tudo, Nataly, você é maravilhosa! 💛",
  },
  {
    id: 10,
    initials: "M.S.",
    highlight: "Aprendi que me amar também é dizer não.",
    fullText: "A terapia com a Nataly me ensinou a colocar limites. Aprendi que me amar também é dizer não, e que eu não preciso me culpar por ser quem eu sou. Foi libertador. Gratidão por tudo!",
  },
  {
    id: 11,
    initials: "M.E.",
    highlight: "Sou grata pela sua paciência, dedicação e por sempre me ajudar a enxergar o melhor de mim mesma.",
    fullText: "Esse ano foi realmente um período de muitos desafios e transformações, e sinto que todo o trabalho que fizemos juntas me trouxe um aprendizado imenso. Sou grata pela sua paciência, dedicação e por sempre me ajudar a enxergar o melhor de mim mesma.",
  },
  {
    id: 12,
    initials: "T.L.",
    highlight: "Conseguiu acalmar uma tempestade gigantesca dentro de mim com seu jeito calmo e atencioso.",
    fullText: "Então, quando comecei a fazer terapia com a Nataly eu tava bem mal e totalmente perdida, agia por impulsividade e não via uma saída a não ser ir dessa pra melhor. Com o decorrer do tempo ela me fez enxergar outros pontos de vista, pensar melhor nas coisas antes de agir, não pensar só no meu ponto de vista mas no do outro também. Conseguiu acalmar uma tempestade gigantesca dentro de mim com seu jeito calmo e atencioso, nunca desrespeitou meu jeito de ser e nem minhas decisões, mesmo que algumas delas fossem ruins, no final ela tava lá pra me ajudar a levantar e sempre comemorou cada mínima conquista que eu fizesse.\n\nHoje posso dizer que eu estou 1000% melhor do que quando nos conhecemos. Muito obrigada por isso, Nathy, você é incrível e obrigada por nunca ter desistido de mim.",
  },
  {
    id: 13,
    initials: "B.A.",
    highlight: "Pude ver na prática como a terapia foi transformando a forma como me relaciono, como me enxergo e como lido com as situações da vida.",
    fullText: "A Nathy foi indicação de uma amiga, e chegou à minha vida em um momento em que eu vinha de um processo longo e doloroso em busca de autoconhecimento — principalmente no que dizia respeito aos meus relacionamentos, não só com as pessoas ao meu redor, mas também comigo mesma.\n\nAo longo desses quase dois anos, aprendi tanto. E, mais do que isso, pude ver na prática como a terapia foi transformando a forma como me relaciono, como me enxergo e como lido com as situações da vida.\n\nEsse processo me mostrou que não há nada que não possa ser trabalhado e melhorado, mesmo quando parece difícil.\n\nA Nathy me acolheu, me ensinou e me ajudou a transformar a minha vida de uma maneira muito bonita. Tenho um carinho e uma gratidão enormes por ela e por tudo o que construímos juntas nesse caminho. ❤️",
  },
  {
    id: 14,
    initials: "P.N.",
    highlight: "Em cada sessão, entro uma pessoa e saio outra.",
    fullText: "Apesar de estar a pouco tempo em acompanhamento com a Naty posso dizer que vejo mudanças positivas as quais buscava a tempos… Naty gratidão por me auxiliar a olhar p dentro e vencer os maiores desafios… os q encontram-se aqui dentro !!! Em cada sessão, entro uma pessoa e saio outra. Gratidão por td profissionalismo e direcionamento.",
  },
  {
    id: 15,
    initials: "L.J.",
    highlight: "Nataly, eu estou me sentindo muito bem, queria te dar um abraço agora pra te agradecer por ser uma pessoa maravilhosa e uma profissional incrível! Obrigada, de verdade, você está me ajudando muito. Você é uma pessoa de muita luz e muito abençoada 💛",
    isShort: true,
  },
  {
    id: 16,
    initials: "G.C.",
    highlight: "É impossível não pensar em quantas versões de mim mesma ela acompanhou... E uma última mensagem: façam terapia! 💛",
    fullText: "Mais de 5 anos de terapia com a Nat. E, olhando para esse tempo, é impossível não pensar em quantas versões de mim mesma ela acompanhou.\n\nA Nat é acolhimento, é escuta, é aquele lugar onde eu posso chegar exatamente como estou, sem precisar ter respostas prontas. Ela esteve comigo em momentos que muitas vezes achei que não conseguiria suportar, quando precisei me reconstruir e encontrar forças que nem imaginava que tinha. Esteve comigo nas vezes em que só precisei parar, olhar para dentro e entender melhor o que eu estava sentindo, o que eu queria e para onde queria ir.\n\nEla me ajudou a me enxergar com mais amor, respeito e cuidado, a reconhecer minhas forças, entender meus limites e fazer escolhas mais conscientes. Ao longo desses anos, esteve comigo nos momentos difíceis, mas também nas conquistas, comemorando cada passo e cada transformação. Foram anos de muitas mudanças, recomeços, descobertas e construção de uma nova versão de mim.\n\nHoje, quando olho para mim e para onde estou, sinto orgulho de quem me tornei e de tudo o que venho construindo ao longo dessa jornada.\n\nSou muito grata por ter a Nat em tantos momentos da minha história e por poder contar com ela enquanto continuo me descobrindo, me transformando e aprendendo cada vez mais sobre mim.\n\nE uma última mensagem: façam terapia! 💛",
  },
];

// Posições iniciais de cada grupo no desktop para comportar 16 depoimentos:
// Páginas 1 a 5: 3 depoimentos cada | Página 6: 16º depoimento centralizado
const DESKTOP_PAGE_STARTS = [0, 3, 6, 9, 12, 15];

export const Testimonials: React.FC = () => {
  const [desktopPage, setDesktopPage] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [activeModalItem, setActiveModalItem] = useState<TestimonialItem | null>(null);

  // Controle de Swipe no Mobile
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const total = TESTIMONIALS_DATA.length;
  const totalDesktopPages = DESKTOP_PAGE_STARTS.length;

  const handleNext = () => {
    const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 768 : true;
    if (isDesktop) {
      setDesktopPage((prev) => {
        const next = (prev + 1) % totalDesktopPages;
        setMobileIndex(DESKTOP_PAGE_STARTS[next]);
        return next;
      });
    } else {
      setMobileIndex((prev) => {
        const next = (prev + 1) % total;
        // Ajusta a página do desktop mais próxima
        for (let p = DESKTOP_PAGE_STARTS.length - 1; p >= 0; p--) {
          if (next >= DESKTOP_PAGE_STARTS[p]) {
            setDesktopPage(p);
            break;
          }
        }
        return next;
      });
    }
  };

  const handlePrev = () => {
    const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 768 : true;
    if (isDesktop) {
      setDesktopPage((prev) => {
        const next = (prev - 1 + totalDesktopPages) % totalDesktopPages;
        setMobileIndex(DESKTOP_PAGE_STARTS[next]);
        return next;
      });
    } else {
      setMobileIndex((prev) => {
        const next = (prev - 1 + total) % total;
        for (let p = DESKTOP_PAGE_STARTS.length - 1; p >= 0; p--) {
          if (next >= DESKTOP_PAGE_STARTS[p]) {
            setDesktopPage(p);
            break;
          }
        }
        return next;
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const diff = touchStartXRef.current - touchEndXRef.current;
      // Limiar de 40px para swipe no mobile (avança/recua 1 depoimento por vez)
      if (diff > 40) {
        setMobileIndex((prev) => {
          const next = (prev + 1) % total;
          for (let p = DESKTOP_PAGE_STARTS.length - 1; p >= 0; p--) {
            if (next >= DESKTOP_PAGE_STARTS[p]) {
              setDesktopPage(p);
              break;
            }
          }
          return next;
        });
      } else if (diff < -40) {
        setMobileIndex((prev) => {
          const next = (prev - 1 + total) % total;
          for (let p = DESKTOP_PAGE_STARTS.length - 1; p >= 0; p--) {
            if (next >= DESKTOP_PAGE_STARTS[p]) {
              setDesktopPage(p);
              break;
            }
          }
          return next;
        });
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Travar o scroll da página enquanto o modal estiver aberto e fechar com Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModalItem) {
        setActiveModalItem(null);
      }
    };

    if (activeModalItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalItem]);

  // Desktop: grupo de 3 cards correspondente à página atual
  const desktopStart = DESKTOP_PAGE_STARTS[desktopPage];
  const desktopCards = TESTIMONIALS_DATA.slice(desktopStart, desktopStart + 3);

  // Mobile: 1 card por vez
  const mobileCard = TESTIMONIALS_DATA[mobileIndex];

  const renderCard = (item: TestimonialItem, isCentered = false) => {
    const hasFullTextButton = !item.isShort && Boolean(item.fullText);

    return (
      <article
        key={item.id}
        className={`bg-[#7C3320] p-5 sm:p-6 rounded-xl border border-[#9E4933] flex flex-col justify-between h-full min-h-[220px] text-left shadow-xs transition-all duration-200 hover:border-[#EADBCE]/60 ${
          isCentered ? 'md:col-start-2' : ''
        }`}
      >
        <div className="flex-1 flex flex-col justify-start text-left">
          <span
            className="font-serif text-2xl text-[#EADBCE] block mb-2 leading-none font-bold select-none text-left"
            aria-hidden="true"
          >
            “
          </span>
          <p className="font-serif italic text-base sm:text-[17px] text-[#FAF5EE] leading-relaxed whitespace-pre-line text-left">
            {item.highlight}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#9E4933]/70 flex flex-col gap-2 text-left">
          {hasFullTextButton && (
            <button
              type="button"
              onClick={() => setActiveModalItem(item)}
              className="self-start text-[12px] sm:text-[13px] text-[#EADBCE] hover:text-[#FAF5EE] underline-offset-4 hover:underline transition-colors font-medium flex items-center gap-1 cursor-pointer"
            >
              <span>Ler depoimento completo</span>
              <span aria-hidden="true">→</span>
            </button>
          )}

          <span className="font-sans font-bold text-xs tracking-wider text-[#FAF5EE]">
            {item.initials}
          </span>
        </div>
      </article>
    );
  };

  return (
    <section className="py-12 sm:py-16 bg-[#8F3E29] text-[#FAF5EE] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Cabeçalho da Seção (Inalterado) */}
        <div className="text-center max-w-xl mx-auto mb-7 sm:mb-9">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#EADBCE] font-semibold mb-1">
            Histórias de Transformação
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[38px] text-[#FAF5EE] font-medium leading-tight">
            Depoimentos
          </h2>
          <p className="mt-1 text-xs text-[#EADBCE]/80 font-normal">
            Relatos compartilhados com autorização e preservação do sigilo ético.
          </p>
        </div>

        {/* Área do Carrossel com suporte a swipe no mobile */}
        <div
          className="relative select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Visualização Desktop: 3 cards por vez (ou 1 card centralizado na última página) */}
          <div className="hidden md:grid md:grid-cols-3 gap-5 mb-6">
            {desktopCards.map((item) => renderCard(item, desktopCards.length === 1))}
          </div>

          {/* Visualização Mobile: 1 card por vez */}
          <div className="block md:hidden mb-6">
            {renderCard(mobileCard)}
          </div>

          {/* Controles de Navegação por setas e indicadores */}
          <div className="flex items-center justify-center gap-4 mb-9">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Ver depoimentos anteriores"
              className="p-2.5 rounded-full border border-[#9E4933] bg-[#7C3320] text-[#FAF5EE] hover:bg-[#6E2A18] hover:border-[#EADBCE]/70 transition-colors focus-visible:outline-2 focus-visible:outline-[#EADBCE] cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Contador / Indicador de posição */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7C3320]/60 border border-[#9E4933]/50 text-xs text-[#EADBCE] font-medium">
              {/* Desktop: indicador por grupo (ex: 1 / 5) */}
              <div className="hidden md:flex items-center gap-1.5">
                <span>{desktopPage + 1}</span>
                <span className="opacity-60">/</span>
                <span>{totalDesktopPages}</span>
              </div>

              {/* Mobile: indicador por depoimento individual (ex: 1 / 13) */}
              <div className="flex md:hidden items-center gap-1.5">
                <span>{mobileIndex + 1}</span>
                <span className="opacity-60">/</span>
                <span>{total}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Ver próximos depoimentos"
              className="p-2.5 rounded-full border border-[#9E4933] bg-[#7C3320] text-[#FAF5EE] hover:bg-[#6E2A18] hover:border-[#EADBCE]/70 transition-colors focus-visible:outline-2 focus-visible:outline-[#EADBCE] cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Botão de Agendamento da Seção */}
        <div className="flex justify-center">
          <CtaButton size="large" variant="light" />
        </div>
      </div>

      {/* Modal de Leitura Integral do Depoimento */}
      {activeModalItem && activeModalItem.fullText && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-depoimento-iniciais"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fade-in-gentle"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#7C3320] border border-[#9E4933] p-6 sm:p-8 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              aria-label="Fechar depoimento completo"
              className="absolute top-4 right-4 p-2 text-[#EADBCE] hover:text-[#FAF5EE] transition-colors rounded-lg cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <span className="font-serif text-3xl text-[#EADBCE] block mb-2 leading-none font-bold" aria-hidden="true">
              “
            </span>

            <div className="space-y-4 text-base sm:text-[17px] font-serif italic text-[#FAF5EE] leading-relaxed mb-6 whitespace-pre-line">
              {activeModalItem.fullText}
            </div>

            {/* Identificação no modal: SOMENTE as iniciais */}
            <div className="pt-3 border-t border-[#9E4933]/70">
              <span id="modal-depoimento-iniciais" className="font-sans font-bold text-sm tracking-wider text-[#FAF5EE]">
                {activeModalItem.initials}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
