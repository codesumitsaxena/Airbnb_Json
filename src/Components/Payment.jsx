import React from 'react';
import CardMoreNav from './CardMoreNav';
import leftArrow from '../assets/leftArrow.svg';
import Diamond from '../assets/Diamond.svg';
import Payment1 from '../assets/PaymemtIcon_1.svg'
import Payment2 from '../assets/PaymemtIcon_2.svg'
import Payment3 from '../assets/PaymemtIcon_3.svg'
import Payment4 from '../assets/PaymemtIcon_4.svg'
import Payment5 from '../assets/PaymemtIcon_5.svg'


function Payment() {
  return (
    <>
      <div className='container-fluid'>
        <CardMoreNav />

        <div className="container py-4">
          <div className="d-flex align-items-center gap-3 mb-4">
            <img src={leftArrow} alt="Back"  style={{ height: '30px' , cursor:"pointer" }} />
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

              <div className="d-flex justify-content-between px-3 align-items-center py-2 ">
                <div>
                  <h6 className='mb-1'>Dates</h6>
                  <p className='mb-0 text-muted'>23 Jul – 13 Aug</p>
                </div>
                <a href="#" className='fw-bold text-dark'>Edit</a>
              </div>

              <div className="d-flex  justify-content-between px-3 align-items-center py-2 ">
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
                <div className="PaymentMethodIcon d-flex">
                  <img src={Payment2} alt="Payment2" className='img-fluid' style={{height:"10px"}} />
                  <img src={Payment3} alt="Payment3" className='img-fluid' style={{height:"10px"}} />
                  <img src={Payment1} alt="Payment1" className='img-fluid' style={{height:"10px"}} />
                  <img src={Payment4} alt="Payment4" className='img-fluid' style={{height:"10px"}} />
                  <img src={Payment5} alt="Payment5" className='img-fluid' style={{height:"10px"}} />
                </div>
              </div>
            </div>

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
      </div>
    </>
  );
}

export default Payment;
