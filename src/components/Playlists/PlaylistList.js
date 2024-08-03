// src/components/Playlists/PlaylistList.js
import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';
import { useSelector } from 'react-redux';

const PlaylistList = () => {
  const playlists = useSelector((state) => state.playlists);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Your Playlists</Typography>
        <List>
          {playlists.map((playlist, index) => (
            <ListItem key={index}>
              <Typography>{playlist.name}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default PlaylistList;
