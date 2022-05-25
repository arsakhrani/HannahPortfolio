import Image from "next/image";
import styles from "./FullViewPicture.module.css";

export default function FullViewPicture({ url, contain }) {
  return (
    <div className={styles.container}>
      <Image
        layout={"fill"}
        alt={"Feature Picture"}
        src={url}
        objectFit={contain ? "contain" : "cover"}
      />
    </div>
  );
}
