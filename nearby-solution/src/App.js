import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Login from './Login';
import Map from './Map';
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/map' element={<Map/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' exact element={<Home/>}/>
    </Routes>
    </Router>
   
  );
}

export default App;
