import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import { Box } from '@mui/material';
import ApiService from '../../services/api-service';

const MoviePage = () => {
  const { id } = useParams();

  const [movie, setMovie] = React.useState<MovieModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedMovie = await ApiService.fetchMovie(id);

        setMovie(fetchedMovie);
      })();
    }
  }, [id]);

  if (id === undefined) return <Navigate to={routes.MoviesPage} />;

  return (
    <Box component="pre">
      {JSON.stringify(movie, null, 4)}
    </Box>
  );
};

export default MoviePage;
