// src/components/Search/SearchBar.js
import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ setQuery }) => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
