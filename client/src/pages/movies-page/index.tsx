import React from 'react';
import ApiService from '../../services/api-service';
import * as Styled from './styled';
import MovieCard from './movie-card/index';
import { Container } from '../movie-form-page/styled';
import Header from './header';

const MoviesPage = () => {
  const [movies, setMovies] = React.useState<MovieModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedMovies = await ApiService.fetchMovies();
      setMovies(fetchedMovies);
    })();
  }, []);

  return (
    <Container paddingTop={10}>
      <Header />
      <Styled.MovieCardGrid>
        {movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
      </Styled.MovieCardGrid>
    </Container>

  );
};

export default MoviesPage;
