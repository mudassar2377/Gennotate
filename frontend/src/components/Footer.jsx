import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Box, Grid, Tooltip, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #0ea190, #11b97c)' }} pb={2} px={3}>
        <Box sx={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }} pb={4} pt={4}>
            <Grid container>
                <Grid item xs={12} sm={5} sx={{ borderRight: { sm: '1px solid rgba(0,0,0,0.1)', xs: 'none' } }} px={3}>
                    <Box>
                        <Typography sx={{ fontFamily: "'Lateef', serif", fontSize: { sm: '3vw', xs: '12vw' }, color: '#154d4f', fontWeight: 'bold' }}>Gennotate</Typography>
                        <Typography sx={{ fontSize: { sm: '1.2vw', xs: '4vw' }, color: 'white', lineHeight: 1.2 }} textAlign='justify'>Gennotate, meticulously developed by NUST students, serves as a comprehensive web application dedicated to the precise generation and segmentation of Optical Coherence Tomography (OCT) images, reflecting a seamless blend of simplicity and functionality.</Typography>
                        <Box sx={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} mt={{ xs: 2, sm: 2 }} mb={{ xs: 1, sm: 0 }}>
                            <Tooltip title='Github'><Box sx={{ color: 'white', '&:hover': { color: '#154d4f', cursor: 'pointer' }}}><FaGithub size={24}/></Box></Tooltip>
                            <Box mx={1}></Box>
                            <Tooltip title='LinkedIn'><Box sx={{ color: 'white', '&:hover': { color: '#154d4f', cursor: 'pointer' }}}><FaLinkedin size={24}/></Box></Tooltip>
                            <Box mx={1}></Box>
                            <Tooltip title='Twitter'><Box sx={{ color: 'white', '&:hover': { color: '#154d4f', cursor: 'pointer' }}}><FaTwitter size={24}/></Box></Tooltip>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2} sx={{ borderRight: { sm: '1px solid rgba(0,0,0,0.1)', xs: 'none' } }} px={3}>
                    <Box py={{ xs: 1, sm: 2 }}>
                        <Typography sx={{ fontSize: { xs: '5vw', sm: '1.5vw' }, color: '#154d4f', fontWeight: 'bold' }}>Services</Typography>
                        <Box py={{ xs: 1, sm: 2 }}>
                            <Typography sx={{ fontSize: { xs: '4vw', sm: '1.2vw' }, color: 'white' }}>Generation</Typography>
                            <Typography sx={{ fontSize: { xs: '4vw', sm: '1.2vw' }, color: 'white' }}>Segmentation</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2} sx={{ borderRight: { sm: '1px solid rgba(0,0,0,0.1)', xs: 'none' } }} px={3}>
                    <Box py={{ xs: 1, sm: 2 }}>
                        <Typography sx={{ fontSize: { xs: '5vw', sm: '1.5vw' }, color: '#154d4f', fontWeight: 'bold' }}>Pages</Typography>
                        <Box py={{ xs: 1, sm: 2 }}>
                            <Typography sx={{ fontSize: { xs: '4vw', sm: '1.2vw' }, color: 'white' }}>Home</Typography>
                            <Typography sx={{ fontSize: { xs: '4vw', sm: '1.2vw' }, color: 'white' }}>Gallery</Typography>
                            <Typography sx={{ fontSize: { xs: '4vw', sm: '1.2vw' }, color: 'white' }}>Generate</Typography>
                            <Typography sx={{ fontSize: { xs: '4vw', sm: '1.2vw' }, color: 'white' }}>Our Team</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3} px={3}>
                    <Box py={{ xs: 1, sm: 2 }}>
                        <Typography sx={{ fontSize: { xs: '5vw', sm: '1.5vw' }, color: '#154d4f', fontWeight: 'bold' }}>Contact Us</Typography>
                        <Box py={{ xs: 1, sm: 2 }}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography sx={{ fontSize: { xs: '4vw', sm: '1.2vw' }, color: 'white', fontWeight: 'bold' }}>Email:&nbsp;</Typography>
                                <Typography sx={{ fontSize: { xs: '4vw', sm: '1.2vw' }, color: 'white' }}>gennotate@gmail.com</Typography>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <Typography sx={{ fontSize: { xs: '4vw', sm: '1.2vw' }, color: 'white', fontWeight: 'bold' }}>Phone:&nbsp;</Typography>
                                <Typography sx={{ fontSize: { xs: '4vw', sm: '1.2vw' }, color: 'white' }}>+92 321 2165297</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Box mt={2}>
            <Typography textAlign='center' sx={{ color: 'white', fontSize: { sm: '1.2vw', xs: '4vw' } }}>© All rights reserved · Gennotate · Privacy Policy</Typography>
        </Box>
    </Box>
  )
}

export default Footer
