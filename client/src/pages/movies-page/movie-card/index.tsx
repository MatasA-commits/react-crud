import React from 'react';
import {
  Stack,
  Box,
  Typography,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import Img from 'components/ui/img';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import * as Styled from './styled';

type MovieCardProps = MovieModel & {
  onDelete: VoidFunction
};

const MovieCard: React.FC<MovieCardProps> = (
  {
    id,
    title,
    main_character,
    images,
    year,
    rating,
    onDelete,
  },
) => {
  const navigate = useNavigate();
  return (
    <Stack sx={{ boxShadow: 3, position: 'relative' }}>
      <Img src={images[0]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
      <Styled.AdminActions>
        <Button
          variant="contained"
          color="warning"
          size="small"
          onClick={() => navigate(routes.MovieUpdatePage.createLink(id))}
        >
          <EditIcon />
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          id={id}
          onClick={onDelete}
        >
          <DeleteIcon />
        </Button>
      </Styled.AdminActions>
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
