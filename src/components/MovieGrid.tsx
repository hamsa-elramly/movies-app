import React from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';

interface MovieGridProps {
  movies: Array<{ id: number; title: string; vote_average: number; poster_path: string }>;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <Grid container spacing={2} sx={{pt: '2rem'}}>
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
          <MovieCard title={movie.title} rating={movie.vote_average} imagePath={movie.poster_path} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieGrid;
