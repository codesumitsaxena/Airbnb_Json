import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BnbLogo from '../assets/Airbnb-Logo.wine.png';
import HomeIcon from '../assets/Home.png';
import BaloonIcon from '../assets/baloon.avif';
import BucketIcon from '../assets/BucketImg.png';
import { Link } from 'react-router-dom';
import Menu from './Menu';

function NavScrollExample() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="p-2 NavbarContainer position-relative">
        <Container fluid>
          <div className="w-100 d-flex justify-content-between align-items-center">
            <Navbar.Brand as={Link} to="/cardmore">
              <img src={BnbLogo} alt="Airbnb Logo" className="img-fluid logo" />
            </Navbar.Brand>

            <Nav
              className="d-flex justify-content-center align-items-center gap-4"
              style={{ maxWidth: '420px' }}
            >
              <Nav.Link href="#home" className="d-flex align-items-center">
                <img src={HomeIcon} alt="" className="img-fluid navIcon" />
                <p className="fw-semibold mb-0">Homes</p>
              </Nav.Link>
              <Nav.Link href="#exp" className="d-flex align-items-center">
                <img src={BaloonIcon} alt="" className="img-fluid navIcon" />
                <p className="fw-semibold mb-0">Experiences</p>
              </Nav.Link>
              <Nav.Link href="#services" className="d-flex align-items-center">
                <img src={BucketIcon} alt="" className="img-fluid navIcon" />
                <p className="fw-semibold mb-0">Services</p>
              </Nav.Link>
            </Nav>

            <div className="d-flex align-items-center gap-3">
              <span className="fw-semibold">Become a Host</span>
              <i className="bi icon-box bi-globe2 fs-5"></i>
              <i
                className="bi icon-box MenuBTn bi-list fs-4"
                onClick={() => setShowMenu(!showMenu)}
                role="button"
              ></i>
            </div>
          </div>
        </Container>
      </Navbar>

      {/* ✅ Toggle Menu on click */}
      {showMenu && <Menu />}
    </>
  );
}

export default NavScrollExample;
