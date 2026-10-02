export interface NavItem {
  label: string;
  href: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  name: "Nataly Messia",
  fullName: "Nataly Pereira Messia",
  profession: "Psicóloga",
  crp: "CRP 08/28444",
  education: "Formada pela Unicesumar (Maringá, 2018)",
  approach: "Gestalt-terapia e práticas integrativas de arte e escrita",
  experience: "Quase 8 anos de atuação clínica",
  serviceModality: "Atendimento exclusivamente online para adultos no Brasil e no exterior",
  instagram: {
    handle: "@natalymessia",
    url: "https://www.instagram.com/natalymessia",
  },
  whatsapp: {
    phoneNumber: "5544991465122",
    getLink: (_customMessage?: string) =>
      `https://wa.me/${SITE_CONFIG.whatsapp.phoneNumber}`,
  },
  navItems: [
    { label: "Início", href: "#inicio" },
    { label: "Psicoterapia", href: "#psicoterapia" },
    { label: "Como eu trabalho", href: "#como-trabalho" },
    { label: "Sobre mim", href: "#sobre-mim" },
    { label: "Dúvidas frequentes", href: "#duvidas" },
  ] as NavItem[],
  faqItems: [
    {
      id: "o-que-e-psicoterapia-breve",
      question: "O que é psicoterapia breve?",
      answer:
        "A psicoterapia breve é uma modalidade de atendimento com foco em uma questão específica que você deseja trabalhar.\n\nNo início do processo, definimos juntas qual será essa questão e, a partir dela, direcionamos os encontros. Outros aspectos da sua história podem surgir e ser trabalhados quando estiverem relacionados ao tema principal, mantendo o foco para que o processo não se disperse.\n\nNão existe um número fixo de sessões: o tempo necessário depende da sua demanda e de como o processo se desenvolve. Quando entendermos que aquele tema foi suficientemente trabalhado, podemos encerrar esse ciclo ou, se você desejar, iniciar um novo, com uma nova questão.",
    },
    {
      id: "como-funciona-o-primeiro-encontro",
      question: "Como funciona o primeiro encontro?",
      answer:
        "O primeiro encontro é um momento para nos conhecermos e compreendermos o que trouxe você até a psicoterapia.\n\nVocê poderá me contar sobre o que está vivendo, suas principais dificuldades e aquilo que gostaria de trabalhar. A partir dessa conversa, vamos identificar juntas qual será o foco inicial do processo e quais caminhos podemos seguir.\n\nTambém é um espaço para você conhecer um pouco mais da minha forma de trabalhar, tirar suas dúvidas e perceber se faz sentido para você seguirmos juntas.",
    },
    {
      id: "quantas-sessoes-vou-precisar",
      question: "Quantas sessões vou precisar?",
      answer:
        "Não existe um número fixo de sessões. A Psicoterapia Breve parte de um foco definido, mas o tempo necessário para trabalhá-lo varia de pessoa para pessoa.\n\nEsse processo depende de diferentes fatores, como a história de cada pessoa, seu nível de consciência e compreensão sobre o que está vivendo, suas experiências anteriores, resistências e o próprio movimento de mudança ao longo da terapia.\n\nPor isso, não estabeleço uma estimativa de tempo logo no primeiro encontro. O processo é acompanhado e avaliado ao longo das sessões, respeitando o ritmo e as necessidades de cada pessoa.",
    },
    {
      id: "posso-fazer-apenas-uma-sessao",
      question: "Posso fazer apenas uma sessão?",
      answer:
        "Sim e não. A primeira sessão já pode trazer clareza sobre o que você está vivendo e também é um momento para percebermos se existe identificação para seguirmos o processo juntas.\n\nMas uma única sessão é pouco diante do que podemos alcançar em um processo terapêutico. Seria como tentar esvaziar uma casa inundada usando apenas um balde: ajuda naquele momento, mas ainda existe muito a ser cuidado.",
    },
    {
      id: "duracao-e-frequencia",
      question: "Quanto tempo dura cada sessão e com que frequência acontecem os encontros?",
      answer:
        "Cada sessão tem duração de 50 minutos e os encontros acontecem uma vez por semana, no mesmo dia e horário previamente acordados.\n\nA regularidade dos encontros é importante para dar continuidade ao processo terapêutico e ao trabalho que vamos construindo juntas ao longo das sessões.\n\nO atendimento é exclusivamente online e para adultos.",
    },
    {
      id: "atrasos-cancelamentos-remarcacoes",
      question: "Como funcionam atrasos, cancelamentos e remarcações?",
      answer:
        "O horário da sessão é reservado exclusivamente para você. Por isso, peço que qualquer necessidade de cancelamento ou remarcação seja comunicada com pelo menos 24 horas de antecedência. Nesse caso, verificaremos juntas a possibilidade de um novo dia e horário que seja adequado para ambas.\n\nEm caso de atraso, aguardo por até 15 minutos. Após esse período, se não houver nenhum aviso, a sessão será considerada realizada e o valor será cobrado, sem possibilidade de reposição.\n\nDa mesma forma, faltas sem aviso prévio são cobradas, pois aquele horário permaneceu reservado e disponível para o seu atendimento.\n\nSituações excepcionais e imprevistos importantes poderão ser avaliados individualmente.",
    },
    {
      id: "como-funciona-o-pagamento",
      question: "Como funciona o pagamento?",
      answer:
        "A primeira sessão é paga de forma avulsa e antecipada, via Pix.\n\nA partir da continuidade do processo terapêutico, o pagamento passa a ser mensal, calculado de acordo com o número de sessões previstas para aquele mês e realizado até o dia 10.\n\nO valor da sessão é informado diretamente pelo WhatsApp.",
    },
    {
      id: "terapia-morando-fora-do-brasil",
      question: "Posso fazer terapia morando fora do Brasil?",
      answer:
        "Sim. Se você é brasileira e atualmente mora em outro país, pode realizar a psicoterapia on-line normalmente.\n\nOs encontros acontecem por videochamada e podemos ajustar os horários considerando a diferença de fuso horário.\n\nNesse caso, o atendimento é realizado de acordo com as normas e legislações brasileiras que regulamentam a prática da Psicologia.",
    },
    {
      id: "sigilo-das-sessoes",
      question: "Como funciona o sigilo das sessões?",
      answer:
        "Tudo o que é compartilhado durante as sessões é protegido pelo sigilo profissional, conforme estabelece o Código de Ética da Psicologia.\n\nIsso significa que você terá um espaço seguro e confidencial para falar sobre suas experiências, sentimentos e questões pessoais com liberdade e privacidade, sem julgamentos.\n\nO sigilo é um compromisso fundamental do processo terapêutico. Existem apenas situações excepcionais, previstas pelas normas profissionais e pela legislação, em que determinadas informações podem precisar ser comunicadas. Nesses casos, são compartilhadas somente as informações estritamente necessárias e comunicado a você previamente.",
    },
    {
      id: "como-agendar-primeiro-atendimento",
      question: "Como agendar meu primeiro atendimento?",
      answer:
        "Isso é muito fácil. Para agendar, basta entrar em contato comigo pelo WhatsApp através de um dos botões disponíveis aqui no site.\n\nConversaremos brevemente sobre o que você está buscando e verificaremos os dias e horários disponíveis para o seu primeiro encontro.\n\nA partir daí, combinamos tudo o que você precisa saber para iniciarmos.",
    },
  ] as FAQItem[],
};
