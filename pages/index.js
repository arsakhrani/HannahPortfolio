import Head from "next/head";
import { useState } from "react";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [position, setPosition] = useState(-1);

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
  };

  const index = Math.round((position * showcaseCount) / 0.8);

  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Hannah</title>
        </Head>
        <div onMouseMove={(e) => changePosition(e)} className={styles.showCase}>
          <div className={styles.showCase}>
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
      </div>
      <Footer detailsArea={true} />
    </div>
  );
}
