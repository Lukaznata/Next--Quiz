import Button from "@/components/Button";
import Statistics from "@/components/Statistics";

import styles from "@/styles/result.module.css";

import { useRouter } from "next/router";

export default function Result() {
  const router = useRouter();
  const total = +(router.query.total as string);
  const right = +(router.query.right as string);

  const percentage = Math.round((right / total) * 100);
  return total ? (
    <div className={styles.result}>
      <h1>Resultado Final</h1>

      <div style={{ display: "flex" }}>
        <Statistics value={total} text={"Perguntas"} />
        <Statistics value={right} text={"Certas"} bgColor="#91e89e" />
        <Statistics
          value={`${percentage}%`}
          text={"Percentual"}
          bgColor="#DE6A33"
        />
      </div>

      <Button href="/" text="Tentar Novamente" />
    </div>
  ) : (
    <h1>Carregando resultados...</h1>
  );
}
