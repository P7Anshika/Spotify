
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import PlaylistPage from './pages/PlaylistPage';
import SearchPage from './pages/SearchPage';
import AlbumPage from './pages/AlbumPage';
import GenrePage from './pages/GenrePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/album" element={<AlbumPage />} />
        <Route path="/genre" element={<GenrePage />} />
      </Routes>
    </Router>
  );
};

export default App;
