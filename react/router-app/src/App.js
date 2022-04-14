import React from 'react';
import './App.css';
import { Router, Link , Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Service  from './Service';

function App() {
  return (
    
    
       <div>
     

       <Routes>
         <Route exact path="/" element={  <Home/>}></Route>
         <Route exact path="/about" element={  <About/>}></Route>
         <Route exact path="/contact" element={  <Contact/>}></Route>
         <Route exact path="/login" element={  <Login/>}></Route>
         </Routes>
       </div>

  );
}

export default App;
