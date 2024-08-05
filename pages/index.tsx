import styles from "@/styles/Home.module.css";
import Button from "@/components/Button";
export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Clique para começar o Quiz! Boa sorte!</h1>
      <Button text="COMEÇAR" href="/start" />
    </div>
  );
}
