import React, { useState } from 'react';
import NavScrollExample from './NavbarApp';
import Footer from './Footer';
import 'react-phone-input-2/lib/bootstrap.css';
import PhoneInput from 'react-phone-input-2';

function Login() {
  const [phone, setPhone] = useState('');

  return (
    <div className='container-fluid'>
      <NavScrollExample />

      <div className="d-flex justify-content-center gap-5 align-items-center vh-100">
        <div className="p-5 rounded border-black shadow" style={{ width: '650px', border: '1px solid #ccc' }}>
          <h4 className="text-center fw-bold mb-4">Log in or sign up</h4>
          <hr />
          <h4 className="my-4">Welcome to Airbnb</h4>

          <PhoneInput
  country={'in'}
  value={phone}
  onChange={setPhone}
  inputclassName="LoginInput w-100"
  inputStyle={{
    height: '48px',
    width: '100%',
    fontSize: '16px'
  }}
  dropdownStyle={{ zIndex: 9999 }}
/>


          <small className="text-muted mt-2 d-block">
            We’ll call or text you to confirm your number. Standard message and data rates apply.
            <a href="#" className="ms-1">Privacy Policy</a>
          </small>

          <button className="btn btn-danger w-100 mt-3 fw-semibold">Continue</button>

          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="mx-2 text-muted">or</span>
            <hr className="flex-grow-1" />
          </div>

          <button className="btn btn-outline-dark w-100 mb-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" width="20" className="me-2" />
            Continue with Google
          </button>

          <button className="btn btn-outline-dark w-100">
            Continue with Email
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
