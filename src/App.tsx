import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, CssBaseline } from '@mui/material';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const apiKey = '0071f240d88ba9daf6f3b83ca9ed519a';

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, [apiKey]);

  const searchMovies = async (query: string) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Header />
      <SearchBar onSearch={searchMovies} />
      <MovieGrid movies={searchResults.length > 0 ? searchResults : popularMovies} />
    </Container>
  );
};

export default App;
