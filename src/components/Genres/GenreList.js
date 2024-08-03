// src/components/Genres/GenreList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, Typography } from '@mui/material';

const GenreList = ({ genreId }) => {
  const songs = useSelector((state) =>
    state.songs.filter((song) => song.genreId === genreId)
  );

  return (
    <List>
      {songs.map((song, index) => (
        <ListItem key={index}>
          <Typography>{song.title} by {song.artist}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
