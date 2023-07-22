'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const data = [
  {
    id: 1,
    title: 'Immer frisch & knackig',
    image: '/images/slide1.png',
  },
  {
    id: 2,
    title: 'Wir beliefern dich in ganz Berlin!',
    image: '/images/slide2.png',
  },
  {
    id: 1,
    title:
      'Die Beste Pizza zum genießen mit deiner Familie und deinen Freunden',
    image: '/images/slide3.jpg',
  },
];

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  //   }, 6000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className='flex flex-col  lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
      {/* Text-Container */}
      <div className='flex-1 flex items-center justify-center flex-col gap-8 text-orange-500 font-bold md:text-6xl first-line:xl:text-7xl bg-orange-50'>
        <h1 className='text-5xl text-center uppercase p-4'>
          {data[currentSlide].title}
        </h1>
        <button className='bg-orange-500 text-white rounded-lg px-8 py-4  '>
          Jetzt Bestellen
        </button>
      </div>
      {/* Image-Container */}
      <div className='flex-1 w-full relative'>
        <Image
          src={data[currentSlide].image}
          alt='main image'
          fill
          className='object-cover'
        />
      </div>
    </div>
  );
};
