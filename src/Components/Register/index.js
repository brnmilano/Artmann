import { Box } from "@mui/system";
import Button from "../Button";
import Input from "../Input";
import Text from "../Text";
import styles from "./styles.module.scss";

export default function Register() {
  return (
    <Box className={styles.container}>
      <Box className={styles.textWrapper}>
        <Text fontSize={40}>
          Cadastre-se e receba
          <Text fontSize={40} fontWeight={700}>
            Condições especiais de lançamento
          </Text>
        </Text>

        <Box className={styles.inputWrapper}>
          <Input
            type="text"
            name="Nome"
            placeholder="Nome"
            borderRadius={50}
            padding="15px 0 15px 20px"
            fontSize={16}
            border="2px solid #FFFFFF"
          />
          <Input
            type="e-mail"
            name="E-mail"
            placeholder="E-mail"
            borderRadius={50}
            padding="15px 0 15px 20px"
            fontSize={16}
            border="2px solid #FFFFFF"
          />
          <Input
            type="number"
            name="Telefone"
            placeholder="Telefone"
            borderRadius={50}
            padding="15px 0 15px 20px"
            fontSize={16}
            border="2px solid #FFFFFF"
          />
        </Box>

        <Box className={styles.buttonWrapper}>
          <Button fontSize={18} padding="15px 19px 15px 20px" borderRadius={50}>
            CADASTRAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
