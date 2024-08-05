import QuestionModel from "@/model/question";
import AnswerModel from "@/model/answer";

const DataQuestions: QuestionModel[] = [
  new QuestionModel(306, "Qual bicho transmite a Doença de Chagas?", [
    AnswerModel.toSetAsWrongAnswer("Abelha"),
    AnswerModel.toSetAsWrongAnswer("Barata"),
    AnswerModel.toSetAsWrongAnswer("Pulga"),
    AnswerModel.toSetAsCorrectAnswer("Barbeiro"),
  ]),
  new QuestionModel(
    202,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      AnswerModel.toSetAsWrongAnswer("Caju"),
      AnswerModel.toSetAsWrongAnswer("Côco"),
      AnswerModel.toSetAsWrongAnswer("Chuchu"),
      AnswerModel.toSetAsCorrectAnswer("Abóbora"),
    ]
  ),
  new QuestionModel(203, "Qual é o coletivo de cães?", [
    AnswerModel.toSetAsWrongAnswer("Manada"),
    AnswerModel.toSetAsWrongAnswer("Alcateia"),
    AnswerModel.toSetAsWrongAnswer("Rebanho"),
    AnswerModel.toSetAsCorrectAnswer("Matilha"),
  ]),
  new QuestionModel(
    204,
    "Qual é o triângulo que tem todos os lados diferentes?",
    [
      AnswerModel.toSetAsWrongAnswer("Equilátero"),
      AnswerModel.toSetAsWrongAnswer("Isóceles"),
      AnswerModel.toSetAsWrongAnswer("Trapézio"),
      AnswerModel.toSetAsCorrectAnswer("Escaleno"),
    ]
  ),
  new QuestionModel(205, "Quem compôs o Hino da Independência?", [
    AnswerModel.toSetAsWrongAnswer("Castro Alves"),
    AnswerModel.toSetAsWrongAnswer("Manuel Bandeira"),
    AnswerModel.toSetAsWrongAnswer("Carlos Gomes"),
    AnswerModel.toSetAsCorrectAnswer("Dom Pedro I"),
  ]),
  new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
    AnswerModel.toSetAsWrongAnswer("Perder"),
    AnswerModel.toSetAsWrongAnswer("Fracassar"),
    AnswerModel.toSetAsWrongAnswer("Desprezar"),
    AnswerModel.toSetAsCorrectAnswer("Conseguir"),
  ]),
  new QuestionModel(207, "Em que país nasceu Carmen Miranda?", [
    AnswerModel.toSetAsWrongAnswer("Argentina"),
    AnswerModel.toSetAsWrongAnswer("Espanha"),
    AnswerModel.toSetAsWrongAnswer("Brasil"),
    AnswerModel.toSetAsCorrectAnswer("Portugal"),
  ]),
  new QuestionModel(
    208,
    "Qual foi o último Presidente do período da ditadura militar no Brasil?",
    [
      AnswerModel.toSetAsWrongAnswer("Costa e Silva"),
      AnswerModel.toSetAsWrongAnswer("Emílio Médici"),
      AnswerModel.toSetAsWrongAnswer("Ernesto Geisel"),
      AnswerModel.toSetAsCorrectAnswer("João Figueiredo"),
    ]
  ),
  new QuestionModel(
    209,
    "Seguindo a sequência do baralho, qual carta vem depois do dez?",
    [
      AnswerModel.toSetAsWrongAnswer("Ás"),
      AnswerModel.toSetAsWrongAnswer("Nove"),
      AnswerModel.toSetAsWrongAnswer("Rei"),
      AnswerModel.toSetAsCorrectAnswer("Valete"),
    ]
  ),
  new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
    AnswerModel.toSetAsWrongAnswer("Vela"),
    AnswerModel.toSetAsWrongAnswer("Vento"),
    AnswerModel.toSetAsWrongAnswer("Vênia"),
    AnswerModel.toSetAsCorrectAnswer("Veia"),
  ]),
  new QuestionModel(211, "Que nome se dá à purificação por meio da água?", [
    AnswerModel.toSetAsWrongAnswer("Abrupção"),
    AnswerModel.toSetAsWrongAnswer("Abolição"),
    AnswerModel.toSetAsWrongAnswer("Abnegação"),
    AnswerModel.toSetAsCorrectAnswer("Ablução"),
  ]),
  new QuestionModel(
    212,
    "Qual montanha se localiza entre a fronteira do Tibet com o Nepal?",
    [
      AnswerModel.toSetAsWrongAnswer("Monte Branco"),
      AnswerModel.toSetAsWrongAnswer("Monte Fuji"),
      AnswerModel.toSetAsWrongAnswer("Monte Carlo"),
      AnswerModel.toSetAsCorrectAnswer("Monte Everest"),
    ]
  ),
  new QuestionModel(213, "Em que parte do corpo se encontra a epiglote?", [
    AnswerModel.toSetAsWrongAnswer("Estômago"),
    AnswerModel.toSetAsWrongAnswer("Pâncreas"),
    AnswerModel.toSetAsWrongAnswer("Rim"),
    AnswerModel.toSetAsCorrectAnswer("Pescoço"),
  ]),
  new QuestionModel(214, "A compensação por perda é chamada de...", [
    AnswerModel.toSetAsWrongAnswer("Déficit"),
    AnswerModel.toSetAsWrongAnswer("Indexação"),
    AnswerModel.toSetAsWrongAnswer("Indébito"),
    AnswerModel.toSetAsCorrectAnswer("Indenização"),
  ]),
  new QuestionModel(
    215,
    "Que personagem do folclore brasileiro tem uma perna só?",
    [
      AnswerModel.toSetAsWrongAnswer("Cuca"),
      AnswerModel.toSetAsWrongAnswer("Curupira"),
      AnswerModel.toSetAsWrongAnswer("Boitatá"),
      AnswerModel.toSetAsCorrectAnswer("Saci-pererê"),
    ]
  ),
  new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
    AnswerModel.toSetAsWrongAnswer("Marechal Deodoro"),
    AnswerModel.toSetAsWrongAnswer("Barão de Mauá"),
    AnswerModel.toSetAsWrongAnswer("Marquês de Pombal"),
    AnswerModel.toSetAsCorrectAnswer("Duque de Caxias"),
  ]),

  new QuestionModel(217, "Quem pintou a Mona Lisa?", [
    AnswerModel.toSetAsWrongAnswer("Vincent van Gogh"),
    AnswerModel.toSetAsWrongAnswer("Pablo Picasso"),
    AnswerModel.toSetAsWrongAnswer("Salvador Dalí"),
    AnswerModel.toSetAsCorrectAnswer("Leonardo da Vinci"),
  ]),
  new QuestionModel(218, "Qual é o menor país do mundo?", [
    AnswerModel.toSetAsWrongAnswer("Mônaco"),
    AnswerModel.toSetAsWrongAnswer("Malta"),
    AnswerModel.toSetAsWrongAnswer("San Marino"),
    AnswerModel.toSetAsCorrectAnswer("Vaticano"),
  ]),
  new QuestionModel(219, "Qual o maior planeta do sistema solar?", [
    AnswerModel.toSetAsWrongAnswer("Terra"),
    AnswerModel.toSetAsWrongAnswer("Marte"),
    AnswerModel.toSetAsWrongAnswer("Saturno"),
    AnswerModel.toSetAsCorrectAnswer("Júpiter"),
  ]),
  new QuestionModel(220, "Qual é a capital da Austrália?", [
    AnswerModel.toSetAsWrongAnswer("Sydney"),
    AnswerModel.toSetAsWrongAnswer("Melbourne"),
    AnswerModel.toSetAsWrongAnswer("Brisbane"),
    AnswerModel.toSetAsCorrectAnswer("Canberra"),
  ]),
  new QuestionModel(221, "Quem descobriu o Brasil?", [
    AnswerModel.toSetAsWrongAnswer("Cristóvão Colombo"),
    AnswerModel.toSetAsWrongAnswer("Américo Vespúcio"),
    AnswerModel.toSetAsWrongAnswer("Vasco da Gama"),
    AnswerModel.toSetAsCorrectAnswer("Pedro Álvares Cabral"),
  ]),
  new QuestionModel(222, "Qual é o elemento químico de símbolo O?", [
    AnswerModel.toSetAsWrongAnswer("Ouro"),
    AnswerModel.toSetAsWrongAnswer("Oxálio"),
    AnswerModel.toSetAsWrongAnswer("Ósmio"),
    AnswerModel.toSetAsCorrectAnswer("Oxigênio"),
  ]),
  new QuestionModel(223, "Qual é a língua oficial do Canadá?", [
    AnswerModel.toSetAsWrongAnswer("Espanhol"),
    AnswerModel.toSetAsWrongAnswer("Alemão"),
    AnswerModel.toSetAsWrongAnswer("Italiano"),
    AnswerModel.toSetAsCorrectAnswer("Inglês e Francês"),
  ]),
  new QuestionModel(224, "Qual é a montanha mais alta do mundo?", [
    AnswerModel.toSetAsWrongAnswer("K2"),
    AnswerModel.toSetAsWrongAnswer("Kangchenjunga"),
    AnswerModel.toSetAsWrongAnswer("Lhotse"),
    AnswerModel.toSetAsCorrectAnswer("Monte Everest"),
  ]),
  new QuestionModel(225, "Quem escreveu 'Dom Quixote'?", [
    AnswerModel.toSetAsWrongAnswer("William Shakespeare"),
    AnswerModel.toSetAsWrongAnswer("Fiódor Dostoiévski"),
    AnswerModel.toSetAsWrongAnswer("Gabriel García Márquez"),
    AnswerModel.toSetAsCorrectAnswer("Miguel de Cervantes"),
  ]),
  new QuestionModel(226, "Qual é a moeda do Japão?", [
    AnswerModel.toSetAsWrongAnswer("Won"),
    AnswerModel.toSetAsWrongAnswer("Yuan"),
    AnswerModel.toSetAsWrongAnswer("Baht"),
    AnswerModel.toSetAsCorrectAnswer("Iene"),
  ]),
  new QuestionModel(227, "Quem pintou o teto da Capela Sistina?", [
    AnswerModel.toSetAsWrongAnswer("Donatello"),
    AnswerModel.toSetAsWrongAnswer("Raphael"),
    AnswerModel.toSetAsWrongAnswer("Titian"),
    AnswerModel.toSetAsCorrectAnswer("Michelangelo"),
  ]),
  new QuestionModel(228, "Qual é o país mais populoso do mundo?", [
    AnswerModel.toSetAsWrongAnswer("Índia"),
    AnswerModel.toSetAsWrongAnswer("Estados Unidos"),
    AnswerModel.toSetAsWrongAnswer("Indonésia"),
    AnswerModel.toSetAsCorrectAnswer("China"),
  ]),
  new QuestionModel(229, "Quem foi o primeiro homem a pisar na Lua?", [
    AnswerModel.toSetAsWrongAnswer("Buzz Aldrin"),
    AnswerModel.toSetAsWrongAnswer("Yuri Gagarin"),
    AnswerModel.toSetAsWrongAnswer("Alan Shepard"),
    AnswerModel.toSetAsCorrectAnswer("Neil Armstrong"),
  ]),
  new QuestionModel(230, "Qual é o maior oceano do mundo?", [
    AnswerModel.toSetAsWrongAnswer("Oceano Atlântico"),
    AnswerModel.toSetAsWrongAnswer("Oceano Índico"),
    AnswerModel.toSetAsWrongAnswer("Oceano Ártico"),
    AnswerModel.toSetAsCorrectAnswer("Oceano Pacífico"),
  ]),
  new QuestionModel(231, "Qual é o maior mamífero do mundo?", [
    AnswerModel.toSetAsWrongAnswer("Elefante"),
    AnswerModel.toSetAsWrongAnswer("Hipopótamo"),
    AnswerModel.toSetAsWrongAnswer("Girafa"),
    AnswerModel.toSetAsCorrectAnswer("Baleia Azul"),
  ]),
  new QuestionModel(232, "Qual é a capital da Espanha?", [
    AnswerModel.toSetAsWrongAnswer("Barcelona"),
    AnswerModel.toSetAsWrongAnswer("Sevilha"),
    AnswerModel.toSetAsWrongAnswer("Valência"),
    AnswerModel.toSetAsCorrectAnswer("Madri"),
  ]),
  new QuestionModel(233, "Qual é o maior deserto do mundo?", [
    AnswerModel.toSetAsWrongAnswer("Deserto do Saara"),
    AnswerModel.toSetAsWrongAnswer("Deserto da Arábia"),
    AnswerModel.toSetAsWrongAnswer("Deserto de Gobi"),
    AnswerModel.toSetAsCorrectAnswer("Deserto da Antártida"),
  ]),
  new QuestionModel(234, "Qual é o rio mais longo do mundo?", [
    AnswerModel.toSetAsWrongAnswer("Rio Nilo"),
    AnswerModel.toSetAsWrongAnswer("Rio Yangtzé"),
    AnswerModel.toSetAsWrongAnswer("Rio Mississippi"),
    AnswerModel.toSetAsCorrectAnswer("Rio Amazonas"),
  ]),
  new QuestionModel(235, "Quem escreveu 'O Pequeno Príncipe'?", [
    AnswerModel.toSetAsWrongAnswer("J.K. Rowling"),
    AnswerModel.toSetAsWrongAnswer("George Orwell"),
    AnswerModel.toSetAsWrongAnswer("Mark Twain"),
    AnswerModel.toSetAsCorrectAnswer("Antoine de Saint-Exupéry"),
  ]),
  new QuestionModel(236, "Qual é a capital do Canadá?", [
    AnswerModel.toSetAsWrongAnswer("Toronto"),
    AnswerModel.toSetAsWrongAnswer("Vancouver"),
    AnswerModel.toSetAsWrongAnswer("Montreal"),
    AnswerModel.toSetAsCorrectAnswer("Ottawa"),
  ]),
];

export default DataQuestions;
