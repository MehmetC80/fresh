import Link from 'next/link';
import Menu from './menu';
import { CartIcon } from './cart-icon';
import Image from 'next/image';

export const Navbar = () => {
  //temp user
  const user = false;
  return (
    <nav className='h-12 md:h-24 text-orange-500 p-4 flex justify-between items-center border-b-2 border-b-orange-500 uppercase lg:px-20 xl:px-40'>
      {/* Left Links */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href={'/'}>Startseite</Link>
        <Link href={'/menu'}>Menu</Link>
        <Link href={'/contact'}>Kontakt</Link>
      </div>
      {/* LOGO */}
      <div className='text-xl font-semibold flex-1 md:text-center'>
        <Link href={'/'}>FreshIt</Link>
      </div>

      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu />
      </div>
      {/* Right Links */}
      <div className='hidden md:flex gap-4 md:items-center justify-end flex-1'>
        <div className='md:absolute top-3 right-2 lg:static flex items-center  gap-2 cursor-pointer bg-orange-200 rounded-md px-2 py-1'>
          <Image
            src={'/images/phone.png'}
            alt='phone-image'
            width={16}
            height={16}
          />
          <span>030 622 84 97</span>
        </div>
        {!user ? (
          <Link href={'/login'}>Login</Link>
        ) : (
          <Link href={'/orders'}>Bestellungen</Link>
        )}
        <CartIcon />
      </div>
    </nav>
  );
};
