import React from 'react';
import HomeIcon from '../assets/Home.png';
import { Link } from 'react-router-dom';


function Menu() {
  return (
    <div className="container bg-white p-3" style={{ maxWidth: "300px", maxHeight: "100%", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" ,position: 'absolute', top: '100px', right: '15px', zIndex: 1000  }}>
      <div className="mb-3 d-flex align-items-center gap-2">
        <i className="bi bi-question-circle fs-4 text-dark"></i>
        <span className="fw-medium">Help Center</span>
      </div>

      <hr className="my-2" />

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div style={{ maxWidth: '80%' }}>
          <h6 className="mb-1 fw-bold">Become a host</h6>
          <p className="mb-0 small text-muted">It’s easy to host and earn extra income</p>
        </div>
        <img
          src={HomeIcon}
          alt="Home Icon"
          className="img-fluid"
          style={{ height: "60px", width: "auto", objectFit: "contain" }}
        />
      </div>

      <hr className="my-2" />

      <div className="mb-3">
        <Link to='/payment' className="mb-1 fw-medium text-dark" style={{ cursor: "pointer" }}>Refer a host</Link>
        <p className="mb-0 fw-medium text-dark" style={{ cursor: "pointer" }}>Find a co-host</p>
      </div>

      <hr className="my-2" />

      <div>
        <Link to='/login' className=" text-dark fw-medium text-deccoration-none" style={{ cursor: "pointer" }}>Log in or Sign up</Link>
      </div>
    </div>
  );
}

export default Menu;
