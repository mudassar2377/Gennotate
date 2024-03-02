import React, { useEffect, useContext } from 'react'
import { Box } from '@mui/material';
import Footer from '../components/Footer';
import gennotateContext from '../gennotateContext/gennotateContext';
import Navbar from '../components/Navbar';

const Gallery = () => {
  const context = useContext(gennotateContext);
  const { setAuthenticationMsg } = context;
  useEffect(() => {
    setAuthenticationMsg('No Text');
  }, []);
  return (
    <Box>
      <Navbar/>
      <Box sx={{ height: '90vh' }}></Box>
      <Footer/>
    </Box>
  )
}

export default Gallery
