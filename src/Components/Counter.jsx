import React, { useState } from "react";
import DateModal from "./DateModal";
import { useDispatch, useSelector } from "react-redux";
import { setGuestCount } from "../features/Guest/guestSlice"; 

function Counter({ rate, selectedDates }) {
  const dispatch = useDispatch();
  const { adult, children, infants, pets } = useSelector((state) => state.guest);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const start = new Date(selectedDates.startDate);
  const end = new Date(selectedDates.endDate);
  
  const nights = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));
  const total = rate * nights;

  const ShowGuestChart = () => {
    setShowGuestDropdown(!showGuestDropdown);
  };

  const adultCounter = () => {
    if (adult < 3) dispatch(setGuestCount({ type: "adult", value: adult + 1 }));
  };

  const adultMinusCounter = () => {
    if (adult > 0) dispatch(setGuestCount({ type: "adult", value: adult - 1 }));
  };

  const ChildrenPlus = () => {
    if (children < 1) dispatch(setGuestCount({ type: "children", value: children + 1 }));
  };

  const ChildrenMinus = () => {
    if (children > 0) dispatch(setGuestCount({ type: "children", value: children - 1 }));
  };

  const InfantsPlus = () => {
    if (infants < 5) dispatch(setGuestCount({ type: "infants", value: infants + 1 }));
  };

  const InfantsMinus = () => {
    if (infants > 0) dispatch(setGuestCount({ type: "infants", value: infants - 1 }));
  };

  const PetPlus = () => {
    if (pets < 1) dispatch(setGuestCount({ type: "pets", value: pets + 1 }));
  };

  const PetMinus = () => {
    if (pets > 0) dispatch(setGuestCount({ type: "pets", value: pets - 1 }));
  };

  return (
    <>
      <div className="AddToCart p-4 d-flex flex-column  position-relative">
        <h4 className="fw-bold my-3" style={{ fontSize: "1.4rem" }}>
          {rate && selectedDates?.startDate && selectedDates?.endDate
            ? `₹${total.toLocaleString("en-IN")} for ${nights} night${nights > 1 ? "s" : ""}`
            : "Add dates for prices"}
        </h4>

        <div className="DateArea d-flex border rounded-top align-items-center" style={{ height: "85%" }}>
          <DateModal />
        </div>

        <div className="AddGuest d-flex border-start border-end border-bottom rounded-bottom justify-content-between px-3 pt-2">
          <div className="DropDownArea">
            <h6 className="fw-bold mb-0">Guest</h6>
            <input
              className="miniNavPara WhoguestInput mb-0"
              value={
                adult + children + infants + pets > 0
                  ? `${adult + children} guest${adult + children > 1 ? "s" : ""}${infants > 0 ? `, ${infants} infant${infants > 1 ? "s" : ""}` : ""}${pets > 0 ? `, ${pets} pet${pets > 1 ? "s" : ""}` : ""}`
                  : "Add Guest"
              }
              readOnly
            />
          </div>
          <div className="DropDownArrow">
            <i className="bi bi-chevron-down" onClick={ShowGuestChart}></i>
          </div>
        </div>

        <button className="px-3 mt-4 py-2 fs-5 bg-danger rounded-pill CartBTn">
          Check availability
        </button>
      </div>

      {showGuestDropdown && (
        <div className="Container d-flex flex-column gap-4 bg-white p-4 rounded shadow-sm position-absolute"
          style={{ top: "72%", minWidth: "315px", marginLeft: "64px" }}>
          {/* Adult */}
          <div className="container d-flex align-items-center justify-content-between">
            <div className="GuestType">
              <h5 className="m-0 fw-semibold">Adult</h5>
              <p className="text-muted m-0" style={{ fontSize: "14px" }}>Age 13+</p>
            </div>
            <div className="CounterArea d-flex align-items-center gap-3">
              <i className={`bi bi-dash-circle fs-3 ${adult === 0 ? "text-secondary" : "text-dark"}`} role="button" onClick={adultMinusCounter} />
              <p className="fs-5 m-0">{adult}</p>
              <i className="bi bi-plus-circle fs-3 text-dark" role="button" onClick={adultCounter}></i>
            </div>
          </div>

          {/* Children */}
          <div className="container d-flex align-items-center justify-content-between">
            <div className="GuestType">
              <h5 className="m-0 fw-semibold">Children</h5>
              <p className="text-muted m-0" style={{ fontSize: "14px" }}>Ages 2–12</p>
            </div>
            <div className="CounterArea d-flex align-items-center gap-3">
              <i className={`bi bi-dash-circle fs-3 ${children === 0 ? "text-secondary" : "text-dark"}`} role="button" onClick={ChildrenMinus} />
              <p className="fs-5 m-0">{children}</p>
              <i className="bi bi-plus-circle fs-3 text-dark" role="button" onClick={ChildrenPlus}></i>
            </div>
          </div>

          {/* Infants */}
          <div className="container d-flex align-items-center justify-content-between">
            <div className="GuestType">
              <h5 className="m-0 fw-semibold">Infants</h5>
              <p className="text-muted m-0" style={{ fontSize: "14px" }}>Under 2</p>
            </div>
            <div className="CounterArea d-flex align-items-center gap-3">
              <i className={`bi bi-dash-circle fs-3 ${infants === 0 ? "text-secondary" : "text-dark"}`} role="button" onClick={InfantsMinus} />
              <p className="fs-5 m-0">{infants}</p>
              <i className="bi bi-plus-circle fs-3 text-dark" role="button" onClick={InfantsPlus}></i>
            </div>
          </div>

          {/* Pets */}
          <div className="container d-flex align-items-center justify-content-between">
            <div className="GuestType">
              <h5 className="m-0 fw-semibold">Pets</h5>
              <h6 className="fw-bold text-dark">
                <a href="#" style={{ fontSize: "14px" }} className="text-dark text-muted m-0">Bringing a service animal?</a>
              </h6>
            </div>
            <div className="CounterArea d-flex align-items-center gap-3">
              <i className={`bi bi-dash-circle fs-3 ${pets === 0 ? "text-secondary" : "text-dark"}`} role="button" onClick={PetMinus} />
              <p className="fs-5 m-0">{pets}</p>
              <i className="bi bi-plus-circle fs-3 text-dark" role="button" onClick={PetPlus}></i>
            </div>
          </div>

          <p className="mt-0" style={{ fontSize: "13px" }}>
            This place has a maximum of 3 guests, not including infants. If you're bringing more than 2 pets, please let your Host know.
          </p>
          <a href="#" className="text-dark fw-bold fs-5 d-flex justify-content-end" onClick={() => setShowGuestDropdown(false)}>
            Close
          </a>
        </div>
      )}
    </>
  );
}

export default Counter;
