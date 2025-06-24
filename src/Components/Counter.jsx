import React from "react";
import { useState } from "react";
import DateModal from './DateModal'

function Counter({ rate, selectedDates }) {
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [Infants, setInfants] = useState(0);
  const [Pet, Setpets] = useState(0);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  const ShowGuestChart = () => {
    setShowGuestDropdown(!showGuestDropdown);
  };

  const adultCounter = () => {
    if (adult < 3) {
      setAdult(adult + 1);
    }
  };

  const adultMinusCounter = () => {
    if (adult > 0) {
      setAdult(adult - 1);
    }
  };

  const ChildrenPlus = () => {
    if (children < 1) setChildren(children + 1);
  };

  const ChildrenMinus = () => {
    if (children > 0) setChildren(children - 1);
  };

  const InfantsPlus = () => {
    if (Infants < 5) setInfants(Infants + 1);
  };
  const InfantsMinus = () => {
    if (Infants > 0) {
      setInfants(Infants - 1);
    }
  };

  const PetPlus = () => {
    if (Pet < 1) {
      Setpets(Pet + 1);
    }
  };

  const PetMinus = () => {
    if (Pet > 0) {
      Setpets(Pet - 1);
    }
  };

  return (
    <>
      <div className="AddToCart p-4 d-flex flex-column gap-2 position-relative">
        <h4 className="fw-bold" style={{ fontSize: "1.4rem" }}>
          {rate || "Add dates for prices"}
        </h4>
        <div
          className="DateArea d-flex border-bottom align-items-center"
          style={{ height: "55%" }}
        >
          <DateModal/>
        </div>
        <div className="AddGuest d-flex mt-2 justify-content-between px-3 pt-1">
          <div className="DropDownArea">
            <h6 className="fw-bold">Guest</h6>
            <h6 className="fw-bold">
              {`${adult + children} guests` +
                (Infants > 0 ? `, ${Infants} infants` : "") +
                (Pet > 0 ? `, ${Pet} pets` : "")}
            </h6>
          </div>
          <div className="DropDownArrow">
            <i className="bi bi-chevron-down" onClick={ShowGuestChart}></i>
          </div>
        </div>

        <button className="px-3 py-2 fs-5 bg-danger rounded-pill  CartBTn">
          Check availability
        </button>
      </div>

      {/* rest of the guest section remains the same */}

      {/* Adult */}
      {showGuestDropdown && (
        <div
          className="Container d-flex flex-column gap-4 bg-white p-4 rounded shadow-sm position-absolute "
          style={{ top: "72%", minWidth: "315px", marginLeft: "64px" }}
        >
          {/* AdultType */}
          <div className="container d-flex align-items-center justify-content-between ">
            <div className="GuestType">
              <h5 className="m-0 fw-semibold">Adult</h5>
              <p className="text-muted m-0" style={{ fontSize: "14px" }}>
                Age 13+
              </p>
            </div>

            <div className="CounterArea d-flex align-items-center gap-3">
              <i
                className={`bi bi-dash-circle fs-3 ${
                  adult === 0 ? "text-secondary" : "text-dark"
                }`}
                role="button"
                onClick={adultMinusCounter}
              />
              <p className="fs-5 m-0">{adult}</p>
              <i
                className="bi bi-plus-circle fs-3 text-dark"
                role="button"
                onClick={adultCounter}
              ></i>
            </div>
          </div>
          {/* Children */}
          <div className="container d-flex align-items-center justify-content-between ">
            <div className="GuestType">
              <h5 className="m-0 fw-semibold">Children</h5>
              <p className="text-muted m-0" style={{ fontSize: "14px" }}>
                2-12
              </p>
            </div>

            <div className="CounterArea d-flex align-items-center gap-3">
              <i
                className={`bi bi-dash-circle fs-3 ${
                  children === 0 ? "text-secondary" : "text-dark"
                }`}
                role="button"
                onClick={ChildrenMinus}
              />{" "}
              <p className="fs-5 m-0">{children}</p>
              <i
                className="bi bi-plus-circle fs-3 text-dark"
                role="button"
                onClick={ChildrenPlus}
              ></i>
            </div>
          </div>
          {/* Infants */}
          <div className="container d-flex align-items-center justify-content-between ">
            <div className="GuestType">
              <h5 className="m-0 fw-semibold">Infants</h5>
              <p className="text-muted m-0" style={{ fontSize: "14px" }}>
                Under 2
              </p>
            </div>

            <div className="CounterArea d-flex align-items-center gap-3">
              <i
                className={`bi bi-dash-circle fs-3 ${
                  Infants === 0 ? "text-secondary" : "text-dark"
                }`}
                role="button"
                onClick={InfantsMinus}
              />{" "}
              <p className="fs-5 m-0">{Infants}</p>
              <i
                className="bi bi-plus-circle fs-3 text-dark"
                role="button"
                onClick={InfantsPlus}
              ></i>
            </div>
          </div>
          {/* Pets */}
          <div className="container d-flex align-items-center justify-content-between ">
            <div className="GuestType">
              <h5 className="m-0 fw-semibold">Pets</h5>
              <h6 className="fw-bold text-dark">
                <a
                  href="#"
                  style={{ fontSize: "14px" }}
                  className='text-dark fw-bold text-muted m-0"'
                >
                  Bringing a service animal?
                </a>
              </h6>
            </div>

            <div className="CounterArea d-flex align-items-center gap-3">
              <i
                className={`bi bi-dash-circle fs-3 ${
                  Pet === 0 ? "text-secondary" : "text-dark"
                }`}
                role="button"
                onClick={PetMinus}
              />{" "}
              <p className="fs-5 m-0">{Pet}</p>
              <i
                className="bi bi-plus-circle fs-3 text-dark"
                role="button"
                onClick={PetPlus}
              ></i>
            </div>
          </div>
          <p className="mt-0" style={{ fontSize: "13px" }}>
            This place has a maximum of 3 guests, not including infants. If
            you're bringing more than 2 pets, please let your Host know.
          </p>
          <a
            href="#"
            className="text-dark fw-bold fs-5 d-flex justify-content-end"
            onClick={() => setShowGuestDropdown(false)}
          >
            Close
          </a>
        </div>
      )}
    </>
  );
}

export default Counter;
