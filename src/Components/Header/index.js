import logotype from "./Assets/logotype.png";
import typeOneDevice from "./Assets/typeOneDevice.png";
import philipsLog from "./Assets/philipsLog.png";
import styles from "./styles.module.scss";
import Text from "../Text";
import Heading from "../Heading";
import { Box } from "@mui/material";
import useIsMobile from "../../helpers/useIsMobile";

export default function Header() {
  const isMobile = useIsMobile({ size: 950 });

  return (
    <Box className={styles.container}>
      <Box className={styles.logoWrapper}>
        <img className={styles.logoImage} src={logotype} alt="Logo" />
      </Box>

      <Box className={styles.contentWrapper}>
        <Box className={styles.imageText}>
          <img
            className={styles.philipsLog}
            src={philipsLog}
            alt="Logo Philips"
          />

          <Box className={styles.textWrapper}>
            <Box marginLeft={isMobile ? 0 : 1}>
              <Text
                alignItems="center"
                fontSize={isMobile ? 16 : 25}
                fontWeight={400}
              >
                CHEGAMOS EM
              </Text>
            </Box>

            <Heading fontSize={isMobile ? 25 : 44} fontWeight={700}>
              Balneário Camboríu
            </Heading>
          </Box>
        </Box>

        <img
          className={styles.typeOneDevice}
          src={typeOneDevice}
          alt="Aparelho Auditivo"
        />
      </Box>
    </Box>
  );
}
