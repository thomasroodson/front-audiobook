import { Box, Container } from "@mui/material";
import Controls from "../Controls";
import ProgressBar from "../ProgressBar";
import SoungInfo from "../SoungInfo";

const AudioPlayer = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3
      }}
    >
      <SoungInfo />
      <ProgressBar />
      <Controls />
    </Container>
  );
};

export default AudioPlayer;
