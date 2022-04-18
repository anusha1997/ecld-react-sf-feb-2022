import React from 'react';
import './App.css';
import {  Link , Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Service  from './Service';

function App() {
  return (
    <div>
      <nav  className='nav'>
        <ul >
          <li><Link className='link' to='/'>Home</Link></li>
          <li><Link className='link' to='/about'>About</Link></li>
          <li><Link className='link' to='/contact'>Contact</Link></li>
          <li><Link className='link' to='/login'>Login</Link></li>
          <li><Link className='link' to='/service'>Service</Link></li>
        </ul>
      </nav>
     
<Routes>
         <Route exact path="/" element={  <Home/>}></Route>
         <Route exact path="/about" element={  <About/>}></Route>
         <Route exact path="/contact" element={  <Contact/>}></Route>
         <Route exact path="/login" element={  <Login/>}></Route>
         <Route exact path="/Service" element={  <Service/>}></Route>
         </Routes>
       </div>

  );
}

export default App;
