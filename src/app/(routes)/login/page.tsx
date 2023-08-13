import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] sxl:w-1/2'>
        <div className='relative h-1/3  w-full md:h-full md:w-1/2'>
          <Image
            src={'/images/loginBg.png'}
            alt=''
            fill
            className='object-cover'
          />
        </div>
        <div className='p-10 flex flex-col gap-8 md:w-[70%] lg:w-[60%] xl:w-1/2'>
          <h1 className='text-2xl font-bold xl:text-3xl'>Willkommen</h1>
          <p>Login dich ein oder registrier dich einfach via social account</p>
          <button className='flex gap-4 ring-1 ring-orange-500 rounded-md'>
            <Image
              alt=''
              src='/images/google.png'
              width={20}
              height={20}
              className='object-contain'
            />
            <span>Login mit Google</span>
          </button>
          <button className='flex gap-4 ring-1 ring-orange-500 rounded-md'>
            <Image
              alt=''
              src='/images/facebook.png'
              width={20}
              height={20}
              className='object-contain'
            />
            <span>Login mit Facebook</span>
          </button>
          <p className='text-sm '>
            Haben Sie ein Problem?
            <Link className='hover:underline ml-2' href={'/contact'}>
              Kontaktieren Sie uns
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
