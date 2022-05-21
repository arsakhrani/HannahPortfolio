import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";

export default function Card({ project }) {
  return (
    <Link passHref={true} href={`/${project.url}`}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            layout={"fill"}
            alt={`${project.title} image`}
            src={project.bannerImage}
            objectFit={"cover"}
          />
        </div>
        <div className={styles.textContainer}>
          <h2>{project.title}</h2>
        </div>
      </div>
    </Link>
  );
}
