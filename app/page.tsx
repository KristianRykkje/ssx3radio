import Image from "next/image";
import styles from "./page.module.css";
import { radioData } from "./data";

export default function Home() {
  return (
    <div className={styles.container}>
      {radioData.map((radio) => (
        <audio key={radio.id} controls src={radio.url}>
          hei
        </audio>
      ))}
    </div>
  );
}
