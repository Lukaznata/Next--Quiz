import { shuffleNumbers } from "@/functions/arrays";
import answerModel from "./answer";
import AnswerModel from "./answer";

interface IQuestion {
  idQuestion: number;
  statementQuestion: string;
  answersQuestion: answerModel[];
  gotTheQuestion: boolean;
  answeredQuestion: boolean;
}

class QuestionModel implements IQuestion {
  #_idQuestion: number;
  #_statementQuestion: string;
  #_answersQuestion: answerModel[];
  #_gotTheQuestion: boolean;

  constructor(
    idQuestion: number,
    statementQuestion: string,
    answersQuestion: answerModel[],
    gotTheQuestion: boolean = false
  ) {
    if (typeof idQuestion !== "number" || idQuestion <= 0) {
      throw new Error("idQuestion da questão deve ser um number positivo.");
    }
    if (
      typeof statementQuestion !== "string" ||
      statementQuestion.trim() === ""
    ) {
      throw new Error("statementQuestion deve ser uma string não vazia");
    }
    if (!Array.isArray(answersQuestion) || answersQuestion.length === 0) {
      throw new Error(
        "answersQuestion devem ser uma lista não vazia de answerModel"
      );
    }
    if (typeof gotTheQuestion !== "boolean") {
      throw new Error("gotTheQuestion deve ser um boolean");
    }

    this.#_idQuestion = idQuestion;
    this.#_statementQuestion = statementQuestion;
    this.#_answersQuestion = answersQuestion;
    this.#_gotTheQuestion = gotTheQuestion;
  }

  get idQuestion() {
    return this.#_idQuestion;
  }
  get statementQuestion() {
    return this.#_statementQuestion;
  }
  get answersQuestion() {
    return this.#_answersQuestion;
  }
  get gotTheQuestion() {
    return this.#_gotTheQuestion;
  }
  get notAnsweredQuestion() {
    return !this.answeredQuestion;
  }
  get answeredQuestion() {
    for (let answer of this.answersQuestion) {
      if (answer.revealedAnswer) return true;
    }
    return false;
  }

  answerWith(index: number): QuestionModel {
    const rightOrWrongAnswer = this.#_answersQuestion[index]?.isCorrectAnswer;
    const timeIsOver = index === undefined;

    const checkedAnswers = this.#_answersQuestion.map((answer, i) => {
      const selectedAnswer = index === i;
      const mustReveal = selectedAnswer || answer.isCorrectAnswer;
      return mustReveal ? answer.toReveal() : answer;
    });

    return new QuestionModel(
      this.idQuestion,
      this.statementQuestion,
      checkedAnswers,
      timeIsOver ? false : rightOrWrongAnswer
    );
  }

  toShuffleAnswers(): QuestionModel {
    let shuffleAnswers = shuffleNumbers(this.#_answersQuestion);
    return new QuestionModel(
      this.#_idQuestion,
      this.#_statementQuestion,
      shuffleAnswers,
      this.#_gotTheQuestion
    );
  }

  toConvertToObject() {
    return {
      idQuestion: this.#_idQuestion,
      statementQuestion: this.#_statementQuestion,
      answersQuestion: this.#_answersQuestion.map((answer) =>
        answer.toConvertToObject()
      ),
      answeredQuestion: this.answeredQuestion,
      gotTheQuestion: this.gotTheQuestion,
    };
  }

  static toCreateANInstanceFromObject(obj: QuestionModel): QuestionModel {
    const answers = obj.answersQuestion.map((answer) => {
      return AnswerModel.toCreateANInstanceFromObject(answer);
    });
    return new QuestionModel(
      obj.idQuestion,
      obj.statementQuestion,
      answers,
      obj.gotTheQuestion
    );
  }
}

export default QuestionModel;
