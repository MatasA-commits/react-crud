import React from 'react';
import {
  Paper as MuiPaper,
  PaperProps,
  Stack,
  styled,
} from '@mui/material';

export const Container = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1),
  alignItems: 'right',

  [theme.breakpoints.up('sm')]: {
    paddingBottom: theme.spacing(1),
  },

  [theme.breakpoints.up('sm')]: {
    paddingBottom: theme.spacing(1),
  },
}));

const Form = React.forwardRef(
  (
    props: Omit<PaperProps<'form'>, 'component' | 'ref'>,
    ref: PaperProps<'form'>['ref'],
  ) => <MuiPaper component="form" ref={ref} {...props} />,
);
export const PaperForm = styled(Form)(({ theme }) => ({
  padding: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.breakpoints.values.sm}px - ${theme.spacing(4)})`,
  },
}));
