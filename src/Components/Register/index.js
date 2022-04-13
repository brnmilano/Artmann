import { Box } from "@mui/system";
import Button from "../Button";
import Input from "../Input";
import Text from "../Text";
import styles from "./styles.module.scss";
import useIsMobile from "../../helpers/useIsMobile";
import { useState } from "react";

export default function Register() {
  const isMobile = useIsMobile({ size: 950 });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    console.log("cadastrar o usuário");
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Box className={styles.container}>
        <Box className={styles.contentWrapper}>
          <Box className={styles.textWrapper}>
            <Text fontWeight={400} fontSize={isMobile ? 25 : 40}>
              Cadastre-se e receba <span>condições especiais</span>
            </Text>
          </Box>

          <Box className={styles.inputWrapper}>
            <Input
              name="Nome"
              placeholder="Nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />

            <Input
              type="email"
              name="E-mail"
              placeholder="E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <Input
              type="tel"
              name="Telefone"
              placeholder="Telefone"
              value={cellphone}
              onChange={(event) => setCellphone(event.target.value)}
              required
            />
          </Box>

          <Box className={styles.contactWrapper}>
            <Box className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                id="checkbox"
                value={acceptTerms}
                onChange={(event) => setAcceptTerms(event.checked)}
              />
              <label htmlFor="checkbox" className={styles.checkbox} />
            </Box>

            <Box className={styles.contactText}>
              <Text
                color={isMobile ? "#FFFFFF" : "#5D4100"}
                fontSize={isMobile ? 12 : 14}
              >
                Eu aceito ser contatado pela Artmann por um dos meios informados
                neste formulário para futuras ações promocionais, lançamentos de
                produtos e convites para checkup auditivo pelo período de 24
                meses após o preenchimento desse cadastro.
              </Text>
            </Box>
          </Box>

          <Box className={styles.buttonWrapper}>
            <Button
              type="submit"
              fontSize={isMobile ? 14 : 18}
              padding="15px 0 15px 0"
              borderRadius={50}
            >
              CADASTRAR
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
}
