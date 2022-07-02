import Head from "next/head";
import { useState, useEffect } from "react";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [position, setPosition] = useState(-1);

  const [vw, setVw] = useState(0);

  useEffect(() => {
    setVw(window.innerWidth);
  }, []);

  const showcaseCount = projects.length;

  const changePosition = (e) => {
    if (vw > 900) {
      const mousePosition = (e.clientX / window.innerWidth) * 1.3 - 0.2;
      if (mousePosition > 1) {
        setPosition(1);
      } else if (mousePosition < 0) {
        setPosition(0);
      } else {
        setPosition(mousePosition);
      }
    }
  };

  const index = Math.round(position * showcaseCount * 0.85);

  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Hannah</title>
        </Head>
        <div onPointerMove={changePosition} className={styles.showCase}>
          <div>
            {projects.map((project, i) => (
              <div
                style={{
                  left: vw > 710 ? (vw > 900 ? 135 : 450) * i : "0",
                  zIndex: 10 - i,
                }}
                className={
                  vw > 710
                    ? i + 1 > index && vw > 900
                      ? styles.cardPush
                      : styles.card
                    : styles.card
                }
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
