import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setGuestCount } from '../features/Guest/guestSlice';

function WhoModel() {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const { adult, children, infants, pets } = useSelector(state => state.guest);

  const adultCounter = () => {
    if (adult < 3) dispatch(setGuestCount({ type: 'adult', value: adult + 1 }));
  };

  const adultMinusCounter = () => {
    if (adult > 0) dispatch(setGuestCount({ type: 'adult', value: adult - 1 }));
  };

  const ChildrenPlus = () => {
    if (children < 1) dispatch(setGuestCount({ type: 'children', value: children + 1 }));
  };

  const ChildrenMinus = () => {
    if (children > 0) dispatch(setGuestCount({ type: 'children', value: children - 1 }));
  };

  const InfantsPlus = () => {
    if (infants < 5) dispatch(setGuestCount({ type: 'infants', value: infants + 1 }));
  };

  const InfantsMinus = () => {
    if (infants > 0) dispatch(setGuestCount({ type: 'infants', value: infants - 1 }));
  };

  const PetPlus = () => {
    if (pets < 1) dispatch(setGuestCount({ type: 'pets', value: pets + 1 }));
  };

  const PetMinus = () => {
    if (pets > 0) dispatch(setGuestCount({ type: 'pets', value: pets - 1 }));
  };

  return (
    <>
      <div className="GuestText mt-2" onClick={() => setModalShow(true)}>
        <h6 className="miniNavHeading mb-0">Who</h6>
        <input
          className="miniNavPara WhoguestInput mb-0"
          value={
            adult + children + infants + pets > 0
              ? `${adult + children} guest${adult + children > 1 ? 's' : ''}${
                  infants > 0 ? `, ${infants} infant${infants > 1 ? 's' : ''}` : ''
                }${pets > 0 ? `, ${pets} pet${pets > 1 ? 's' : ''}` : ''}`
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
        style={{ top: '25px', left: '180px' }}
      >
        <Modal.Body style={{ minWidth: '400px', height: 'auto' }}>
          <div className="Container d-flex flex-column rounded-4 gap-4 bg-white p-4 bg-dark">
            {/* Adults */}
            <div className="container d-flex whoGuestModel align-items-center justify-content-between">
              <div className="GuestType">
                <h5 className="m-0 fw-semibold">Adult</h5>
                <p className="text-muted m-0" style={{ fontSize: '14px' }}>
                  Age 13+
                </p>
              </div>
              <div className="CounterArea d-flex align-items-center gap-3">
                <i
                  className={`bi bi-dash-circle fs-3 ${
                    adult === 0 ? 'text-secondary' : 'text-dark'
                  }`}
                  role="button"
                  onClick={adultMinusCounter}
                />
                <p className="fs-5 m-0">{adult}</p>
                <i
                  className="bi bi-plus-circle fs-3 text-dark"
                  role="button"
                  onClick={adultCounter}
                />
              </div>
            </div>

            {/* Children */}
            <div className="container d-flex align-items-center justify-content-between">
              <div className="GuestType">
                <h5 className="m-0 fw-semibold">Children</h5>
                <p className="text-muted m-0" style={{ fontSize: '14px' }}>
                  Ages 2–12
                </p>
              </div>
              <div className="CounterArea d-flex align-items-center gap-3">
                <i
                  className={`bi bi-dash-circle fs-3 ${
                    children === 0 ? 'text-secondary' : 'text-dark'
                  }`}
                  role="button"
                  onClick={ChildrenMinus}
                />
                <p className="fs-5 m-0">{children}</p>
                <i
                  className="bi bi-plus-circle fs-3 text-dark"
                  role="button"
                  onClick={ChildrenPlus}
                />
              </div>
            </div>

            {/* Infants */}
            <div className="container d-flex align-items-center justify-content-between">
              <div className="GuestType">
                <h5 className="m-0 fw-semibold">Infants</h5>
                <p className="text-muted m-0" style={{ fontSize: '14px' }}>
                  Under 2
                </p>
              </div>
              <div className="CounterArea d-flex align-items-center gap-3">
                <i
                  className={`bi bi-dash-circle fs-3 ${
                    infants === 0 ? 'text-secondary' : 'text-dark'
                  }`}
                  role="button"
                  onClick={InfantsMinus}
                />
                <p className="fs-5 m-0">{infants}</p>
                <i
                  className="bi bi-plus-circle fs-3 text-dark"
                  role="button"
                  onClick={InfantsPlus}
                />
              </div>
            </div>

            {/* Pets */}
            <div className="container d-flex align-items-center justify-content-between">
              <div className="GuestType">
                <h5 className="m-0 fw-semibold">Pets</h5>
                <h6 className="fw-bold text-dark">
                  <a href="#" style={{ fontSize: '14px' }} className="text-dark text-muted m-0">
                    Bringing a service animal?
                  </a>
                </h6>
              </div>
              <div className="CounterArea d-flex align-items-center gap-3">
                <i
                  className={`bi bi-dash-circle fs-3 ${
                    pets === 0 ? 'text-secondary' : 'text-dark'
                  }`}
                  role="button"
                  onClick={PetMinus}
                />
                <p className="fs-5 m-0">{pets}</p>
                <i
                  className="bi bi-plus-circle fs-3 text-dark"
                  role="button"
                  onClick={PetPlus}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default WhoModel;
