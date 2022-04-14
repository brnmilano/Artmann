import { Box } from "@mui/system";
import styles from "./styles.module.scss";
import Text from "../Text";
import companyData from "./CompanyData";

export default function Footer() {
  return (
    <Box className={styles.container}>
      <Box className={styles.textWrapper}>
        <Text fontSize={14}>© Todos os Direitos Reservados.</Text>

        <Text fontSize={14}>
          Grupo Artmann Aparelhos Auditivos LTDA | {companyData.cnpj}
        </Text>

        <Box className={styles.textEndereco}>
          <Text fontSize={14}>{companyData.endereço}</Text>
        </Box>

        <Text textDecoration="underline" fontSize={14} fontWeight={700}>
          <a
            href="https://goo.gl/maps/S7Fm4oLH5MNjEVWL7"
            rel="noopener noreferrer"
            target="_blank"
          >
            Abrir mapa
          </a>
        </Text>
      </Box>

      <Box className={styles.textWrapper}>
        <Text fontSize={14}>
          Telefone / WhatsApp:{" "}
          <a href="tel:+554738420312">{companyData.telefone}</a>
        </Text>

        <Text fontSize={14} fontWeight={700}>
          Horário de atendimento
        </Text>

        <Box className={styles.textHorarios}>
          <Text>Segunda a Sexta das {companyData.horarioSemana}</Text>
          <Text>Sábado das {companyData.horarioSabado}</Text>
        </Box>
      </Box>

      <Box>
        <Text fontStyle="italic" fontSize={14} fontWeight={700}>
          <a
            href="https://www.clickweb.com.br/"
            rel="noopener noreferrer"
            target="_blank"
          >
            clickweb
          </a>
        </Text>
      </Box>
    </Box>
  );
}
