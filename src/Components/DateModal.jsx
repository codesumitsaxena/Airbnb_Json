import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { DateRange } from 'react-date-range';
import { useDispatch, useSelector } from 'react-redux';
import { setDateRange } from '../features/likes/DateSelector/DateSlice';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function DateSelectorModal() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.dateRange);

  const formatDate = (date) => date.toLocaleDateString('en-GB');

  const handleChange = (item) => {
    dispatch(setDateRange({
      startDate: item.selection.startDate,
      endDate: item.selection.endDate,
    }));

    if (item.selection.startDate.getTime() !== item.selection.endDate.getTime()) {
      setShow(false);
    }
  };

  return (
    <>
      <div
  className="CheckIn d-flex flex-column justify-content-center px-3 border-end"
  style={{ flex: 1 }}
  onClick={() => setShow(true)}
>
  <small className="text-muted fw-semibold mb-1">Check in</small>
  <input
    value={formatDate(startDate)}
    readOnly
    className="form-control border-0 p-0 bg-transparent inputDate"
    style={{ fontSize: "14px", cursor: "pointer" }}
  />
</div>

<div
  className="CheckOut d-flex flex-column justify-content-center px-3"
  style={{ flex: 1 }}
  onClick={() => setShow(true)}
>
  <small className="text-muted fw-semibold mb-1">Check out</small>
  <input
    value={formatDate(endDate)}
    readOnly
    className="form-control border-0 p-0 bg-transparent inputDate"
    style={{ fontSize: "14px", cursor: "pointer" }}
  />
</div>


      <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
        <div className="p-3">
          <DateRange
            onChange={handleChange}
            moveRangeOnFirstSelection={false}
            ranges={[{ startDate, endDate, key: 'selection' }]}
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
