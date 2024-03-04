import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import GenerateCard from '../components/GenerateCard';

const Generate = () => {
  return (
    <Box sx={{ marginTop: {xs: '30vw', sm: '10vw'} }}>
        <Grid container>
            <Grid item sm={6} xs={12}>
                <Box ml={6} mr={{xs: 6, sm: 3}}>
                    <Box mb={2}>
                        <Typography textAlign={{sm: 'left', xs: 'center'}} sx={{ fontSize: {xs: '9vw', sm: '4vw'}, fontWeight: 'bold', color: '#154D4F' }}>Image Generation</Typography>
                    </Box>
                    <Typography textAlign='justify' sx={{ fontSize: {xs: '4vw', sm: '1.2vw'}, color: '#154d4f' }}>Optical Coherence Tomography (OCT) serves as a critical diagnostic tool in the realm of ophthalmology, offering non-invasive, high-resolution imaging of the retina. Our Gennotate platform facilitates the exploration and generation of diverse OCT images, each shedding light on specific ocular conditions. Dive into the intricacies of normal OCT images, providing a foundational understanding of retinal structures. For a deeper examination, users can engage with pathological scenarios such as Choroidal Neovascularization (CNV), a complication often associated with age-related macular degeneration. Diabetic Macular Edema (DME) images showcase the impact of diabetes on retinal health, while images featuring DRUSEN highlight deposits that can influence vision. The varied OCT image types available on Gennotate empower users, including healthcare professionals and researchers, to not only generate but also annotate images, fostering a comprehensive approach to visual data exploration. Whether for educational purposes or advancing research initiatives, our platform provides a dynamic and versatile environment for OCT image synthesis and annotation.</Typography>
                </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }} py={{ xs: 5, sm: 0 }} pr={6} pl={{xs: 6, sm: 3}}>
                    <img src="https://raw.githubusercontent.com/Hashir789/hashir/main/105new_010_Normal.jpg" alt="Healthy OCT Image" style={{ maxWidth: '100%', height: 'auto', width: { xs: '100vw', sm: '50vw' } }}/>
                </Box>
            </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center' }} pt={{ xs: 3, sm: 10 }} mb={{ xs: 10, sm: 10 }} ml={{ xs: 6, sm: 0 }} pr={{ xs: 6, sm: 0 }}>
            <GenerateCard/>
        </Box>
    </Box>
  )
}

export default Generate
