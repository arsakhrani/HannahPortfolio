import { useState } from "react";
import styles from "./VideoPlayer.module.css";

export default function VideoPlayer({ url, fullScreen }) {
  const [showControls, setShowControls] = useState(false);

  return (
    <div className={fullScreen ? styles.fullScreenContainer : styles.container}>
      <video
        onMouseOver={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        controls={showControls}
        src={url}
        className={styles.videoPlayer}
      />
    </div>
  );
}
