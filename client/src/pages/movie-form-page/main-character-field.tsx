import React from 'react'; import {
  Typography,
  TextField,
  Box,
} from '@mui/material';

type MainCharacterProps = {
  defaultActor?: string,
  defaultRole?: string,
};

const MainCharacterField: React.FC<MainCharacterProps> = ({
  defaultActor,
  defaultRole,
}) => (
  <Box>
    <Typography variant="subtitle1" sx={{ pl: 1 }}>Main character</Typography>
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField
        label="Actor"
        fullWidth
        variant="filled"
        name="actor"
        required
        defaultValue={defaultActor}
      />
      <TextField
        label="Role"
        fullWidth
        variant="filled"
        name="role"
        required
        defaultValue={defaultRole}
      />
    </Box>
  </Box>
);

export default MainCharacterField;
