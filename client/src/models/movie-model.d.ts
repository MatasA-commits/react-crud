type MovieModel = {
  id: string,
  title: string,
  main_character: {
    actor: string,
    role: string
  },
  images: string[],
  year: string,
  rating: number
};

export default MovieModel;
