import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Main style
import 'react-date-range/dist/theme/default.css'; // Theme style

function DateSelector({ onDateChange }) {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleChange = (item) => {
    setRange([item.selection]);
    onDateChange({
      startDate: item.selection.startDate,
      endDate: item.selection.endDate,
    });
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        <DateRange
          onChange={handleChange}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={2}
          direction="horizontal"
          showDateDisplay={false}
        />
      </div>
    </div>
  );
}


export default DateSelector;
