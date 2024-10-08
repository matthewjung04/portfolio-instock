import { useState } from 'react'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Header from './components/Header/Header'

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  )
}

export default App
