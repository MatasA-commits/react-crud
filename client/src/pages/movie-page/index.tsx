import React from 'react';
import { Box } from '@mui/material';
import { useParams, Navigate } from 'react-router-dom';
import routes from 'navigation/routes';
import useMovie from '../../hooks/useMovie';
import SingleMovieCard from './single-movie-layout';

const MoviePage = () => {
  const { id } = useParams();
  const movie = useMovie(id);

  if (id === undefined) return <Navigate to={routes.MoviesPage} />;

  if (movie === undefined) return null;

  return (
    <Box>
      {movie && <SingleMovieCard {...movie} />}
    </Box>
  );
};

export default MoviePage;
