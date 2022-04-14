import AboutUs from "../../Components/AboutUs";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Register from "../../Components/Register";
import SpecialConditions from "../../Components/SpecialConditions";
import Technology from "../../Components/Technology";
import Values from "../../Components/Values";
import Video from "../../Components/Video";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <AboutUs />
      <Register />
      <Values />
      <Video />
      <Technology />
      <SpecialConditions />
      <Footer />
    </div>
  );
}
