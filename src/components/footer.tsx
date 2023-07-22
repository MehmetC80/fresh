import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='h-12 md:h-24 p-4 lg:p-20 xl:p-40 flex text-orange-500 items-center justify-between'>
      <Link href={'/'} className='font-bold text-xl'>
        FreshIt
      </Link>
      <p>@ ALL RIGHTS RESERVED.</p>
    </footer>
  );
};
