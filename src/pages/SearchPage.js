// src/pages/SearchPage.js
import React, { useState } from 'react';
import SearchBar from '../components/Search/SearchBar';
import SearchResults from '../components/Search/SearchResults';
import { Container } from '@mui/material';

const SearchPage = () => {
  const [query, setQuery] = useState('');

  return (
    <Container>
      <h1>Search</h1>
      <SearchBar setQuery={setQuery} />
      <SearchResults query={query} />
    </Container>
  );
};

export default SearchPage;
