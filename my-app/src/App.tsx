import './App.css';
import React from 'react';

import Login from './components/Login'
import Home from './components/Home'
import Nav from './components/Nav'
import Confirmation_Login from './components/Confirmation_Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Nav' element={<Nav />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/confirmation_login' element={<Confirmation_Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
