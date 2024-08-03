// src/components/Search/SearchResults.js
import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, Typography } from '@mui/material';

const SearchResults = ({ query }) => {
  const songs = useSelector((state) => state.songs); // Assuming you have a song list

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <List>
      {filteredSongs.map((song, index) => (
        <ListItem key={index}>
          <Typography>{song.title} by {song.artist}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default SearchResults;
