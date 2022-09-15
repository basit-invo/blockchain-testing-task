import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<Home />}  exact/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
