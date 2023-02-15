import React from 'react';
import {
  Stack,
  Box,
  Typography,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Img from 'components/ui/img';
import routes from 'navigation/routes';
import * as Styled from './styled';

type MovieCardProps = MovieModel;

const MovieCard: React.FC<MovieCardProps> = (
  {
    id,
    title,
    main_character,
    images,
    year,
    rating,
  },
) => {
  const navigate = useNavigate();
  return (
    <Stack sx={{ boxShadow: 3 }}>
      <Img src={images[0]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
      <Styled.ContentWrapper>
        <Box sx={{ flexGrow: 1 }}>

          <Typography component="h2" sx={{ fontWeight: 600, fontSize: '1.4rem' }}>{title}</Typography>
          <Box display="flex" alignItems="flex-end" justifyContent="space-between">
            <Box sx={{ fontSize: '1.3rem', color: 'secondary.main', fontWeight: 600 }}>{`released: ${year}`}</Box>
            <Styled.Rating>{rating}</Styled.Rating>
          </Box>
          <Typography component="h3" sx={{ color: 'grey', fontSize: '1.1rem' }}>
            {`Starring ${main_character.actor} as "${main_character.role}"`}
          </Typography>

        </Box>

        <Styled.ButtonContainer>
          <Button color="secondary" variant="outlined">Add to list</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate(routes.MoviePage.createLink(id))}
          >
            Open

          </Button>
        </Styled.ButtonContainer>
      </Styled.ContentWrapper>
    </Stack>
  );
};
export default MovieCard;
