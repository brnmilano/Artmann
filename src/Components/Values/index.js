import { Box } from "@mui/system";
import styles from "./styles.module.scss";
import Text from "../Text";
import Innovation from "./Assets/innovation.png";
import HighTech from "./Assets/highTech.png";
import Force from "./Assets/force.png";

export default function Values() {
  return (
    <Box className={styles.container}>
      <Box className={styles.imageWrapper}>
        <img className={styles.image} src={Innovation} alt="Inovação" />
        <Text fontSize={32}>Inovação</Text>
      </Box>

      <Box className={styles.imageWrapper}>
        <img className={styles.image} src={HighTech} alt="Alta Tecnologia" />
        <Text fontSize={32}>Alta Tecnologia</Text>
      </Box>

      <Box className={styles.imageWrapper}>
        <img className={styles.image} src={Force} alt="Força" />
        <Text fontSize={32}>Força</Text>
      </Box>
    </Box>
  );
}
