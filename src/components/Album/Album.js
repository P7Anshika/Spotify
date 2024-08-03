// src/components/Album/Album.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Album = ({ album }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{album.name}</Typography>
      <Typography variant="subtitle1">{album.artist}</Typography>
      {/* Add more album details here */}
    </CardContent>
  </Card>
);

export default Album;
