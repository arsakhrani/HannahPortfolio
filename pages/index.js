import Head from "next/head";
import { useState, useEffect } from "react";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [vw, setVw] = useState(0);

  useEffect(() => {
    window.onresize = () => location.reload();
    setVw(window.innerWidth);
  }, []);

  const showcaseCount = projects.length;

  const [isHovered, setIsHovered] = useState(-1);

  const referenceWidth = vw / 1900;

  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Hannah</title>
        </Head>
        <div className={styles.showCase}>
          <div>
            {projects.map((project, i) => (
              <div
                key={project.title}
                onMouseEnter={() => setIsHovered(i)}
                style={{
                  left:
                    vw > 710
                      ? (vw > 900 ? 135 * referenceWidth : 450) * i
                      : "0",
                  zIndex: showcaseCount - i,
                  transform:
                    vw > 900
                      ? `translate(${
                          isHovered > i
                            ? -75 * (i / 2)
                            : (showcaseCount / 2 - i) * 30
                        }px, -50%)`
                      : undefined,
                }}
                className={styles.card}
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
