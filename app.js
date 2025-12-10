// Quiz dos 4 temperamentos - Helder Labs (tema off-white)
const questions = [
  {
    q: "No seu tempo livre, você prefere:",
    a: [
      "Praticar atividades desafiadoras ou competitivas.",
      "Dedicar-se a hobbies que exigem atenção e perfeição.",
      "Relaxar e aproveitar momentos de paz.",
      "Sair, socializar e se divertir com outras pessoas."
    ]
  },
  {
    q: "Quando está lidando com prazos e pressão, você:",
    a: [
      "Age rapidamente para entregar resultados.",
      "Sente-se pressionado, mas tenta manter a qualidade.",
      "Mantém a serenidade, mesmo que demore mais.",
      "Pode se distrair, mas geralmente consegue concluir a tempo."
    ]
  },
  {
    q: "Seus amigos diriam que você é:",
    a: [
      "Determinado e cheio de iniciativa.",
      "Confiável e profundo.",
      "Calmo e equilibrado.",
      "Alegre e divertido."
    ]
  },
  {
    q: "Sua energia social é:",
    a: [
      "Alta, mas focada em objetivos e resultados.",
      "Moderada, preferindo grupos pequenos e conhecidos.",
      "Baixa, gostando mais de momentos tranquilos.",
      "Muito alta, adorando conhecer e conversar com novas pessoas."
    ]
  },
  {
    q: "Quando algo dá errado, você:",
    a: [
      "Assume a responsabilidade e tenta resolver imediatamente.",
      "Fica frustrado e repassa mentalmente o que poderia ter feito melhor.",
      "Mantém a calma e busca adaptar-se.",
      "Busca apoio das pessoas próximas para se sentir melhor."
    ]
  },
  {
    q: "Ao trabalhar em grupo, você costuma:",
    a: [
      "Assumir o comando e direcionar o time.",
      "Fazer seu trabalho com excelência, focado nos detalhes.",
      "Colaborar de forma tranquila, evitando conflitos.",
      "Animar o grupo, trazendo leveza e entusiasmo."
    ]
  },
  {
    q: "Você se sente mais motivado quando:",
    a: [
      "Está competindo ou sendo desafiado.",
      "Está buscando a excelência e a perfeição.",
      "Sabe que será valorizado pela sua lealdade e constância.",
      "Está se divertindo e interagindo com pessoas."
    ]
  },
  {
    q: "Sobre mudanças inesperadas na rotina, você:",
    a: [
      "Se adapta rapidamente e toma decisões firmes.",
      "Se sente desconfortável e precisa de tempo para se ajustar.",
      "Aceita com tranquilidade, tentando manter a estabilidade.",
      "Vê como uma oportunidade divertida de novas experiências."
    ]
  },
  {
    q: "Quando está em um novo ambiente social, você:",
    a: [
      "Toma a iniciativa de dirigir as atividades.",
      "Observa e só se envolve se sentir segurança.",
      "Fica tranquilo, sem necessidade de se destacar.",
      "Faz amizades rapidamente e se enturma fácil."
    ]
  },
  {
    q: "No seu dia a dia, você se considera uma pessoa:",
    a: [
      "Determinada e competitiva.",
      "Perfeccionista e sensível.",
      "Pacífica e paciente.",
      "Animada e expansiva."
    ]
  },
  {
    q: "Quando se trata de planejar algo novo, você:",
    a: [
      "Quer começar logo e fazer acontecer.",
      "Gosta de planejar cada detalhe antes de agir.",
      "Prefere deixar acontecer naturalmente, sem estresse.",
      "Se empolga com as ideias e gosta de envolver os outros."
    ]
  },
  {
    q: "Quando alguém te critica, você:",
    a: [
      "Fica irritado e defende seu ponto de vista.",
      "Reflete profundamente sobre a crítica.",
      "Tende a relevar e não se abalar.",
      "Fica um pouco chateado, mas logo esquece."
    ]
  },
  {
    q: "Em relação às suas tarefas e compromissos, você:",
    a: [
      "Gosta de desafiar-se e alcançar resultados rapidamente.",
      "É muito organizado e detalhista.",
      "Prefere não se apressar, mantendo um ritmo constante.",
      "Às vezes se distrai, mas sempre dá um jeito de cumprir."
    ]
  },
  {
    q: "Quando enfrenta um problema, você tende a:",
    a: [
      "Resolver rapidamente, sem hesitar.",
      "Pensar bastante antes de agir para evitar erros.",
      "Aceitar a situação com calma e esperar o melhor.",
      "Buscar apoio em amigos e conversar sobre o problema."
    ]
  },
  {
    q: "Em um grupo de pessoas, você geralmente:",
    a: [
      "Assume a liderança naturalmente.",
      "Observa e analisa o ambiente antes de agir.",
      "Prefere ficar mais reservado e tranquilo.",
      "Gosta de socializar e fazer todos se sentirem bem."
    ]
  }
];

