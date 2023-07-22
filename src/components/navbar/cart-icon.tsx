'use client';

import Image from 'next/image';
import Link from 'next/link';

export const CartIcon = () => {
  return (
    <Link href={'/cart'} className='flex items-center gap-4'>
      <div className='relative w-8 h-8 md:w-5 md:h-5'>
        <Image alt='cart-icon' src={'/images/cart.png'} fill />
      </div>
      <span>Korb (3)</span>
    </Link>
  );
};
