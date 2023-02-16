import React from 'react'; import {
  Typography,
  TextField,
  Box,
} from '@mui/material';

const MainCharacterField = () => (
  <Box>
    <Typography variant="subtitle1" sx={{ pl: 1 }}>Main character</Typography>
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField label="Actor" fullWidth variant="filled" name="actor" required />
      <TextField label="Role" fullWidth variant="filled" name="role" required />
    </Box>
  </Box>
);

export default MainCharacterField;
