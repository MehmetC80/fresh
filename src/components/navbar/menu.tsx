'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CartIcon } from './cart-icon';

const links = [
  {
    id: 1,
    title: 'Startseite',
    url: '/',
  },
  {
    id: 2,
    title: 'Menu',
    url: '/menu',
  },
  {
    id: 3,
    title: 'Öffungszeiten',
    url: '/',
  },
  {
    id: 4,
    title: 'Kontakt',
    url: '/',
  },
];

export const Menu = () => {
  const [open, setOpen] = useState(false);

  //temp user
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          alt='icon'
          src='/images/open.png'
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          alt='icon'
          src='/images/close.png'
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className='bg-orange-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 justify-center items-center text-2xl z-10'>
          {links.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setOpen(false)}
              >
                {link.title}
              </Link>
            );
          })}
          {!user ? (
            <Link href={'/login'} onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href={'/orders'} onClick={() => setOpen(false)}>
              Bestellungen
            </Link>
          )}
          <Link href={'/cart'} onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};
export default Menu;
