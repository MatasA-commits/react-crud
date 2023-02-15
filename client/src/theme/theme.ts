import { createTheme } from '@mui/material';

// sukuria temą, default temos pagrindu.
const theme = createTheme({
  palette: {
    primary: {
      main: '#10e047',
    },
    secondary: {
      main: '#091fe3',
    },
  },
  zIndex: {
    appBar: 1250,
  },
});

export default theme;
