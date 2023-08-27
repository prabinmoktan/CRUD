// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/js/dist/modal"
import { Routes, Route } from 'react-router-dom'
import NameLister from './pages/NameLister';
// import Listgroup from './components/Listgroup';

function App() {
  
  
 
 
    
  
  return (
    <>
    <Routes>
      <Route path='/' element={<NameLister/>} />
    </Routes>
       
    </>
  )
}


export default App
