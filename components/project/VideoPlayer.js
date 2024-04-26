import { useState, useEffect } from "react";
import styles from "./VideoPlayer.module.css";

export default function VideoPlayer({ url, details, showInMobile }) {
  const [showControls, setShowControls] = useState(false);
  const [vw, setVw] = useState(0);

  useEffect(() => {
    setVw(window.innerWidth);
  }, []);

  if (vw > 900 || details || showInMobile) {
    return (
      <div
        style={{ padding: details && "2rem 0" }}
        className={styles.container}
      >
        <video
          preload="metadata"
          playsInline
          onMouseOver={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          controls={showControls || details}
          src={`${url}#t=0.04`}
          className={styles.videoPlayer}
        />
      </div>
    );
  } else {
    return null;
  }
}
