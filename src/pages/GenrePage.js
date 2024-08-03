// src/pages/GenrePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import GenreList from '../components/Genres/GenreList';
import { Container } from '@mui/material';

const GenrePage = () => {
  const { genreId } = useParams();

  return (
    <Container>
      <h1>Genre</h1>
      <GenreList genreId={genreId} />
    </Container>
  );
};

export default GenrePage;
