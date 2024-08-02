import type { NextApiRequest, NextApiResponse } from "next";

import DataQuestions from "../dataQuestions";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const idParams = parseInt(req.query.questionIdParam as string);
  const uniqueQuestionOrNothing = DataQuestions.filter(
    (question) => question.idQuestion === idParams
  );

  if (uniqueQuestionOrNothing.length === 1) {
    const selectedQuestion = uniqueQuestionOrNothing[0].toShuffleAnswers();

    res.status(200).json(selectedQuestion.toConvertToObject());
  } else {
    res.status(204).send("Nenhum conteúdo encontrado");
  }

  try {
    const questionObjects = DataQuestions[0].toConvertToObject();

    res.status(200).json(questionObjects);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        msg: `Ocorreu um erro ao processar a requisição: ${error.message}`,
      });
    } else {
      res.status(500).json({
        msg: "Ocorreu um erro ao processar a requisição.",
      });
    }
  }
}
