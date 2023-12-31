"use client";
import styles from "./AudioPlayer.module.scss";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import { useState } from "react";
import { Box, Container } from "@mui/material";

const Player = () => {
  const playlist = [
    { src: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3" },
    { src: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3" },
    { src: "https://audioplayer.madza.dev/Madza-Persistence.mp3" }
  ];

  const [currentTrack, setTrackIndex] = useState(0);

  const handleClickPrev = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? playlist.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <AudioPlayer
        className={styles.player}
        //autoPlay
        src={playlist[currentTrack].src}
        header="1. Introdução"
        preload="metadata"
        showSkipControls
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
        customIcons={{
          play: <PlayCircleFilledRoundedIcon fontSize="large" />,
          pause: <PauseCircleFilledRoundedIcon fontSize="large" />,
          previous: <SkipPreviousRoundedIcon fontSize="large" />,
          next: <SkipNextRoundedIcon fontSize="large" />,
          volume: <VolumeUpRoundedIcon />,
          volumeMute: <VolumeOffRoundedIcon />
        }}
        defaultCurrentTime="00:00"
        defaultDuration=""
      />
    </Container>
  );
};

export default Player;
