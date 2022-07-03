import { useState, useEffect } from "react";
import styles from "./VideoPlayer.module.css";

export default function VideoPlayer({ url, details }) {
  const [showControls, setShowControls] = useState(false);
  const [vw, setVw] = useState(0);

  useEffect(() => {
    setVw(window.innerWidth);
  }, []);

  if (vw > 900 || details) {
    return (
      <div
        style={{ padding: details && "2rem 0" }}
        className={styles.container}
      >
        <video
          preload="auto"
          onMouseOver={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          controls={showControls}
          src={`${url}#t=0.001`}
          className={styles.videoPlayer}
        />
      </div>
    );
  } else {
    return null;
  }
}
