import React, { useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import gennotateContext from '../gennotateContext/gennotateContext';
import { Box, Alert, AlertTitle, IconButton, Collapse, Typography } from '@mui/material';

export default function GenerateAlert() {
    const context = useContext(gennotateContext);
    const { generateAlert, setGenerateAlert, alertMsg } = context;
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={generateAlert}>
        <Alert severity={alertMsg==='Invalid input. The input entered should only be integers'||alertMsg==='Unfortunately! we are having server error. Kindly try again after some time'?'error':'success'} action={
            <IconButton aria-label="close" color="inherit" size="small" onClick={() => { setGenerateAlert(false); }}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>{alertMsg==='Invalid input. The input entered should only be integers'||alertMsg==='Unfortunately! we are having server error. Kindly try again after some time'?'Error':'Success'}</AlertTitle>
          <Typography textAlign='justify'>{alertMsg}</Typography>
        </Alert>
      </Collapse>
    </Box>
  );
}