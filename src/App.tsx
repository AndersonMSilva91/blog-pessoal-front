import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/estaticos/navbar/Navbar';
import About from './paginas/about/About';
import Home from './paginas/home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
