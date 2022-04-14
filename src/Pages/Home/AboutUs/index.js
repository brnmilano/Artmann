import { Box } from "@mui/system";
import styles from "./styles.module.scss";
import Store from "./Assets/store.png";
import Text from "../../../Components/Text";
import typeTwoDevice from "./Assets/typeTwoDevice.png";
import useIsMobile from "../../../helpers/useIsMobile";
import FadeInFromRightWhenVisible from "../../../Components/Animations/FadeInFromRightWhenVisible";
import FadeInFromLeftWhenVisible from "../../../Components/Animations/FadeInFromLeftWhenVisible";

export default function AboutUs() {
  const isMobile = useIsMobile({ size: 1100 });

  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <FadeInFromLeftWhenVisible>
          <Box className={styles.imageStoreWrapper}>
            <img className={styles.storeImage} src={Store} alt="Loja Philips" />
          </Box>
        </FadeInFromLeftWhenVisible>

        <Box className={styles.textWrapper}>
          <Text color="#15355E" fontWeight={500} fontSize={isMobile ? 18 : 23}>
            Nossa empresa é o resultado da união de
            <span> profissionais especilistas na área de fonoaudiologia</span>,
            em busca de proporcionar a
            <span> melhor experiência na vida das pessoas através do som.</span>
          </Text>

          <Text color="#15355E" fontWeight={500} fontSize={isMobile ? 18 : 23}>
            Há mais de <span>28 anos no mercado,</span> nossa equipe está sempre
            participando de eventos e congressos em busca de inovações
          </Text>

          <Text color="#15355E" fontWeight={500} fontSize={isMobile ? 18 : 23}>
            Hoje a Artmann conta com a{" "}
            <span>
              licença exclusiva de aparelhos auditivos da marca Philips,{" "}
            </span>
            trazendo mais perto de você a alta tecnologia e conforto.
          </Text>
        </Box>

        <FadeInFromRightWhenVisible>
          <img
            className={styles.deviceImage}
            src={typeTwoDevice}
            alt="Aparelho auditivo"
          />
        </FadeInFromRightWhenVisible>
      </Box>
    </Box>
  );
}
