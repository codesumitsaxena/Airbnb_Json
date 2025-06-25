import React from 'react';
import { DateRange } from 'react-date-range';
import { useDispatch, useSelector } from 'react-redux';
import { setDateRange } from '../features/likes/DateSelector/DateSlice';

function DateSelector() {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.dateRange);

  const handleChange = (item) => {
    dispatch(setDateRange({
      startDate: item.selection.startDate,
      endDate: item.selection.endDate,
    }));
  };

  return (
    <DateRange
      onChange={handleChange}
      moveRangeOnFirstSelection={false}
      ranges={[{ startDate, endDate, key: 'selection' }]}
      months={2}
      direction="horizontal"
      showDateDisplay={false}
    />
  );
}

export default DateSelector;
