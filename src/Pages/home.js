import Header from "../Components/Header";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}