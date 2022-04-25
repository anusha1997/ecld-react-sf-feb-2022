import React from 'react';
import Navbar from './components/Navbar';
import Routing from './Router/Router';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Routing/>
      <Footer/>
    </div>
  );
}

export default App;
