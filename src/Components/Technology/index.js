import { Box } from "@mui/system";
import styles from "./styles.module.scss";
import Text from "../Text";
import useIsMobile from "../../helpers/useIsMobile";

export default function Technology() {
  const isMobile = useIsMobile({ size: 768 });

  return (
    <Box className={styles.container}>
      <Box className={styles.textWrapper}>
        <Text fontSize={isMobile ? 19 : 36}>
          A audição é conexão: com o mundo e com você.
          <span>
            {" "}
            <br />
            Conte com a mais alta tecnologia em aparelhos auditivos.
          </span>
        </Text>
      </Box>
    </Box>
  );
}