let index = 0;
let answers = [];

// Mapeamento das letras para temperamento
const mapTemperamento = {
  A: "COLÉRICO",
  B: "MELANCÓLICO",
  C: "FLEUMÁTICO",
  D: "SANGUÍNEO"
};

function renderQuestion() {
  if (index >= questions.length) {
    return renderResult();
  }
  const q = questions[index];
  const html = `
    <div class="question">${q.q}</div>
    <button class="btn" onclick="answer('A')">A — ${q.a[0]}</button>
    <button class="btn" onclick="answer('B')">B — ${q.a[1]}</button>
    <button class="btn" onclick="answer('C')">C — ${q.a[2]}</button>
    <button class="btn" onclick="answer('D')">D — ${q.a[3]}</button>
    <div class="progress">Pergunta ${index + 1} de ${questions.length}</div>
  `;
  document.getElementById("content").innerHTML = html;
}

function answer(letter) {
  answers.push(letter);
  index++;
  renderQuestion();
}

function renderResult() {
  if (answers.length === 0) {
    document.getElementById("content").innerHTML = `
      <h2>Nenhuma resposta registrada</h2>
      <p>Responda ao quiz para descobrir seu temperamento dominante e secundário.</p>
      <button class="btn" onclick="restart()">Começar agora</button>
    `;
    return;
  }

  const count = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach(l => { if (count[l] !== undefined) count[l]++; });

  const entries = Object.entries(count).sort((a, b) => b[1] - a[1]);
  const dominanteLetra = entries[0][0];
  const secundariaLetra = entries[1][0];

  const dominante = mapTemperamento[dominanteLetra];
  const secundario = mapTemperamento[secundariaLetra];

  const html = `
    <h2>Seu temperamento dominante é:</h2>
    <h1>${dominante}</h1>
    <p>${interpretacao(dominante)}</p>
    <h3>Temperamento secundário:</h3>
    <p>${secundario} — ${resumoSecundario(secundario)}</p>
    <button class="btn" onclick="restart()">Refazer o quiz</button>
  `;
  document.getElementById("content").innerHTML = html;
}

function interpretacao(t) {
  switch (t) {
    case "COLÉRICO":
      return "Orientado à ação, foco em resultados e rapidez para decidir. Tende a assumir liderança, enfrentar desafios e mover projetos adiante. Ponto de atenção: evitar impulsividade, dureza excessiva e baixa escuta.";
    case "MELANCÓLICO":
      return "Analítico, profundo, sensível e cuidadoso com detalhes. Busca excelência, organização e sentido no que faz. Ponto de atenção: não permitir que perfeccionismo e autocrítica atrasem ou impeçam a ação.";
    case "FLEUMÁTICO":
      return "Calmo, estável, paciente e confiável. Mantém a paz, sustenta processos no longo prazo e evita conflitos. Ponto de atenção: não se acomodar demais nem adiar decisões importantes.";
    case "SANGUÍNEO":
      return "Comunicativo, expansivo, criativo e voltado para pessoas. Traz leveza, entusiasmo e conexão aos ambientes. Ponto de atenção: desenvolver foco, disciplina e consistência para concluir o que começa.";
    default:
      return "";
  }
}

function resumoSecundario(t) {
  switch (t) {
    case "COLÉRICO":
      return "Força de ação, decisão e iniciativa.";
    case "MELANCÓLICO":
      return "Profundidade, visão de detalhes e análise.";
    case "FLEUMÁTICO":
      return "Equilíbrio, paciência e estabilidade emocional.";
    case "SANGUÍNEO":
      return "Carisma, energia social e criatividade.";
    default:
      return "";
  }
}

function restart() {
  index = 0;
  answers = [];
  renderQuestion();
}

// Inicializa o quiz
renderQuestion();
