import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/inter";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import NavbarApp from './Components/NavbarApp'
import MiniNav from './Components/MiniNav';
import PopularHomes from './Components/PopularHomes';
import Footer from './Components/Footer'
import CardMore from './Components/CardMore'
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import '@fontsource/nunito'; // Defaults to 400
import LoginPage from './Components/Login'


import { BrowserRouter , Routes, Route } from 'react-router-dom';
import MoreDataNoida from './Components/MoreDataNoida';

function App() {

  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/cardmore/:id" element={<CardMore />} />
        <Route path= "/login" element={<LoginPage/>}></Route>
        <Route path= "/MoreNoida" element={<MoreDataNoida/>}></Route>
        <Route path="/" element={
          <>
            <NavbarApp />
            <MiniNav />
            <PopularHomes />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
