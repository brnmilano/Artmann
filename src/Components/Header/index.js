import logotype from "./Assets/logotype.png";
import styles from "./styles.module.scss";
import Text from "../Text";
import { Box } from "@mui/material";
import useIsMobile from "../../helpers/useIsMobile";
import Stacks from "./Assets/stacks.png";

export default function Header() {
  const isMobile = useIsMobile({ size: 660 });

  return (
    <Box className={styles.container}>
      <Box className={styles.logoWrapper}>
        <img className={styles.logoImage} src={logotype} alt="Logo" />
      </Box>

      <Box className={styles.contentWrapper}>
        <Box className={styles.imageText}>
          <Box className={styles.imageWrapper}>
            <img className={styles.stacksImage} src={Stacks} alt="Pilhas" />
          </Box>

          <Box className={styles.textWrapper}>
            <Text fontSize={isMobile ? 26 : 40}>
              Pilhas com valor de <span>R$10</span> para quem se cadastrar.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
