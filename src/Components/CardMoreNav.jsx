import React from 'react'
import BnbLogo from "../assets/Airbnb-Logo.wine.png";
import HomeIcon from "../assets/Home.png";

function CardMoreNav() {
  return (
    <div
    className="container-fluid"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    {/* Mini Nav Area */}
    <div className="container my-1">
        <div className="row d-flex align-items-center">
          <div className="col-lg-3 d-flex justify-content-start align-items-center">
            <img
              src={BnbLogo}
              alt="logo"
              className="img-fluid"
              style={{ height: "100px" }}
            />
          </div>
          <div className="col-lg-6 ">
            <div className="miniNavArea border rounded-pill d-flex justify-content-between align-items-center py-1 px-3">
              <div className="miniNavAreaHome pe-3 mt-2 border-end d-flex align-items-center">
                <img
                  src={HomeIcon}
                  alt="Home"
                  className="img-fluid NavHome mt-0"
                />
                <h6 className="mt-1">Anywhere</h6>
              </div>
              <div className="miniNavAreaWeek pe-3 mt-2 border-end d-flex align-items-center  ">
                <h6>AnyWeek</h6>
              </div>
              <div className="miniNavAreaSeach pe-3 mt-2 d-flex align-items-center">
                <h6>Add Guest</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="d-flex align-items-center gap-3">
              <span className="fw-semibold">Become a Host</span>
              <i className="bi icon-box bi-globe2 fs-5"></i>
              <i className="bi icon-box bi-list fs-4"   onClick={() => setShowMenu(!showMenu)}
                role="button"></i>
            </div>
          </div>
        </div>:::::::::
      </div>      <hr />
    </div>
  )
}

export default CardMoreNav
