import React, { useContext, useEffect } from 'react'
import { Box, Button } from '@mui/material';
import gennotateContext from '../gennotateContext/gennotateContext';

const Homee = () => {
  const context = useContext(gennotateContext);
  const { getGeneratedImages, user } = context;
  return (
    <Box my={30}>
      This page is under development
    </Box>
  )
}

export default Homee
