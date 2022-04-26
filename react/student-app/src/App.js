import React from 'react';
import Routing from './Router/Router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider}  from './Router/auth';

function App() {
  return (
    <AuthProvider>
    <Navbar/> 
      <Routing/>
      <Footer/>
      </AuthProvider>
     
    );
}

export default App;
