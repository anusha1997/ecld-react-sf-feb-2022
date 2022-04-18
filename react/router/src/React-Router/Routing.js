import React from 'react';
import Home from './Home/Home';
import SignUp from './Signup/signup';
import About from  './About/About';
import Pricing from './Pricing/Pricing';
import Support from './Support/Support';
import Products from './Product/Products';
import { Route , Routes } from 'react-router-dom';

const Routing = () => {
    return(
        <div>
            <Routes>
            <Route exact path="/" element={  <Home/>}></Route>
            <Route exact path="/signup" element={  <SignUp/>}></Route>
            <Route exact path="/about" element={  <About/>}></Route>
            <Route exact path="/pricing" element={  <Pricing/>}></Route>
            <Route exact path="/Support" element={  <Support/>}></Route>
            <Route exact path="/Product" element={  <Products/>}></Route>
            </Routes>
            

        </div>
        
      
    )
}
export default Routing;
