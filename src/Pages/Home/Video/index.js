import { Box } from "@mui/system";
import ReactPlayer from "react-player";
import styles from "./styles.module.scss";
import useIsMobile from "../../../helpers/useIsMobile";

export default function Video() {
  const isMobile = useIsMobile({ size: 820 });

  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <Box className={styles.videoWrapper}>
          {isMobile ? (
            <ReactPlayer
              className={styles.videoPlayer}
              width="100%"
              controls={true}
              url="https://www.youtube.com/watch?v=5m-cn7sNC3Y"
            />
          ) : (
            <ReactPlayer
              width={880}
              height={495}
              className={styles.videoPlayer}
              controls={true}
              url="https://www.youtube.com/watch?v=5m-cn7sNC3Y"
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}
