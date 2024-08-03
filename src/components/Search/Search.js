// src/components/Search/Search.js
import React, { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.example.com/search?q=${query}`);
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <Container>
      <TextField
        label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      {/* Display search results here */}
    </Container>
  );
};

export default Search;
