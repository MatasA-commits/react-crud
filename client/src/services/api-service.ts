import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const fetchMovies = async () => {
  const { data } = await api.get<MovieModel[]>('/movies');
  return data;
};

const fetchMovie = async (id: string | number) => {
  const { data } = await api.get<MovieModel>(`/movies/${id}`);

  return data;
};

const postMovie = async (movieData: MovieModel) => {
  await api.post('/movies', movieData);
};

const deleteMovie = async (id: string | number) => {
  await api.delete(`/movies/${id}`);
};

const ApiService = {
  fetchMovies,
  fetchMovie,
  postMovie,
  deleteMovie,
};

export default ApiService;
