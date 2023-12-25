import { Container, Typography } from "@mui/material";

const SoungInfo = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        mb: 4,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Typography variant="h5">Title Song</Typography>
      <Typography variant="body2">Description Song</Typography>
    </Container>
  );
};

export default SoungInfo;
