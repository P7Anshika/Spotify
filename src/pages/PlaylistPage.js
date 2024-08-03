// src/pages/PlaylistPage.js
import React from 'react';
import PlaylistList from '../components/Playlists/PlaylistList';
import { Container } from '@mui/material';

const PlaylistPage = () => {
  return (
    <Container>
      <h1>Playlists</h1>
      <PlaylistList />
      {/* Optionally, add a component to create or manage playlists */}
    </Container>
  );
};

export default PlaylistPage;
