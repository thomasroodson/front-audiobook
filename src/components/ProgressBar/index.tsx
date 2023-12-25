import { Box, Container, Slider, Typography } from "@mui/material";

const ProgressBar = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Slider defaultValue={50} step={0.25} min={1} max={110} />
      <Box
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Typography variant="subtitle2">00:00</Typography>
        <Typography variant="subtitle2">02:54</Typography>
      </Box>
    </Container>
  );
};

export default ProgressBar;
