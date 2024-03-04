import { Box } from '@mui/material';
import React, { useEffect, useContext } from 'react'
import gennotateContext from '../gennotateContext/gennotateContext';

const Gallery = () => {
  const context = useContext(gennotateContext);
  const { setAuthenticationMsg } = context;
  useEffect(() => {
    setAuthenticationMsg('No Text');
  }, []);
  return (
    <Box>
      <Box sx={{ height: '110vh' }}></Box>
    </Box>
  )
}

export default Gallery
