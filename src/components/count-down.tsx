'use client';

import Countdown from 'react-countdown';

const endingDate = new Date('2023-07-31');

export const CountDown = () => {
  return (
    <Countdown
      className='text-orange-900 font-bold text-5xl'
      date={endingDate}
    />
  );
};
