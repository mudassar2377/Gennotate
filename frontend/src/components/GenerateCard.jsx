import React, { useContext } from 'react'
import GenerateAlert from './GenerateAlert';
import gennotateContext from '../gennotateContext/gennotateContext';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';

const GenerateCard = () => {
    const context = useContext(gennotateContext);
    const { setAlertMsg, setGenerateAlert, generateImages, user } = context;
    const handleSubmit = (e) =>{
        e.preventDefault();
        const healthy = e.target.elements.healthy.value;
        const cnv = e.target.elements.cnv.value;
        const dme = e.target.elements.dme.value;
        const drusen = e.target.elements.drusen.value;
        if (isNaN(parseInt(healthy)) || isNaN(parseInt(cnv)) || isNaN(parseInt(dme)) || isNaN(parseInt(drusen))) {
            setAlertMsg('Invalid input. The input entered should only be integers')
            setGenerateAlert(true)
        }
        else {
            setGenerateAlert(false)
            const startTime = performance.now()
            generateImages({ userId: user.id, num: parseInt(healthy) }, startTime);
        }
    }
  return (
    <Card sx={{ width: { xs: '100vw', sm: '40vw' }, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', borderRadius: '0.75vw', minWidth: 300 }}>
        <CardContent>
            <Box mt={{ xs: 0, sm: 2 }} mb={{ xs: 3, sm: 3 }}>
                <Typography sx={{ fontSize: { xs: '5vw', sm: '2vw' }, fontWeight: 'bold', color: '#154D4F' }} textAlign='center'>Image Generation Form</Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <Box my={{ xs: '4vw', sm: '1vw' }} sx={{ display: 'flex' }} mx={'1vw'}>
                    <Box sx={{ width: '30%', display: {xs: 'none', sm: 'flex'}, alignItems: 'flex-end' }}>
                        <Typography sx={{ fontSize: '1.2vw', color: '#154D4F' }} textAlign='left'>Healthy Images: </Typography>
                    </Box>
                    <Box sx={{ width: {xs: '100%', sm: '70%'} }}>
                        <TextField name='healthy' label="Number of Healthy OCT Images" variant="standard" fullWidth color='success' type='number' defaultValue={0}/>
                    </Box>
                </Box>
                <Box my={{ xs: '4vw', sm: '1vw' }} sx={{ display: 'flex' }} mx={'1vw'}>
                    <Box sx={{ width: '30%', display: {xs: 'none', sm: 'flex'}, alignItems: 'flex-end' }}>
                        <Typography sx={{ fontSize: '1.2vw', color: '#154D4F' }} textAlign='left'>CNV Images: </Typography>
                    </Box>
                    <Box sx={{ width: {xs: '100%', sm: '70%'} }}>
                        <TextField name='cnv' label="Number of CNV OCT Images" variant="standard" fullWidth color='success' type='number' defaultValue={0}/>
                    </Box>
                </Box>
                <Box my={{ xs: '4vw', sm: '1vw' }} sx={{ display: 'flex' }} mx={'1vw'}>
                    <Box sx={{ width: '30%', display: {xs: 'none', sm: 'flex'}, alignItems: 'flex-end' }}>
                        <Typography sx={{ fontSize: '1.2vw', color: '#154D4F' }} textAlign='left'>DME Images: </Typography>
                    </Box>
                    <Box sx={{ width: {xs: '100%', sm: '70%'} }}>
                        <TextField name='dme' label="Number of DME OCT Images" variant="standard" fullWidth color='success' type='number' defaultValue={0}/>
                    </Box>
                </Box>
                <Box my={{ xs: '4vw', sm: '1vw' }} sx={{ display: 'flex' }} mx={'1vw'}>
                    <Box sx={{ width: '30%', display: {xs: 'none', sm: 'flex'}, alignItems: 'flex-end' }}>
                        <Typography sx={{ fontSize: '1.2vw', color: '#154D4F' }} textAlign='left'>Drusen Images: </Typography>
                    </Box>
                    <Box sx={{ width: {xs: '100%', sm: '70%'} }}>
                        <TextField name='drusen' label="Number of Drusen OCT Images" variant="standard" fullWidth color='success' type='number' defaultValue={0}/>
                    </Box>
                </Box>
                <Box mt={8} mb={2} sx={{ display: 'flex' }} mx={{ xs: 0, sm: 2 }}>
                    <Box sx={{ width: '30%', display: { xs: 'none', sm: 'flex' } }}>
                    </Box>
                    <Box sx={{ width: { xs: '100%', sm: '70%' } }}>
                        <Button type="submit" color='success' variant='contained' fullWidth sx={{ fontWeight: 'bold', background: 'linear-gradient(to bottom, #0ea190, #11b97c)' }}>Generate Images</Button>
                    </Box>
                </Box>
            </form>
            <Box mx={2} mt={3}>
                <GenerateAlert/>
            </Box>
        </CardContent>
    </Card>
  )
}

export default GenerateCard
