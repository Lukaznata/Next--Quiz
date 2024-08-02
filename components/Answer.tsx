import AnswerModel from "@/model/answer";

import styles from "@/styles/Answer.module.css";

interface answerProps {
  value: AnswerModel;
  index: number;
  letter: string;
  backgroundLetterColor: string;
  onResponse: (index: number) => void;
}

export default function Answer(props: answerProps) {
  const answer = props.value;
  const revealedAnswer = answer.revealedAnswer ? styles.revealedAnswer : "";

  return (
    <>
      <div
        className={styles.answer}
        onClick={() => props.onResponse(props.index)}
      >
        <div className={`${revealedAnswer} ${styles.answerContent} `}>
          <div className={styles.front}>
            <div
              className={styles.letter}
              style={{ backgroundColor: props.backgroundLetterColor }}
            >
              {props.letter}
            </div>
            <div className={styles.value}> {answer.valueAnswer} </div>
          </div>

          <div className={styles.back}>
            {answer.isCorrectAnswer ? (
              <div className={styles.rightAnswer}>
                <div> A resposta certa é... </div>
                <div className={styles.valueAnswer}>{answer.valueAnswer}</div>
              </div>
            ) : (
              <div className={styles.wrongAnswer}>
                <div> A resposta informada está errada... </div>
                <div className={styles.valueAnswer}>{answer.valueAnswer}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
