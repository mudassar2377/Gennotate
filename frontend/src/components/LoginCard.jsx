import React, { useContext } from 'react'
import { FaUser, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import gennotateContext from '../gennotateContext/gennotateContext';
import { Box, Button, Card, CardContent, TextField, InputAdornment, Checkbox, Typography } from '@mui/material'
import AuthenticateAlert from '../components/AuthenticateAlert'

const LoginCard = () => {
    const context = useContext(gennotateContext);
    const { setAuthentication, seeLoginPassword, setSeeLoginPassword, login, setAuthenticationMsg, isUsernameValid, setAuthenticateAlert } = context;
    const handleLogin = (e) =>{
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        if (username.length < 3 || username.length > 20) {
            setAuthenticationMsg('length of username must be in the range 3-20');
            setAuthenticateAlert(true)
        }
        else if (!isUsernameValid(username)) {
            setAuthenticationMsg('wrong username or password');
            setAuthenticateAlert(true)
        }
        else if (password.length < 8) {
            setAuthenticationMsg('length of password must be greater than 7 characters');
            setAuthenticateAlert(true)
        }
        else {
            setAuthenticateAlert(false)
            login({ username, password });
        }
    }
  return (
    <Box>
        <Box my={{xs: 2, sm: 0}}><Typography sx={{ fontFamily: "'Lateef', serif", fontSize: '15vw', fontWeight: '700', color: 'white', display: { xs: 'block', sm: 'none' } }} textAlign='center'>Gennotate</Typography></Box>
        <Card sx={{ width: {xs: '90vw', sm: '30vw'}, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', paddingLeft: '10px', paddingRight: '10px', maxWidth: 500 }}>
            <CardContent>
                <form onSubmit={handleLogin}>
                    <Box mt={3}>
                        <TextField name="username" variant="standard" label="Username" fullWidth color='success' InputProps={{startAdornment: (<InputAdornment position="start"><FaUser size={18}/></InputAdornment>)}}/>
                    </Box>
                    <Box mt={3} mb={7}>
                        <TextField name="password" type={seeLoginPassword?'password':'text'} variant="standard" label="Password" fullWidth color='success' inputMode='none' InputProps={{startAdornment: (<InputAdornment position="start"><FaLock size={18}/></InputAdornment>), endAdornment: (<InputAdornment position="end"><Checkbox onChange={(e)=>{ setSeeLoginPassword(!e.target.checked); }} icon={<FaEye size={18}/>} checkedIcon={<FaEyeSlash size={18}/>} color='default'/></InputAdornment>)}}/>
                    </Box>
                    <Box>
                        <AuthenticateAlert/>
                    </Box>
                    <Box mt={2}>
                        <Button type="submit" variant="contained" fullWidth sx={{ fontWeight: 'bold', backgroundImage: 'linear-gradient(to bottom, #0ea190, #11b97c)' }}>Login</Button>
                    </Box>
                </form>
                <Box my={3}>
                    <hr/>
                </Box>
                <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography color='text.secondary'>Don't have an account ?</Typography>
                    <Button color='success' onClick={()=>{ setAuthentication('Sign up'); setAuthenticationMsg('No Text'); setAuthenticateAlert(false); }}>Sign Up</Button>
                </Box>
            </CardContent>
        </Card>
    </Box>
  )
}

export default LoginCard
