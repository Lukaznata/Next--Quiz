import styles from "@/styles/Statistics.module.css";

interface statisticsProps {
  value: any;
  text: string;
  bgColor?: string;
  fontColor?: string;
}

export default function Statistics(props: statisticsProps) {
  return (
    <>
      <div className={styles.statistics}>
        <div
          className={styles.value}
          style={{
            backgroundColor: props.bgColor ?? "#e4ca4b",
            color: props.fontColor ?? "#333",
          }}
        >
          {props.value}
        </div>

        <div className={styles.text}>{props.text}</div>
      </div>
    </>
  );
}
