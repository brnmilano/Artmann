import { Box } from "@mui/system";
import styles from "./styles.module.scss";
import Text from "../Text";
import useIsMobile from "../../helpers/useIsMobile";
import Button from "../Button";

export default function SpecialConditions() {
  const isMobile = useIsMobile({ size: 680 });

  const onSubmit = (event) => {
    event.preventDefault();

    console.log("Cadastrar usário");
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.contentWrapper}>
        <Box className={styles.textWrapper}>
          <Text fontSize={isMobile ? 20 : 32}>
            Cadastre-se e receba <span>condições especiais </span>
          </Text>
        </Box>
      </Box>

      <form onSubmit={onSubmit} className={styles.buttonWrapper}>
        <Button
          type="submit"
          fontSize={18}
          padding="15px 19px 15px 20px"
          borderRadius={50}
          color="#06172D"
        >
          CLIQUE AQUI
        </Button>
      </form>
    </Box>
  );
}
