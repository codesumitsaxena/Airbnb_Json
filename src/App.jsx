import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/inter";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import NavbarApp from './Components/NavbarApp'
import MiniNav from './Components/MiniNav';

function App() {

  return (
    <>
     <NavbarApp/>
     <MiniNav/>
    </>
  )
}

export default App
