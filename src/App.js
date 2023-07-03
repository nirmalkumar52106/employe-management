import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';

import Employelist from './Components/Employelist';
import { Editemloye } from './Components/Edit-emp';
import "./App.css"
import "./Components/Navbar.css"
import { Registration } from './Components/Create-employe';

function App(){
  return(
    <>
  <Routes>
    <Route excat path="/" element={<Navbar/>}/>
    <Route excat path="/list" element={<Employelist/>}/>
    <Route excat path="/edit-employ" element={<Editemloye/>}/>
    <Route excat path="/register" element={<Registration/>}/>
  </Routes>
    
    
    </>
  )
}

export{App}