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
];

export default DataQuestions;
