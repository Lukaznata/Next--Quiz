import styles from "@/styles/Statement.module.css";

interface statementProps {
  text: string;
}

export default function Statement(props: statementProps) {
  return (
    <>
      <div className={styles.statement}>
        <div className={styles.text}> {props.text} </div>
      </div>
    </>
  );
}
