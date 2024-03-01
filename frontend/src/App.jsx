import React from 'react';
import Box from '@mui/material/Box';
import Gallery from './pages/Gallery';
import Authentication from './pages/Authentication';
import GennotateState from './gennotateContext/GennotateState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <GennotateState>
      <Box>
        <Router>
          <Routes>
            <Route path="/" element={<Authentication />} />
            <Route path="/gallery" element={<Gallery/> } />
          </Routes>
        </Router>
      </Box>
    </GennotateState>
  );
}

export default App;