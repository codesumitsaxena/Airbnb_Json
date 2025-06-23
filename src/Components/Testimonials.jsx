import React, { useEffect, useState } from "react";
import AutomateBnb from "../assets/automateBnb1.jpeg";




function Testimonials({id, showData}) {

  return (
    <>
      <div className="container my-5">
        {/* Testimonials Area */}
        <div className="row">
          <div className="AllReviewArea d-flex gap-3 align-items-center">
            <div className="allreviewBTn">
              <button className="px-3 py-2 fw-bold bg-light border-0 rounded-3">
                Show All the Review
              </button>
            </div>
            <a href="#" className="fw-bold text-dark">
              Learn how review work
            </a>
          </div>
        </div>
        {/* Map Area */}
        <div className="row mt-4">
          <h5>Where you’ll be</h5>
          <p>New Delhi, Delhi, India</p>
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              marginTop: "2rem",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.03719650215!2d77.04417035944542!3d28.527958825118784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce392a0d20e31%3A0xb421afc9ed9c9bbe!2sBoBo%20Stays!5e0!3m2!1sen!2sin!4v1750140267051!5m2!1sen!2sin"
              className="mb-5"
              width="100%"
              height="450"
              style={{ borderRadius: "16px", padding: "0px", margin: "0px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
            <hr />
          </div>
        </div>
        
        {/* Meet Host */}
        <div className="container">
  <h4 className="fw-bold">Meet your host</h4>
  <div className="row mt-4 d-flex">
    {/* Left */}
    <div
      className="col-lg-5 d-flex gap-3 p-5"
      style={{
        boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
        borderRadius: "20px",
      }}
    >
      <div className="col-lg-8 d-flex justify-content-center align-items-center flex-column">
        <img
          src={showData.hostImg}
          alt="Host"
          className="img-fluid"
          style={{ borderRadius: "50%", width: "130px" , height:'130px' , 
          objectPosition: "center" }}
        />
        <h2 className="fw-bold mt-1">
          <a
            href="#"
            className="text-decoration-none text-dark fw-bold fs-2 "
          >
            {showData.HostName}
          </a>
        </h2>
        <p
          className="fw-bold"
          style={{ lineHeight: "0.1", fontSize: "13px" }}
        >
          <i className="bi bi-bookmark-star "></i> SuperHost
        </p>
      </div>
      <div className="col-lg-4">
        <div className="BigReviewData">
          <h4 className="fw-bold">{showData.reviewCount}</h4>
          <p
            className="fw-bold"
            style={{ lineHeight: "0.1", fontSize: "13px" }}
          >
            Review
          </p>
          <hr />
        </div>
        <div className="BigReviewData">
          <h4 className="fw-bold">{showData.rating}★</h4>
          <p
            className="fw-bold"
            style={{ lineHeight: "0.1", fontSize: "13px" }}
          >
            Rating
          </p>
          <hr />
        </div>
        <div className="BigReviewData">
          <h4 className="fw-bold">2</h4> {/* Replace with dynamic year if available */}
          <p
            className="fw-bold"
            style={{ lineHeight: "0.1", fontSize: "13px" }}
          >
            YearHosting
          </p>
        </div>
      </div>
    </div>
    {/* Right */}
    <div className="col-lg-7 px-5 d-flex flex-column justify-content-between">
      <div className="ReviewRightText">
        <h5 className="fw-bold">{showData.HostName} is a Superhost</h5>
        <p>
          Superhosts are experienced, highly rated hosts who are
          committed to providing great stays for guests.
        </p>
      </div>
      <div className="ReviewRightText">
        <h5 className="fw-bold">Host details</h5>
        <p>
          Response rate: 100%
          <br />
          Responds within an hour
        </p>
      </div>
      <button
        className="px-3 py-2 bg-light border-0 fs-5 fw-semibold w-auto align-self-start"
        style={{ borderRadius: "15px" }}
      >
        Message Host
      </button>
    </div>
  </div>
</div>

        <hr className="mt-5" />

        <div className="containerMiniooter">
          <div className="row">
            <h4 className="fw-bold mt-3">Things to know</h4>
            <div className="col-lg-4 mt-3">
              <h5 className="fw-bold" style={{ fontSize: "19px" }}>
                {" "}
                House rules
              </h5>
              <p>Check-in after 1:00 pm</p>
              <p>3 guests maximum</p>
              <p>Pets allowed</p>
              <a
                href=""
                className="text-dark fw-bold "
                style={{ fontSize: "18px" }}
              >
                See More<i className="bi ms-2 bi-arrow-right-short"></i>
              </a>
            </div>
            <div className="col-lg-4 mt-3">
              <h5 className="fw-bold" style={{ fontSize: "19px" }}>
                Safety & property
              </h5>
              <p>Carbon monoxide alarm not reported</p>
              <p>Smoke alarm not reported</p>
              <p>Exterior security cameras on property</p>
              <a
                href=""
                className="text-dark fw-bold "
                style={{ fontSize: "18px" }}
              >
                See More<i className="bi ms-2 bi-arrow-right-short"></i>
              </a>
            </div>
            <div className="col-lg-4 mt-3">
              <h5 className="fw-bold" style={{ fontSize: "19px" }}>
                Cancellation policy
              </h5>
              <p>
                Add your trip dates to get the cancellation details for this
                stay.
              </p>

              <a
                href=""
                className="text-dark fw-bold "
                style={{ fontSize: "18px" }}
              >
                Add Dates<i className="bi ms-2 bi-arrow-right-short"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid border bg-light mx-auto ">
        <div className="container">
          <h4 className="my-4 pt-4 fw-bold">
            Explore other options in and around New Delhi
          </h4>
          <div className="row ">
            <div className="col-lg-4 d-flex flex-column gap-3 mt-4">
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    Gurugram
                  </a>
                </h6>
                <p style={{ lineHeight: "0.3" }}>
                  <a href="" className="text-decoration-none text-dark">
                    Holidays Rentals
                  </a>
                </p>
              </div>
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    Noida
                  </a>
                </h6>
                <p style={{ lineHeight: "0.3" }}>
                  <a href="" className="text-decoration-none text-dark">
                    Holidays Rentals
                  </a>
                </p>
              </div>
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    Vrindavan
                  </a>
                </h6>
                <p style={{ lineHeight: "0.3" }}>
                  <a href="" className="text-decoration-none text-dark">
                    Holidays Rentals
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex flex-column gap-3 mt-4">
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    Gautam Buddh Nagar
                  </a>
                </h6>
                <p style={{ lineHeight: "0.3" }}>
                  <a href="" className="text-decoration-none text-dark">
                    Holidays Rentals
                  </a>
                </p>
              </div>
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    Gurugram
                  </a>
                </h6>
                <p style={{ lineHeight: "0.3" }}>
                  <a href="" className="text-decoration-none text-dark">
                    South East Delhi
                  </a>
                </p>
              </div>
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    Greator Noida
                  </a>
                </h6>
                <p style={{ lineHeight: "0.3" }}>
                  <a href="" className="text-decoration-none text-dark">
                    Holidays Rentals
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex flex-column gap-3 mt-4">
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    FaridaBad
                  </a>
                </h6>
                <p style={{ lineHeight: "0.3" }}>
                  <a href="" className="text-decoration-none text-dark">
                    Holidays Rentals
                  </a>
                </p>
              </div>
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    Ghaziabad
                  </a>
                </h6>
                <p style={{ lineHeight: "0.3" }}>
                  <a href="" className="text-decoration-none text-dark">
                    Holidays Rentals
                  </a>
                </p>
              </div>
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    South West Delhi
                  </a>
                </h6>
                <p style={{ lineHeight: "0.3" }}>
                  <a href="" className="text-decoration-none text-dark">
                    Holidays Rentals
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h4 className="my-4 pt-4 fw-bold">Other types of stays on Airbnb</h4>
          <div className="row ">
            <div className="col-lg-4 d-flex flex-column gap-3 mt-4">
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    West Delhi holiday rentals
                  </a>
                </h6>
              </div>
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    Fitness-friendly holiday rentals in West Delhi
                  </a>
                </h6>
              </div>
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    Kid-friendly holiday rentals in Delhi Region
                  </a>
                </h6>
              </div>
            </div>
            <div className="col-lg-4 d-flex flex-column gap-3 mt-4">
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    Kid-friendly holiday rentals in West Delhi
                  </a>
                </h6>
              </div>
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    Serviced apartment holiday rentals in West Delhi
                  </a>
                </h6>
              </div>
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    Pet-friendly holiday rentals in Delhi Region
                  </a>
                </h6>
              </div>
            </div>
            <div className="col-lg-4 d-flex flex-column gap-3 mt-4">
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    West Delhi holiday rentals
                  </a>
                </h6>
              </div>
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    Pet-friendly holiday rentals in West Delhi
                  </a>
                </h6>
              </div>
              <div className="miniFooter-data">
                <h6 className="fw-bold">
                  <a href="#" className="text-decoration-none text-dark">
                    Fitness-friendly holiday rentals in West Delhi
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 p-3">
          <div className="col-lg-4">
            <div className="item-area d-flex flex-column gap-2">
              <h6>Support</h6>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor ">
                  Help Center
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none  itemColor">
                  AirCover
                </a>
              </li>{" "}
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor">
                  Anti-discrimination
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor ">
                  Disability support
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor">
                  Cancellation options
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor ">
                  Report neighbourhood concern
                </a>
              </li>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item-area d-flex flex-column gap-2">
              <h6>Hosting</h6>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor ">
                  Airbnb your home
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor ">
                  AirCover for Hosts
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor ">
                  Hosting resources
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor ">
                  Community forum
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor ">
                  Hosting responsibly
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor ">
                  Join a free Hosting class
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor ">
                  Find a co‑host
                </a>
              </li>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item-area d-flex flex-column gap-2">
              <h6>Support</h6>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor ">
                  Airbnb
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor ">
                  2025 Summer Release
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor ">
                  Newsroom
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor ">
                  New features
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor ">
                  Careers
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="text-decoration-none itemColor ">
                  Investors
                </a>
              </li>
            </div>
          </div>
        </div>
        <hr />
        <div className="row w-100 my-2">
          <div className="footer-bottom d-flex justify-content-between align-items-center">
            <div className="footer-left d-flex gap-3 align-items-center ">
              <a href="" className="text-decoration-none text-dark">
                © 2025 Airbnb, Inc.
              </a>
              <a href="" className="text-decoration-none text-dark">
                Privacy
              </a>
              <a href="" className="text-decoration-none text-dark">
                Terms
              </a>
              <a href="" className="text-decoration-none text-dark">
                Sitemap
              </a>
              <a href="" className="text-decoration-none text-dark">
                Comapny Detail
              </a>
            </div>
            <div className="footer-right d-flex gap-2 align-items-center">
              <span>
                <i className="bi bi-globe2"></i> English
              </span>
              <span>
                <i className="bi bi-currency-rupee"></i> INR
              </span>
              <div className="footer-icon d-flex gap-3">
                <i className="bi bi-facebook fs-5"></i>
                <i className="bi bi-instagram fs-5"></i>
                <i className="bi bi-twitter fs-5"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Testimonials;
