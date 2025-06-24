import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function DateSelectorModal() {
  const [show, setShow] = useState(false);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  

  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB'); 
  };

  const handleChange = (item) => {
    setRange([item.selection]);
  
    if (item.selection.startDate && item.selection.endDate &&
        item.selection.startDate.getTime() !== item.selection.endDate.getTime()) {
      setShow(false); 
    }
  };
  

  return (
    <>
      <div className="CheckIn d-flex flex-column justify-content-center px-3 border-end" style={{ flex: 1 }}>
        <small className='miniNavHeading text-muted fw-semibold'>Check in</small>
        <input
          type="text"
          value={formatDate(range[0].startDate)}
          readOnly
          placeholder="Add dates"
          className="form-control border-0 p-0 bg-transparent inputDate"
          onClick={() => setShow(true)}
          style={{ fontSize: "14px", width: "100%", cursor: "pointer" }}
        />
      </div>

      <div className="CheckOut d-flex flex-column justify-content-center px-3 border-end" style={{ flex: 1 }}>
        <small className='miniNavHeading text-muted fw-semibold'>Check out</small>
        <input
          type="text"
          value={formatDate(range[0].endDate)}
          readOnly
          placeholder="Add dates"
          className="form-control border-0 p-0 bg-transparent inputDate"
          onClick={() => setShow(true)}
          style={{ fontSize: "14px", width: "100%", cursor: "pointer" }}
        />
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        centered
        dialogClassName="custom-scroll-modal"
        style={{ marginTop: "60px" }}
      >
        <div className="p-3 custom-scroll-modal" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <DateRange
            onChange={handleChange}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            showDateDisplay={false}
          />
        </div>
      </Modal>
    </>
  );
}

export default DateSelectorModal;
