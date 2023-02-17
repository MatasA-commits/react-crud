/* eslint-disable no-alert */
import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
  Button,
  Rating,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import ImagesField from './images-field';
import MainCharacterField from './main-character-field';
import * as Styled from './styled';
import ApiService from '../../services/api-service';
import { titleMap, btnColorMap, btnMap } from './data';
import { formatValues } from './helpers';
import useMovie from '../../hooks/useMovie';

type MovieFormPageProps = {
  mode?: 'create' | 'update'
};

const MovieFormPage: React.FC<MovieFormPageProps> = ({ mode = 'create' }) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = useMovie(id);

  const navigateToMovies = () => navigate(routes.MoviesPage);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = formatValues(formRef.current);
      if (mode === 'create') {
        ApiService.postMovie(values);
      } else {
        console.log('Daromas atnaujinimas', id);
        console.log(values);
      }
      navigateToMovies();
    } catch (error) {
      alert(error instanceof Error ? error.message : error);
    }
  };

  if (mode === 'update' && movie === undefined) return null;

  return (
    <Styled.Container>
      <Styled.PaperForm elevation={4} onSubmit={handleSubmit} ref={formRef}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>{titleMap[mode]}</Typography>
        <Stack sx={{ gap: 1, mt: 2 }}>
          <TextField
            label="Title"
            fullWidth
            variant="filled"
            name="title"
            required
            defaultValue={movie?.title}
          />
          <MainCharacterField
            defaultActor={movie?.main_character.actor}
            defaultRole={movie?.main_character.role}
          />
          <ImagesField defaultImages={movie?.images} />

          <TextField
            label="Year"
            fullWidth
            variant="filled"
            name="year"
            type="number"
            inputProps={{ step: '1' }}
            required
            defaultValue={movie?.year}
          />
          <Box>
            <Typography component="legend">Rating</Typography>
            <Rating
              max={10}
              size="large"
              precision={0.1}
              name="rating"
              icon="👍"
              emptyIcon="👍"
              defaultValue={movie?.rating}
            />
          </Box>

          <Stack alignItems="center" sx={{ mt: 2 }}>
            <Button
              type="submit"
              color={btnColorMap[mode]}
              variant="contained"
              size="large"
            >
              {btnMap[mode]}
            </Button>
          </Stack>
        </Stack>
      </Styled.PaperForm>
    </Styled.Container>
  );
};

export default MovieFormPage;
