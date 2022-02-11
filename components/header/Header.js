import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/photography">
        <a>Photography</a>
      </Link>
    </header>
  );
}
