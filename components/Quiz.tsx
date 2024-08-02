import styles from "@/styles/Quiz.module.css";

import QuestionModel from "@/model/question";
import Question from "./Question";
import Button from "./Button";

interface quizProps {
  question: QuestionModel;
  lastQuestion: boolean;
  answeredQuestion: (question: QuestionModel) => void;
  goToNextStep: () => void;
}

export default function Quiz(props: quizProps) {
  const onResponse = (index: number) => {
    if (props.question.notAnsweredQuestion) {
      props.answeredQuestion(props.question.answerWith(index));
    }
  };

  return (
    <>
      <div className={styles.quiz}>
        {!props.question ? (
          <h1>Carregando...</h1>
        ) : (
          <Question
            value={props.question}
            timeToAnswer={30}
            onResponse={onResponse}
            timeIsOver={props.goToNextStep}
          />
        )}

        <Button
          text={props.lastQuestion ? "Finalizar" : "Próxima"}
          onClick={props.goToNextStep}
        />
      </div>
    </>
  );
}
