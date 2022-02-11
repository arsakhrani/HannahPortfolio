import Head from "next/head";
import { useState } from "react";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [position, setPosition] = useState(-1);
  const [showcasePosition, setShowcasePosition] = useState(-100);

  const showcaseCount = projects.length;

  const changePosition = (e) => {
    const mousePosition = (e.clientX / window.innerWidth) * 1.3 - 0.2;
    if (mousePosition > 1) {
      setPosition(1);
    } else if (mousePosition < 0) {
      setPosition(0);
    } else {
      setPosition(mousePosition);
    }

    const index = Math.round(position * (showcaseCount - 1));

    const cardGap = 100;
    const cardWidth = window.innerHeight * 0.45;
    const padding = 20;
    const edge = 400;
    const g =
      (cardGap * (showcaseCount - 1) +
        cardWidth -
        window.innerWidth +
        padding * 2 +
        edge * 2) /
      (showcaseCount - 1);
    const offset = edge - index * g;
    setShowcasePosition(showcasePosition + (offset - showcasePosition) / 20);
  };

  const index = Math.round(position * showcaseCount);
  console.log(index);

  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Hannah</title>
        </Head>
        <div
          className={styles.showCase}
          style={{ transform: `translate(${showcasePosition}px, 0px)` }}
          onMouseMove={(e) => changePosition(e)}
        >
          {projects.map((project, i) => (
            <div
              style={{ left: 150 * i, zIndex: 100 + i }}
              className={i + 1 > index ? styles.cardPush : styles.card}
              key={i}
            >
              <Card project={project} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
