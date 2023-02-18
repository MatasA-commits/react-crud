import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  Swiper, SwiperSlide,
} from 'swiper/react';
import { Navigation } from 'swiper';
import Img from '../../components/ui/img';
import * as Styled from './styled';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

type SingleMovieCardProps = MovieModel;

const SingleMovieCard: React.FC<SingleMovieCardProps> = ({
  title,
  main_character,
  images,
  year,
  rating,
}) => (
  <Box textAlign="center">
    <Typography
      component="h2"
      sx={{ fontWeight: 700, fontSize: '2rem' }}
      padding="1rem"
    >
      {title}
    </Typography>
    <Styled.CardLayout>
      <Box maxWidth={500}>
        <Swiper navigation modules={[Navigation]}>
          {
            images.map((img) => (
              <SwiperSlide key={img}>
                <Img
                  src={img}
                  alt=""
                  sx={{ aspectRatio: '1.42', width: 1, borderRadius: '7px' }}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Box>
      <Styled.InfoLayout>
        <Styled.Rating>{`Rating: ${rating}`}</Styled.Rating>
        <Typography fontSize="1.3rem">{`Starring ${main_character.actor} as "${main_character.role}"`}</Typography>
        <Typography>{`Released: ${year}`}</Typography>
      </Styled.InfoLayout>
    </Styled.CardLayout>
  </Box>

);

export default SingleMovieCard;
