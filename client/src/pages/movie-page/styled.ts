import { Box, styled } from '@mui/material';

export const Rating = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'flex-end',
  fontSize: '1.3rem',
  color: 'green',
  gap: theme.spacing(0.2),
  fontWeight: 600,
  '&:after': {
    content: '"👍"',
  },
}));

export const CardLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
  },
}));

export const InfoLayout = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.4rem',
  justifyContent: 'center',
  alignItems: 'center',
}));
