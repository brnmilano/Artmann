import AboutUs from "../Components/AboutUs";
import Header from "../Components/Header";
import Register from "../Components/Register";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <AboutUs />
      <Register />
    </div>
  );
}
