import { useState } from 'react'
import './index.css'
import Header from './Component/Header'
import Home from './Pages/Home'
import Movies from './Pages/Movies'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Movies" element={<Movies/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
