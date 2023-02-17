import React from 'react';
import ApiService from '../../services/api-service';
import * as Styled from './styled';
import MovieCard from './movie-card/index';
import { Container } from '../movie-form-page/styled';
import Header from './header';

const MoviesPage = () => {
  const [movies, setMovies] = React.useState<MovieModel[]>([]);

  const onDelete = async (id: string | number) => {
    await ApiService.deleteMovie(id);
    const fetchedMovieData = await ApiService.fetchMovies();
    setMovies(fetchedMovieData);
  };

  React.useEffect(() => {
    (async () => {
      const fetchedMovies = await ApiService.fetchMovies();
      setMovies(fetchedMovies);
    })();
  }, []);

  return (
    <Container>
      <Header />
      <Styled.MovieCardGrid>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            {...movie}
            onDelete={() => onDelete(movie.id)}
          />
        ))}
      </Styled.MovieCardGrid>
    </Container>

  );
};

export default MoviesPage;
