import styles from "@/styles/Timer.module.css";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface timerProps {
  key: any;
  duration: number;
  timeIsOver: () => void;
}

export default function Timer(props: timerProps) {
  return (
    <>
      <div className={styles.timer}>
        <CountdownCircleTimer
          isPlaying
          duration={props.duration}
          colors={["#BCE596", "#F7B801", "#f43131", "#39002d"]}
          isSmoothColorTransition
          trailColor="#ffffff"
          colorsTime={[
            props.duration * 0.75,
            props.duration * 0.5,
            props.duration * 0.25,
            props.duration * 0,
          ]}
          size={120}
          onComplete={props.timeIsOver}
        >
          {({ remainingTime, elapsedTime, color }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </>
  );
}
