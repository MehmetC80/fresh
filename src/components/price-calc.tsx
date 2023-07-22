'use client';

import { useEffect, useState } from 'react';

interface PriceCalculatorProps {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
}

export const PriceCalculator = ({
  price,
  id,
  options,
}: PriceCalculatorProps) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotalPrice(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>€{totalPrice.toFixed(2)}</h2>
      {/* Options-Container */}
      <div className='flex gap-4'>
        {options?.map((option, index) => {
          return (
            <button
              className='min-w-[6rem] p-2 ring-1 ring-orange-700 rounded-lg'
              key={option.title}
              style={{
                background: selected === index ? 'rgb(194 65 12)' : 'white',
                color: selected === index ? 'white' : 'rgb(194 65 12)',
              }}
              onClick={() => {
                setSelected(index);
              }}
            >
              {option.title}
            </button>
          );
        })}
      </div>
      {/* Quantity and Button-Container */}
      <div className='flex justify-between items-center gap-2'>
        {/* Quantity */}
        <div className='flex justify-between w-full p-3 ring-1 ring-orange-700 rounded-lg'>
          <span>Anzahl</span>
          <div className='flex gap-4'>
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {' - '}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 20 ? prev + 1 : 20))}
            >
              {' + '}
            </button>
          </div>
        </div>
        {/* Cart-Button */}
        <button className='w-56 bg-orange-500 text-white p-3 ring-1 ring-orange-700 rounded-lg'>
          + Warenkorb
        </button>
      </div>
    </div>
  );
};
