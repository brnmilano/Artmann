import Header from "./Header";
import AboutUs from "./AboutUs";
import Register from "./Register";
import Values from "./Values";
import Video from "./Video";
import Technology from "./Technology";
import SpecialConditions from "./SpecialConditions";
import Footer from "./Footer";
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
