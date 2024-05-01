import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";
import { FaCircleUser, FaBars, FaXmark } from "react-icons/fa6";
import { AppBar, Box, Typography, Checkbox } from '@mui/material'
import gennotateContext from '../gennotateContext/gennotateContext';


const Navbar = () => {
  const context = useContext(gennotateContext);
  const { openNav, setOpenNav, handleNavbar1, setHandleNavbar1, handleNavbar2, setHandleNavbar2 } = context;
  const navList = [
    { id: 1, title: 'Home', link: '/home' },
    { id: 2, title: 'Gallery', link: '/gallery' },
    { id: 3, title: 'Generate', link: '/generate' },
    { id: 4, title: 'Our Team', link: '/team' },
  ]
  return (
    <Box>
      <AppBar sx={{ background: 'linear-gradient(to bottom, #0ea190, #11b97c)', height: { xs: openNav?'18vw':'65vw', sm: '5vw'}, overflow: 'hidden', transition: 'height 0.4s ease' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: { xs: '18vw', sm: '5vw'} }}>
          <Typography sx={{ fontFamily: "'Lateef', serif", fontSize: { sm: '3vw', xs: '12vw' }, color: '#154d4f', fontWeight: 'bold' }} pl={6}>Gennotate</Typography>
          <Box sx={{ display: { sm: 'flex', xs: 'none' }, width: `${navList.length - 1}0vw`, alignItems: 'center', justifyContent: 'space-between' }}>
            {navList.map((item) => (<Link to={item.link} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}><Box onClick={()=>{ setHandleNavbar2(item.id); }} onMouseEnter={() => setHandleNavbar1(item.id)} onMouseLeave={() => setHandleNavbar1(0)} sx={{ ':hover': { cursor: 'pointer' }, height: '100%' }} >
              <Typography sx={{ fontSize: '1.2vw', color: (handleNavbar1 === item.id || handleNavbar2 === item.id) ? '#154d4f' : 'inherit', fontWeight: 'bold' }} px={1} >{item.title}</Typography>
              <Box sx={{ width: (handleNavbar1 === item.id || handleNavbar2 === item.id) ? '100%' : '1%', background: (handleNavbar1 === item.id || handleNavbar2 === item.id) ? '#154d4f' : 'inherit', height: '0.2vw', transition: '0.5s ease width' }}></Box>
            </Box></Link>))}
          </Box>
          <Box sx={{ display: {xs: 'none', sm: 'flex'}, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Box mr={1}><FaCaretDown style={{  color: '#154d4f', background: 'inherit' }} size={'1.25vw'}/></Box>
            <Box mr={6}><FaCircleUser style={{  color: '#154d4f', background: 'inherit' }} size={'2vw'}/></Box>
          </Box>
          <Box mr={6}sx={{ display: {xs: 'flex', sm: 'none'} }}>
            <Checkbox onChange={()=>{ setOpenNav(!openNav); }} icon={<FaBars style={{  color: '#154d4f', background: 'inherit' }} size={26}/>} checkedIcon={<FaXmark style={{  color: '#154d4f', background: 'inherit' }} size={26}/>} />  
          </Box>
        </Box>
        <Box px={6} pb={2} sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column' }}>
            {navList.map((item) => (<Link to={item.link} key={item.id} style={{ textDecoration: 'none', color: 'white' }}><Box onClick={()=>{ setHandleNavbar2(item.id); }} onMouseEnter={() => setHandleNavbar1(item.id)} onMouseLeave={() => setHandleNavbar1(0)} sx={{ ':hover': { cursor: 'pointer' }, height: '100%' }} mb={1} >
              <Typography sx={{ fontSize: '5vw', color: (handleNavbar1 === item.id || handleNavbar2 === item.id) ? '#154d4f' : 'inherit', fontWeight: 'bold' }} px={1} >{item.title}</Typography>
              <Box sx={{ width: (handleNavbar1 === item.id || handleNavbar2 === item.id) ? '100%' : '1%', background: (handleNavbar1 === item.id || handleNavbar2 === item.id) ? '#154d4f' : 'inherit', height: '0.7vw', transition: '0.5s ease width' }}></Box>
            </Box></Link>))}
        </Box>
      </AppBar>
    </Box>
  )
}

export default Navbar
