import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className='App'>
    
        <Nav />
        
        <Routes>
       
        <Route path='/about' element={<About/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        </Routes>
      
    </div>
  );
}

export default App;
