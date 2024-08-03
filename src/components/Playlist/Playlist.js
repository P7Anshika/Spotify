// src/components/Playlist/Playlist.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Playlist = ({ playlist }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{playlist.name}</Typography>
      <Typography variant="subtitle1">{playlist.description}</Typography>
      {/* Add more playlist details here */}
    </CardContent>
  </Card>
);

export default Playlist;
