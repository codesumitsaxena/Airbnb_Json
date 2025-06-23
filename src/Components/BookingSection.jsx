import React, { useState } from 'react';
import DateSelector from './DateSelector';
import Counter from './Counter';

function BookingSection() {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  return (
    <div>
      <DateSelector range={range} setRange={setRange} />
      <Counter range={range} />
    </div>
  );
}

export default BookingSection;
