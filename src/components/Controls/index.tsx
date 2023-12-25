import { Box, Container, IconButton, SvgIcon } from "@mui/material";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import { SxProps, Theme } from "@mui/material/styles";

const Controls = () => {
  const onClick = () => {};

  return (
    <Box
      sx={{
        display: "flex",
        mt: 4
      }}
    >
      <ImageButton component={ShuffleRoundedIcon} onClick={onClick} />
      <ImageButton component={SkipPreviousRoundedIcon} onClick={onClick} />
      <ImageButton
        component={PlayCircleFilledRoundedIcon}
        onClick={onClick}
        sx={{
          mx: 2,
          boxShadow: "3px 3px 5px -2px rgba(0,0,0,0.75);"
        }}
      />
      <ImageButton component={SkipNextRoundedIcon} onClick={onClick} />
      <ImageButton component={ReplayRoundedIcon} onClick={onClick} />
    </Box>
  );
};

export default Controls;

type ImageButtonProps = {
  component?: {
    muiName: string;
  };
  onClick: () => void;
  sx?: SxProps<Theme>;
};

const ImageButton = ({ component, onClick, sx }: ImageButtonProps) => {
  return (
    <IconButton
      onClick={onClick}
      sx={[...(Array.isArray(sx) ? sx : [sx])]}
      size="large"
      color="primary"
    >
      <SvgIcon component={component} fontSize="large" />
    </IconButton>
  );
};
