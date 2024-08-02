import Quiz from "@/components/Quiz";

import QuestionModel from "@/model/question";

import { useEffect, useState } from "react";

import { useRouter } from "next/router";

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const router = useRouter();

  const [questionIds, setQuestionIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [rightAnswers, setRightAnswers] = useState<number>(0);

  async function loadIdQuestions() {
    try {
      const resp = await fetch(`${BASE_URL}/quiz`);
      const questionIds = await resp.json();

      setQuestionIds(questionIds);
    } catch (error) {}
  }

  async function loadQuestion(idQuestion: number) {
    try {
      const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`);
      const json = await resp.json();

      const newQuestion = QuestionModel.toCreateANInstanceFromObject(json);

      setQuestion(newQuestion);
    } catch (error) {
      return console.log(`Ocorreu um erro: ${error}`);
    }
  }

  useEffect(() => {
    loadIdQuestions();
  }, []);

  useEffect(() => {
    questionIds.length > 0 && loadQuestion(questionIds[0]);
  }, [questionIds]);

  function answeredQuestion(answeredQuestion: QuestionModel) {
    setQuestion(answeredQuestion);

    const gotTheQuestion = answeredQuestion.gotTheQuestion;

    setRightAnswers(rightAnswers + (gotTheQuestion ? 1 : 0));
  }

  function nextQuestionId() {
    if (question) {
      const nextIndex = questionIds.indexOf(question.idQuestion) + 1;
      return questionIds[nextIndex];
    }
  }

  function goToNextStep() {
    const nextId = nextQuestionId();
    nextId ? goToNextQuestion(nextId) : toFinish();
  }

  function goToNextQuestion(nextId: number) {
    loadQuestion(nextId);
  }

  function toFinish() {
    router.push({
      pathname: "/result",
      query: {
        total: questionIds.length,
        right: rightAnswers,
      },
    });
  }

  return (
    <>
      {question ? (
        <Quiz
          question={question}
          lastQuestion={nextQuestionId() === undefined}
          answeredQuestion={answeredQuestion}
          goToNextStep={goToNextStep}
        />
      ) : (
        <h1>Carregando...</h1>
      )}
    </>
  );
}
