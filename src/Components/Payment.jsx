import React from 'react';
import { useSelector } from 'react-redux';
import CardMoreNav from './CardMoreNav';
import leftArrow from '../assets/leftArrow.svg';
import Diamond from '../assets/Diamond.svg';
import Payment1 from '../assets/PaymemtIcon_1.svg';
import Payment2 from '../assets/PaymemtIcon_2.svg';
import Payment3 from '../assets/PaymemtIcon_3.svg';
import Payment4 from '../assets/PaymemtIcon_4.svg';
import Payment5 from '../assets/PaymemtIcon_5.svg';

function Payment() {
  const startDate = useSelector((state) => state.dateRange.startDate);
const endDate = useSelector((state) => state.dateRange.endDate);


const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short', // Jul, Aug
  });
};

const formattedDateRange = `${formatDate(startDate)} – ${formatDate(endDate)}`;

  return (
    <div className='container-fluid'>
      <CardMoreNav />
      <div className="container py-4">
        <div className="d-flex align-items-center gap-3 mb-4">
          <img src={leftArrow} alt="Back" style={{ height: '30px', cursor: "pointer" }} />
          <h2 className='mb-0'>Confirm and pay</h2>
        </div>

        <div className="row g-4">
          {/* Left Section */}
          <div className="col-lg-6">
            <div className="border rounded p-4 d-flex justify-content-between align-items-center mb-4">
              <div>
                <h5 className='mb-1'>This is a rare find.</h5>
                <p className='mb-0 text-muted'>Vansh's place is usually booked.</p>
              </div>
              <img src={Diamond} alt="Diamond" style={{ height: '40px' }} />
            </div>

            <h4 className='px-3'>Your Trip</h4>

            <div className="d-flex justify-content-between px-3 align-items-center py-2">
              <div>
                <h6 className='mb-1'>Dates</h6>
                <p className='mb-0 text-muted'>{formattedDateRange}</p>
              </div>
              <a href="#" className='fw-bold text-dark'>Edit</a>
            </div>

            <div className="d-flex justify-content-between px-3 align-items-center py-2">
              <div>
                <h6 className='mb-1'>Guests</h6>
                <p className='mb-0 text-muted'>4 guests, 1 infant, 1 pet</p>
                <a href="#" className='text-dark fw-semibold' style={{ fontSize: '14px' }}>Bringing a service animal?</a>
              </div>
              <a href="#" className='fw-bold text-dark'>Edit</a>
            </div>

            <hr />

            <div className="PaymentIcon px-3 py-2 d-flex justify-content-between align-items-center">
              <h5>Pay With</h5>
              <div className="PaymentMethodIcon d-flex gap-2">
                <img src={Payment2} alt="Payment2" style={{ height: "10px" }} />
                <img src={Payment3} alt="Payment3" style={{ height: "10px" }} />
                <img src={Payment1} alt="Payment1" style={{ height: "10px" }} />
                <img src={Payment4} alt="Payment4" style={{ height: "10px" }} />
                <img src={Payment5} alt="Payment5" style={{ height: "10px" }} />
              </div>
            </div>

            <div className="PhoneNumbe px-3 py-2 d-flex justify-content-between align-items-center">
              <div className="PhoneNumberText">
                <h5 className='mb-0'>Phone number</h5>
                <p>Add and confirm your phone number to get trip updates.</p>
              </div>
              <a href="#" className='text-decoration-none border text-dark rounded px-2 py-1'>Add</a>
            </div>
            <hr />

            <div className="CancelPolicy px-3 py-2">
              <h4>Cancellation policy</h4>
              <p><strong>Free cancellation before 30 Jun.</strong> Cancel before check-in on 1 Jul for a partial refund.</p>
            </div>
            <div className="groupRules px-3 py-2">
          <h4>Ground rules</h4>
          <p>We ask every guest to remember a few simple things about what makes a great guest.</p>
          <ul>
            <li>Follow the house rules</li>
            <li>Treat your Host’s home like your own</li>
          </ul>

          <button className='px-5 py-2 border rounded PaymentConfirmBtn ' >Confirm and Pay</button>
        </div>
        <hr />
          </div>

          {/* Right Section */}
          <div className="col-lg-6">
            <div className="border rounded shadow-sm p-4">
              <div className="d-flex gap-3 align-items-center mb-3">
                <img
                  src="https://dummyimage.com/100x100/000/fff"
                  alt="Home"
                  className="rounded"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <div>
                  <h6 className='mb-1'>GhrName</h6>
                  <p className='mb-1 text-muted'>Entire Apartment</p>
                  <p className='mb-0'>★ 4.8 <span className="text-muted">(210 reviews)</span></p>
                </div>
              </div>
              <hr />

              <h5 className="mb-3">Your Total</h5>
              <div className="d-flex justify-content-between">
                <p>₹3,182.15 x 21 nights</p>
                <p>₹66,825.15</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Taxes</p>
                <p>₹8,019.02</p>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-semibold">
                <p>Total (INR)</p>
                <p>₹74,844.17</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
          <div className="footer-bottom d-flex justify-content-between align-items-center">
               <div className="footer-left d-flex gap-3 align-items-center ">
                   <a href="" className='text-decoration-none text-dark'>© 2025 Airbnb, Inc.</a>
                    <a href="" className='text-decoration-none text-dark'>Privacy</a>
                     <a href="" className='text-decoration-none text-dark'>Terms</a>
                    <a href="" className='text-decoration-none text-dark'>Sitemap</a>
                    <a href="" className='text-decoration-none text-dark'>Comapny Detail</a>
               </div>
               <div className="footer-right d-flex me-3 align-items-center">
                    <span className='me-2'><i className="bi bi-globe2"></i> English</span>
                    <span className='me-3'><i className="bi bi-currency-rupee"></i> INR</span>
                    <div className="footer-icon d-flex gap-3">
                    <i className="bi bi-facebook fs-5"></i>
                    <i className="bi bi-instagram fs-5"></i>
                    <i className="bi bi-twitter fs-5"></i>
                    </div>
               </div>
          </div>
         </div>
    </div>
  );
}

export default Payment;
