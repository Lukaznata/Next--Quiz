interface IAnswer {
  valueAnswer: string;
  isCorrectAnswer: boolean;
  revealedAnswer: boolean;
}

class AnswerModel implements IAnswer {
  #_valueAnswer: string;
  #_isCorrectAnswer: boolean;
  #_revealedAnswer: boolean;

  constructor(
    valueAnswer: string,
    isCorrectAnswer: boolean,
    revealedAnswer: boolean = false
  ) {
    if (typeof valueAnswer !== "string" || valueAnswer.trim() === "") {
      throw new Error("valueAnswer deve ser uma string não vazia.");
    }
    if (typeof isCorrectAnswer !== "boolean") {
      throw new Error("isCorrectAnswer deve ser um booleano.");
    }
    if (typeof revealedAnswer !== "boolean") {
      throw new Error("revealedAnswer deve ser um booleano.");
    }

    this.#_valueAnswer = valueAnswer;
    this.#_isCorrectAnswer = isCorrectAnswer;
    this.#_revealedAnswer = revealedAnswer;
  }

  static toSetAsCorrectAnswer(value: string) {
    return new AnswerModel(value, true);
  }
  static toSetAsWrongAnswer(value: string) {
    return new AnswerModel(value, false);
  }

  get valueAnswer() {
    return this.#_valueAnswer;
  }
  get isCorrectAnswer() {
    return this.#_isCorrectAnswer;
  }
  get revealedAnswer() {
    return this.#_revealedAnswer;
  }

  toReveal() {
    return new AnswerModel(this.#_valueAnswer, this.#_isCorrectAnswer, true);
  }

  toConvertToObject() {
    return {
      valueAnswer: this.#_valueAnswer,
      isCorrectAnswer: this.#_isCorrectAnswer,
      revealedAnswer: this.#_revealedAnswer,
    };
  }

  static toCreateANInstanceFromObject(obj: AnswerModel): AnswerModel {
    return new AnswerModel(
      obj.valueAnswer,
      obj.isCorrectAnswer,
      obj.revealedAnswer
    );
  }
}

export default AnswerModel;
