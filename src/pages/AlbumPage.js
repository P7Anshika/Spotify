// src/pages/AlbumPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import AlbumDetails from '../components/Albums/AlbumDetails';
import { Container } from '@mui/material';

const AlbumPage = () => {
  const { albumId } = useParams();

  return (
    <Container>
      <h1>Album Details</h1>
      <AlbumDetails albumId={albumId} />
    </Container>
  );
};

export default AlbumPage;
