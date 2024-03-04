import React, { useContext, useEffect } from 'react'
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import LoginCard from '../components/LoginCard';
import SignupCard from '../components/SignupCard';
import { Box, Grid, Typography } from '@mui/material';
import gennotateContext from '../gennotateContext/gennotateContext';

const Authentication = () => {
  const context = useContext(gennotateContext);
  const { authentication, authenticationMsg, setHandleNavbar2 } = context;
  const navigate = useNavigate();
  useEffect(() => {
    if (authenticationMsg === 'Success') {
      navigate('/home');
      setHandleNavbar2(1);
    }
  }, [authenticationMsg]);
  return (
    <Box sx={{ height: '100vh', width: '100vw', padding: 0, margin: 0, backgroundImage: 'linear-gradient(to bottom, #0ea190, #11b97c)' }}>
        <Grid container>
            <Grid item xs={12} sm={7} sx={{ height: '100vh', display: { xs: 'none', sm: 'flex' } }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '50vw' }}>
                <Typography sx={{ fontFamily: "'Lateef', serif", fontSize: '8vw', fontWeight: '700', lineHeight: 1, width: '100%', color: '#154D4F' }} textAlign='center'>Gennotate</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ fontFamily: "'Lateef', serif", fontSize: '2vw', color: 'white', marginLeft: 'auto', marginRight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'left' }} textAlign='left'>{authentication} to continue access page&nbsp;<FaAngleRight size='1.5vw'/></Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={5} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                <Box sx={{ backgroundColor: 'white', width: '100%', background: 'white', backgroundImage: {xs: 'linear-gradient(to bottom, #0ea190, #11b97c)', sm: 'none'} , height: '100vh', borderTopLeftRadius: { xs: '0%', sm: '2vw' }, borderBottomLeftRadius: { xs: '0%', sm: '2vw' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {authentication==='Login'?<LoginCard/>:<SignupCard/>}
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Authentication
