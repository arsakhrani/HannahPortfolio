import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <Link href="/contact">
        <a className={styles.changeColor}>Contact</a>
      </Link>
      <Link href="/">HannaH</Link>
      <Link href="/photography">
        <a className={styles.changeColor}>Photography</a>
      </Link>
    </header>
  );
}
