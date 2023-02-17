import axios from 'axios';

const moviesLink = '/movies';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export type MovieProps = Omit<MovieModel, 'id'>;

const fetchMovies = async () => {
  const { data } = await api.get<MovieModel[]>(`${moviesLink}`);
  return data;
};

const fetchMovie = async (id: string | number) => {
  const { data } = await api.get<MovieModel>(`${moviesLink}/${id}`);

  return data;
};

const postMovie = async (movieData: MovieProps) => {
  const response = await api.post(`${moviesLink}`, movieData);
  return response;
};

const deleteMovie = async (id: string | number) => {
  const response = await api.delete(`${moviesLink}/${id}`);
  return response;
};

const updateMovie = async (movieData: MovieProps, id: string | number) => {
  const response = await api.patch(`${moviesLink}/${id}`, movieData);
  return response;
};

const ApiService = {
  fetchMovies,
  fetchMovie,
  postMovie,
  deleteMovie,
  updateMovie,
};

export default ApiService;
