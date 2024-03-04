import React, { useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import gennotateContext from '../gennotateContext/gennotateContext';
import { Box, Alert, AlertTitle, IconButton, Collapse, Typography } from '@mui/material';

export default function AuthenticateAlert() {
    const context = useContext(gennotateContext);
    const { authenticateAlert, setAuthenticateAlert, authenticationMsg } = context;
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={authenticateAlert}>
        <Alert severity='error' action={
            <IconButton aria-label="close" color="inherit" size="small" onClick={() => { setAuthenticateAlert(false); }}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>Error</AlertTitle>
          <Typography textAlign='justify'>{ authenticationMsg }</Typography>
        </Alert>
      </Collapse>
    </Box>
  );
}