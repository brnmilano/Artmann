import { Box } from "@mui/system";
import styles from "./styles.module.scss";
import Text from "../../../Components/Text";
import Carousel from "react-elastic-carousel";
import FadeInWhenVisible from "../../../Components/Animations/FadeInWhenVisible";

export default function Values() {
  const items = [
    {
      imagem: "images/innovation.png",
      name: "Inovação",
    },
    {
      imagem: "images/highTech.png",
      name: "Alta Tecnologica",
    },
    {
      imagem: "images/force.png",
      name: "Força",
    },
  ];

  return (
    <>
      <Box className={styles.container}>
        <FadeInWhenVisible>
          <Box className={styles.desktopWrapper}>
            {items.map((item, index) => {
              return (
                <Box className={styles.imageWrapper}>
                  <img
                    className={styles.image}
                    src={item.imagem}
                    alt={item.name}
                  />
                  <Text fontSize={32}>{item.name}</Text>
                </Box>
              );
            })}
          </Box>
        </FadeInWhenVisible>
      </Box>

      <Box className={`${styles.mobileWrapper} values-container`}>
        <Carousel enableSwipe={true} showArrows={false} enableAutoPlay>
          {items.map((item, index) => {
            return (
              <Box
                key={`${item.name} ${index}`}
                className={styles.imageWrapper}
              >
                <img
                  className={styles.image}
                  src={item.imagem}
                  alt={item.name}
                />
                <Text fontSize={20}>{item.name}</Text>
              </Box>
            );
          })}
        </Carousel>
      </Box>
    </>
  );
}
