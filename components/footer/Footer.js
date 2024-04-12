import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Footer.module.css";

export default function Footer({ projectPage, detailsArea }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const scrollEvent = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    projectPage && window.addEventListener("scroll", scrollEvent);
    return () => {
      projectPage && window.removeEventListener("scroll", scrollEvent);
    };
  }, [projectPage]);

  return (
    <footer
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      style={{
        opacity:
          (!isScrolled && detailsArea) ||
          (isScrolled && isMouseOver && !detailsArea)
            ? 1
            : 0,
        zIndex: isScrolled && isMouseOver && 2,
      }}
      className={styles.container}
    >
      <Link href="/about">
        <a className={styles.changeColor}>About</a>
      </Link>
      <a
        className={styles.changeColor}
        target="_blank"
        rel="noreferrer"
        href="https://res.cloudinary.com/daolun2ab/image/upload/fl_attachment:Hannah_Sakhrani_cv/v1712842381/20240406_Hannah_CV_V07_xrizax.pdf"
        download
      >
        CV
      </a>
    </footer>
  );
}
