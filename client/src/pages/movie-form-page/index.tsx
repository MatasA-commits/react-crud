import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
  Button,
  Rating,
} from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';
import routes from 'navigation/routes';
import ImagesField from './images-field';
import LocationField from './main-character-field';
import * as Styled from './styled';
import ApiService from '../../services/api-service';

const formatValues = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  const title = formData.get('title');
  const year = formData.get('year');
  const rating = formData.get('rating');
  const images = formData.getAll('images');
  const actor = formData.get('actor');
  const role = formData.get('role');

  if (title === null || title instanceof File || title.length < 2) throw new Error('incorrect Title');
  if (year === null || year instanceof File || year.length < 1) throw new Error('incorrect year');
  if (rating === null || rating instanceof File || rating.length < 1) throw new Error('incorrect Rating');
  if (actor === null || actor instanceof File || actor.length < 2) throw new Error('incorrect actor');
  if (role === null || role instanceof File || role.length < 2) throw new Error('incorrect role');
  images.forEach((img, i) => {
    if (img instanceof File || img.length < 2) throw new Error(`incorrect Image nr: ${i + 1}`);
  });

  return {
    id: uniqid(),
    title,
    main_character: {
      actor,
      role,
    },
    images: images as string[],
    year,
    rating: Number(rating),
  };
};

type MovieFormPageProps = {
  mode?: 'create' | 'edit'
};

const MovieFormPage: React.FC<MovieFormPageProps> = () => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();

  const navigateToMovies = () => navigate(routes.MoviesPage);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = formatValues(formRef.current);
      ApiService.postMovie(values);
      navigateToMovies();
    } catch (error) {
      alert(error instanceof Error ? error.message : error);
    }
  };

  return (
    <Styled.Container>
      <Styled.PaperForm elevation={4} onSubmit={handleSubmit} ref={formRef}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>Add movie</Typography>
        <Stack sx={{ gap: 1, mt: 2 }}>
          <TextField label="Title" fullWidth variant="filled" name="title" required />
          <LocationField />
          <ImagesField />

          <TextField
            label="Year"
            fullWidth
            variant="filled"
            name="year"
            type="number"
            required
          />
          <Box>
            <Typography component="legend">Rating</Typography>
            <Rating
              max={10}
              size="large"
              precision={0.2}
              name="rating"
              icon="👍"
              emptyIcon="👍"
            />
          </Box>

          <Stack alignItems="center" sx={{ mt: 2 }}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              size="large"
            >
              Add
            </Button>
          </Stack>
        </Stack>
      </Styled.PaperForm>
    </Styled.Container>
  );
};

export default MovieFormPage;
