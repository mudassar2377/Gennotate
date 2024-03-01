import React, { useContext } from 'react'
import { MdErrorOutline } from "react-icons/md";
import { FaUser, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import gennotateContext from '../gennotateContext/gennotateContext';
import { Box, Button, Card, CardContent, TextField, InputAdornment, Checkbox, Typography } from '@mui/material'

const SignupCard = () => {
    const context = useContext(gennotateContext);
    const { setAuthentication, seeSignUpPassword, setSeeSignUpPassword, seeSignUpConfirmPassword, setSeeSignUpConfirmPassword, authenticationMsg, setAuthenticationMsg, hasOnlySpacesAndAlphabets, isUsernameValid, signup } = context;
    const handleSignup = (e) =>{
        e.preventDefault();
        const firstName = e.target.elements.firstName.value;
        const lastName = e.target.elements.lastName.value;
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        const cpassword = e.target.elements.cpassword.value;
        if (firstName.length < 3 || firstName.length > 20) {
            setAuthenticationMsg('length of first name must be in the range 3-20')
        }
        else if (!hasOnlySpacesAndAlphabets(firstName)) {
            setAuthenticationMsg('first name must only contain alphabets')
        }
        else if (lastName.length < 3 || lastName.length > 20) {
            setAuthenticationMsg('length of last name must be in the range 3-20')
        }
        else if (!hasOnlySpacesAndAlphabets(lastName)) {
            setAuthenticationMsg('last name must only contain alphabets')
        }
        else if (username.length < 3 || username.length > 20) {
            setAuthenticationMsg('length of username must be in the range 3-20');
        }
        else if (!isUsernameValid(username)) {
            setAuthenticationMsg('username must only contain underscore(_) or alphanumeric characters');
        }
        else if (password.length < 8) {
            setAuthenticationMsg('length of password must be greater than 7 characters');
        }
        else if (password !== cpassword) {            
            setAuthenticationMsg('passwords do not match');
        }
        else {
            signup({ "first_name": firstName, "last_name": lastName, "username": username, "password": password });
        }
    }
  return (
    <Box>
        <Box my={2}><Typography sx={{ fontFamily: "'Lateef', serif", fontSize: '15vw', fontWeight: '700', color: 'white' ,display: { xs: 'block', sm: 'none' } }} textAlign='center'>Gennotate</Typography></Box>
        <Card sx={{ width: {xs: '90vw', sm: '35vw'}, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', paddingLeft: '10px', paddingRight: '10px' }}>
            <CardContent>
                <form onSubmit={handleSignup}>
                    <Box mt={3} sx={{ display: 'flex' }}>
                        <TextField name="firstName" variant="standard" label="First Name *" fullWidth color='success' InputProps={{startAdornment: (<InputAdornment position="start"><FaUser size={18}/></InputAdornment>)}}/>
                        <Box mx={1}></Box>
                        <TextField name="lastName" variant="standard" label="Last Name" fullWidth color='success' InputProps={{startAdornment: (<InputAdornment position="start"><FaUser size={18}/></InputAdornment>)}}/>
                    </Box>
                    <Box mt={3}>
                        <TextField name="username" variant="standard" label="Username" fullWidth color='success' InputProps={{startAdornment: (<InputAdornment position="start"><FaUser size={18}/></InputAdornment>)}}/>
                    </Box>
                    <Box mt={3} mb={7} sx={{ display: 'flex' }}>
                        <TextField name="password" type={seeSignUpPassword?'password':'text'} variant="standard" label="Password" fullWidth color='success' inputMode='none' InputProps={{startAdornment: (<InputAdornment position="start"><FaLock size={18}/></InputAdornment>), endAdornment: (<InputAdornment position="end"><Checkbox  onChange={(e)=>{ setSeeSignUpPassword(!e.target.checked); }} icon={<FaEye size={18}/>} checkedIcon={<FaEyeSlash size={18}/>} color='default'/></InputAdornment>)}}/>
                        <Box mx={1}></Box>
                        <TextField name="cpassword" type={seeSignUpConfirmPassword?'password':'text'} variant="standard" label="Confirm Password" fullWidth color='success' inputMode='none' InputProps={{startAdornment: (<InputAdornment position="start"><FaLock size={18}/></InputAdornment>), endAdornment: (<InputAdornment position="end"><Checkbox onChange={(e)=>{ setSeeSignUpConfirmPassword(!e.target.checked); }} icon={<FaEye size={18}/>} checkedIcon={<FaEyeSlash size={18}/>} color='default'/></InputAdornment>)}}/>
                    </Box>
                    <Box mb={2} sx={{ color: authenticationMsg==='No Text'?'white':'red', display: authenticationMsg==='No Text'?'none':'flex'}}>
                        <Box mr={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <MdErrorOutline/>
                        </Box>
                        <Typography textAlign='justify' sx={{ fontSize: '14px' }}>{authenticationMsg}</Typography>
                    </Box>
                    <Box>
                        <Button type="submit" variant="contained" fullWidth sx={{ fontWeight: 'bold', backgroundImage: 'linear-gradient(to bottom, #0ea190, #11b97c)' }}>Sign Up</Button>
                    </Box>
                </form>
                <Box my={3}>
                    <hr/>
                </Box>
                <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography color='text.secondary'>Already have an account ?</Typography>
                    <Button color='success' onClick={()=>{ setAuthentication('Login'); setAuthenticationMsg('No Text') }}>Login</Button>
                </Box>
            </CardContent>
        </Card>
    </Box>
  )
}

export default SignupCard
