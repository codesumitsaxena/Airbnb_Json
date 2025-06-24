import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function WhoModel() {
  const [modalShow, setModalShow] = useState(false);
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [Infants, setInfants] = useState(0);
  const [Pet, Setpets] = useState(0);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [showGuestData , setShowGuestData] = useState("")



  const handleGuestData = (showGuestData)=>{

  }
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
      <div className="GuestText mt-2" onClick={() =>setModalShow(true)}>
        <h6 className='miniNavHeading mb-0'>Who</h6>
<input
  className="miniNavPara WhoguestInput mb-0"
  value={
    adult + children + Infants + Pet > 0
      ? `${adult + children} guest${adult + children > 1 ? 's' : ''}${Infants > 0 ? `, ${Infants} infant${Infants > 1 ? 's' : ''}` : ''}${Pet > 0 ? `, ${Pet} pet${Pet > 1 ? 's' : ''}` : ''}`
      : 'Add Guest'
  }
  readOnly
/>
      </div>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="sm"
        centered
        backdrop={false}         
  keyboard={true}
  animation={true}
        dialogClassName="whoModalwidth" 
        style={{top:"25px", left:"180px"}}>
        <Modal.Body style={{minWidth:"400px", height:"auto"}} >
        <div className="Container d-flex flex-column rounded-4  gap-4 bg-white p-4 bg-dark ">

          {/* AdultType */}
          <div className="container d-flex whoGuestModel align-items-center justify-content-between " >
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
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default WhoModel;
