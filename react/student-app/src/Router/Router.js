import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/contact';
import Student from './Student/Student'
import  Details  from './Student/showDetails';
import  Login from './Student/Login';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider}  from './auth';
import { RequireAuth } from './RequireAuth';



const Routing = () => {
    return(
      
       <AuthProvider>
        
            <Routes>
                <Route exact path="/" element={ <Home/>}></Route>
                <Route exact path="/about" element={ <About/>}></Route>
                <Route exact path="/contact" element={ <Contact/>}></Route>
                <Route exact path="/student" element={<RequireAuth> <Student/></RequireAuth>}></Route>
                <Route exact path= "/student/:id" element={<Details/>}></Route>
                <Route exact path="/login" element={ <Login/>}></Route>
               </Routes>
      
       </AuthProvider>
      
    )
}
export default Routing;