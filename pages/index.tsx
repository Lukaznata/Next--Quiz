import styles from "@/styles/Home.module.css";
import Button from "@/components/Button";
export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Clique em começar para começar o Quiz!</h1>
      <Button text="COMEÇAR" href="/start" />
    </div>
  );
}
