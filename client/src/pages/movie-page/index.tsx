import React from 'react';
import { Box } from '@mui/material';
import { useParams, Navigate } from 'react-router-dom';
import routes from 'navigation/routes';
import useMovie from '../../hooks/useMovie';

const MoviePage = () => {
  const { id } = useParams();
  const movie = useMovie(id);

  if (id === undefined) return <Navigate to={routes.MoviesPage} />;

  return (
    <Box component="pre">
      {JSON.stringify(movie, null, 4)}
    </Box>
  );
};

export default MoviePage;
