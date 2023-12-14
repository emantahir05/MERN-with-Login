import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
// pages 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service";
import Error from "./pages/Error";
// Components 
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
