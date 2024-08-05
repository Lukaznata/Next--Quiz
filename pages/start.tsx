import Quiz from "@/components/Quiz";

import QuestionModel from "@/model/question";

import { useEffect, useState } from "react";

import { useRouter } from "next/router";

// const BASE_URL = "https://quiznext-two.vercel.app/api";
const BASE_URL = "http://localhost:3000/api";

export default function Start() {
  const router = useRouter();

  const [questionsIds, setQuestionIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [rightAnswers, setRightAnswers] = useState(0);

  function getFirstTenIds(questionIds: number[]): number[] {
    return questionIds.slice(0, 10);
  }

  async function loadIdQuestions() {
    try {
      const resp = await fetch(`${BASE_URL}/quiz`);
      const questionsIds = await resp.json();

      setQuestionIds(getFirstTenIds(questionsIds));
    } catch (error) {
      console.log(`Ocorreu um erro: ${error}`);
    }
  }

  async function loadQuestion(idQuestion: number) {
    try {
      const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`);
      const json = await resp.json();

      const newQuestion = QuestionModel.toCreateANInstanceFromObject(json);

      setQuestion(newQuestion);
    } catch (error) {
      console.log(`Ocorreu um erro: ${error}`);
    }
  }

  useEffect(() => {
    loadIdQuestions();
  }, []);

  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0]);
  }, [questionsIds]);

  function answeredQuestion(answeredQuestion: QuestionModel) {
    setQuestion(answeredQuestion);

    const gotTheQuestion = answeredQuestion.gotTheQuestion;

    setRightAnswers(rightAnswers + (gotTheQuestion ? 1 : 0));
  }

  function nextQuestionId() {
    if (question) {
      const nextIndex = questionsIds.indexOf(question.idQuestion) + 1;
      return questionsIds[nextIndex];
    }
  }

  function goToNextStep() {
    const nextId = nextQuestionId();
    nextId ? goToNextQuestion(nextId) : finished();
  }

  function goToNextQuestion(nextId: number) {
    loadQuestion(nextId);
  }

  function finished() {
    router.push({
      pathname: "/result",
      query: {
        total: questionsIds.length,
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
        <div></div>
      )}
    </>
  );
}
