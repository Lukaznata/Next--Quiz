import type { NextApiRequest, NextApiResponse } from "next";

import DataQuestions from "../dataQuestions";

import { shuffleNumbers } from "@/functions/arrays";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const QuestionIds = DataQuestions.map((question) => question.idQuestion);
  res.status(200).json(shuffleNumbers(QuestionIds));
}
