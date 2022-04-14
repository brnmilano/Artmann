import logotype from "./Assets/logotype.png";
import styles from "./styles.module.scss";
import Text from "../Text";
import { Box } from "@mui/material";
import useIsMobile from "../../helpers/useIsMobile";
import Stacks from "./Assets/stacks.png";
import Button from "../Button";
import Wpp from "./Assets/wpp.png";
import FadeInWhenVisible from "../Animations/FadeInWhenVisible";

export default function Header() {
  const isMobile = useIsMobile({ size: 660 });

  return (
    <Box className={styles.container}>
      <FadeInWhenVisible>
        <Box className={styles.logoWrapper}>
          <img className={styles.logoImage} src={logotype} alt="Logo" />
        </Box>
      </FadeInWhenVisible>

      <Box className={styles.contentWrapper}>
        <Box className={styles.imageText}>
          <Box className={styles.imageWrapper}>
            <img className={styles.stacksImage} src={Stacks} alt="Pilhas" />
          </Box>

          <Box className={styles.textWrapper}>
            <Text fontSize={isMobile ? 26 : 40}>
              Cadastre-se e compre pilhas por <span>R$ 10</span>.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box className={styles.whatsAppButton}>
        <a
          href="https://api.whatsapp.com/send?phone=554738420312&text=Eu%20fa%C3%A7o%20parte%20da%20ClickWeb%20%3A)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            fontWeight={400}
            backgroundColor="#00E676"
            color="#FFFFFF"
            borderRadius={100}
          >
            <img src={Wpp} alt="" />
            FALE CONOSCO
          </Button>
        </a>
      </Box>
    </Box>
  );
}
