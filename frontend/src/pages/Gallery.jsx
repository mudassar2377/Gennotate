import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useContext } from 'react'
import gennotateContext from '../gennotateContext/gennotateContext';
import Modal from '../components/Modal';

const Gallery = () => {
  const context = useContext(gennotateContext);
  const { setAuthenticationMsg, data, handleOpenModal, setSelected, temp2, selected, setTemp, data2, setTemp2 } = context;
  useEffect(() => {
    setAuthenticationMsg('No Text');
  }, []);
  useEffect(()=>{
    if (data.length > 0) {
      setTemp(data[selected]);
    }
    if (data2.length > 0) {
      setTemp2(data2.filter(item => item.generatedImageId === data[selected].id));
    }
  }, [selected])
  return (
    <Box mt={15} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Typography textAlign='center' sx={{ fontWeight: 'bold', color: '#154d4f', fontSize: { sm: '3vw', xs: '9vw' } }}>My Gallery</Typography>
      <Grid container sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: { xs: '80vw', sm: '92vw' } }} my={{xs: 0, sm: 5}}>
      {data.map((label, index)=>(<Grid item xs={12} sm={3} sx={{ width: { sm: '23vw', xs: '80vw' }, height: { sm: '23vw', xs: '80vw' } }} key={index} my={{xs: 3, sm: 0}}>
          <Box sx={{ width: '100%', height: '100%' }} p={{ xs: 0, sm: 2 }}>
            <Box sx={{ position: 'relative', width: '100%', height: '100%', border: '5px solid #154d4f', borderRadius: '0.5vw' }}>
              <img src={label.link.replace("image/upload/", "")} alt='Image' width='100%' height='100%'/>
              <Box sx={{ background: 'rgba(0, 0, 0, 0.7)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, color: 'rgba(255, 255, 255, 0.6)', transition: 'opacity 0.3s', '&:hover': { opacity: 1, cursor: 'pointer' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={()=>{ handleOpenModal(); setSelected(index); }}>Click here to see the details</Box>
            </Box>
          </Box>
        </Grid>))}
        <Modal/>
      </Grid>
    </Box>
  )
}

export default Gallery
