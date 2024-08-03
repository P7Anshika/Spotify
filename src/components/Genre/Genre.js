// src/components/Genre/Genre.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Genre = ({ genre }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{genre.name}</Typography>
      {/* Add more genre details here */}
    </CardContent>
  </Card>
);

export default Genre;
