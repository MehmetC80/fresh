'use client';
import Image from 'next/image';
import { CountDown } from './count-down';
import { useRouter } from 'next/navigation';

export const Offer = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col md:flex-row bg-slate-950 h-screen text-white md:justify-between md:bg-[url("/images/offerBg.png")] md-h-[70vh]'>
      {/* Text-Container */}
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
        <h1 className='text-5xl font-bold xl:text-6xl'>
          Köstliche Burger & Pommes
        </h1>
        <p className=' xl:text-xl'>
          Vereinfachen Sie schrittweise effektive E-Toiler und
          prozessorientierte Methoden der Ermächtigung. Schnell parallel
          pontifizieren.
        </p>
        <CountDown />
        <button
          className='bg-orange-500 rounded-lg py-3 px-6'
          onClick={() => router.push('/orders')}
        >
          Jetzt bestellen
        </button>
      </div>
      {/* Image-Container */}
      <div className='relative flex-1 w-full md:h-full'>
        <Image
          alt='image'
          src={'/images/offerProduct.png'}
          fill
          className='object-contain'
        />
      </div>
    </div>
  );
};
