import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import ButtonBases from './enter';
import Contact from './components/Contact';
import Products from './components/Products';
import Shoes from './components/Shoes.js';
import Perfumes from './components/Perfumes.js';
function App() {
  
return (
  <div className ="background" >
      <Routes>
       <Route path= "/" element ={<ButtonBases/>}></Route>
      <Route  path='Home' element ={<Home/>} ></Route>
      <Route path='About' element ={<About/>}></Route>
      <Route path='Contact' element ={<Contact/>}></Route>
      <Route path='Products' element ={<Products/>}></Route>
      <Route path="Products/Shoes" element ={<Shoes/>}></Route>
      <Route path="Products/Perfumes" element = {<Perfumes/>}></Route>
      </Routes>
    
      </div>
  )
};

export default App;
