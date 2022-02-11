import Image from "next/image";
import styles from "./FullViewPicture.module.css";

export default function FullViewPicture({ url }) {
  return (
    <div className={styles.container}>
      <Image layout={"fill"} alt={"Feature Picture"} src={url} />
    </div>
  );
}
