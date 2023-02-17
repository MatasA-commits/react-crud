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
