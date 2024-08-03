// src/components/Albums/AlbumDetails.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';

const AlbumDetails = ({ albumId }) => {
  const album = useSelector((state) => 
    state.albums.find((album) => album.id === albumId)
  );

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{album?.title}</Typography>
        <Typography variant="subtitle1">{album?.artist}</Typography>
        <List>
          {album?.tracks.map((track, index) => (
            <ListItem key={index}>
              <Typography>{track.title}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default AlbumDetails;
