import styles from "@/styles/Button.module.css";

import Link from "next/link";

interface buttonProps {
  text: string;
  href?: string;
  onClick?: (e: any) => void;
}

export default function Button(props: buttonProps) {
  const renderButton = () => {
    return (
      <button className={styles.button} onClick={props.onClick}>
        {props.text}
      </button>
    );
  };

  return props.href ? (
    <Link href={props.href}>{renderButton()}</Link>
  ) : (
    renderButton()
  );
}
