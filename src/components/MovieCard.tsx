import React from 'react';
import { Card, CardContent, CardMedia, Typography, Badge } from '@mui/material';

interface MovieCardProps {
  title: string;
  rating: number;
  imagePath: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, rating, imagePath }) => {
    function round(value: number, precision: number) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
  return (
    <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia component="img" height="300" image={`https://image.tmdb.org/t/p/w500${imagePath}`} alt={title} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Badge color="primary" badgeContent={round(rating, 1)} overlap="circular">
        </Badge>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
