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
      props.question.answeredQuestion;
      props.answeredQuestion(props.question.answerWith(index));
    }

    setTimeout(() => {
      props.question.answeredQuestion && props.goToNextStep();
    }, 2000);
  };

  return (
    <>
      <div className={styles.quiz}>
        {!props.question ? (
          <div></div>
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
