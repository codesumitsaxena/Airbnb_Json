import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/inter";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import NavbarApp from './Components/NavbarApp'
import MiniNav from './Components/MiniNav';
import PopularHomes from './Components/PopularHomes';
import Footer from './Components/Footer'

function App() {

  return (
    <>
     <NavbarApp/>
     <MiniNav/>
     <PopularHomes/>
     <Footer/>
    </>
  )
}

export default App
