// src/components/Player/Player.js
import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const Player = ({ song }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{song.title}</Typography>
        <Typography variant="subtitle1">{song.artist}</Typography>
        <IconButton>
          <PlayArrowIcon />
        </IconButton>
        <IconButton>
          <PauseIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Player;
