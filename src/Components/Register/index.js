import { Box } from "@mui/system";
import Button from "../Button";
import Input from "../Input";
import Text from "../Text";
import styles from "./styles.module.scss";

export default function Register() {
  return (
    <Box className={styles.container}>
      <Box className={styles.contentWrapper}>
        <Box className={styles.textWrapper}>
          <Text fontSize={40}>
            Cadastre-se e receba
            <Text fontSize={40} fontWeight={700}>
              Condições especiais de lançamento
            </Text>
          </Text>
        </Box>

        <Box className={styles.inputWrapper}>
          <Input
            type="text"
            name="Nome"
            placeholder="Nome"
            borderRadius={50}
            fontSize={16}
            border="2px solid #FFFFFF"
          />
          <Input
            type="e-mail"
            name="E-mail"
            placeholder="E-mail"
            borderRadius={50}
            fontSize={16}
            border="2px solid #FFFFFF"
          />
          <Input
            type="number"
            name="Telefone"
            placeholder="Telefone"
            borderRadius={50}
            fontSize={16}
            border="2px solid #FFFFFF"
          />
        </Box>

        <Box className={styles.contactWrapper}>
          <Box display="flex" alignItems="center">
            <input type="checkbox" />
            <Text color="#000000" fontSize={14}>
              Eu aceito ser contatado pela Artmann
            </Text>
          </Box>

          <Text color="#000000" fontSize={10}>
            * O contato será feito por um dos meios informados neste formulário
            para futuras ações promocionais, lançamentos de produtos e convites
            para checkup auditivo pelo período de 24 meses após o preenchimento
            desse cadastro
          </Text>
        </Box>

        <Box className={styles.buttonWrapper}>
          <Button fontSize={18} padding="15px 0 15px 0" borderRadius={50}>
            CADASTRAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
