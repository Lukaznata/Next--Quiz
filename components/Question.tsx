import QuestionModel from "@/model/question";

import styles from "@/styles/Question.module.css";

import Statement from "./Statement";
import Answer from "./Answer";
import Timer from "./Timer";

const letters = [
  { value: "A", bgColor: "#20db4bcf" },
  { value: "B", bgColor: "#F266BA" },
  { value: "C", bgColor: "#000203" },
  { value: "D", bgColor: "#19d3f4" },
];

interface QuestionProps {
  value: QuestionModel;
  timeToAnswer?: number;
  onResponse: (index: number) => void;
  timeIsOver: () => void;
}

export default function Question(props: QuestionProps) {
  const question = props.value;

  const renderAnswers = () => {
    return question.answersQuestion.map((answer, i) => {
      return (
        <Answer
          key={`${question.idQuestion}-${i}`}
          value={answer}
          index={i}
          letter={letters[i].value}
          backgroundLetterColor={letters[i].bgColor}
          onResponse={props.onResponse}
        />
      );
    });
  };

  return (
    <div className={styles.question}>
      <Statement text={question.statementQuestion} />
      <Timer
        key={question.idQuestion}
        duration={props.timeToAnswer ?? 10}
        timeIsOver={props.timeIsOver}
      />
      {renderAnswers()}
    </div>
  );
}
