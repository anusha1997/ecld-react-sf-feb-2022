import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/contact';
import Student from './Student/Student'
import  Details  from './Student/showDetails';
import { Route, Routes } from 'react-router-dom';

const Routing = () => {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={ <Home/>}></Route>
                <Route exact path="/about" element={ <About/>}></Route>
                <Route exact path="/contact" element={ <Contact/>}></Route>
                <Route exact path="/student" element={ <Student/>}></Route>
                <Route exact path= "/student/:id" element={<Details/>}></Route>
            </Routes>
        </div>

    )
}
export default Routing;