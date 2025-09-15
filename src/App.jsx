import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Products from './components/Products'
import About from './components/About'
import Footer from './components/Footer'


 function App() {
  return (
    <div>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <Products></Products>
      <About></About>
      <Footer></Footer>
    </div>
  )
}

export default App
