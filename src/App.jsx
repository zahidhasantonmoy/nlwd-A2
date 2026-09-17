import { useState } from 'react'
import './index.css'
import Header from './Component/Header'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import Footer from './Component/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

 const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
    <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Movies" element={<Movies search={search} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App
