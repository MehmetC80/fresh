import Image from 'next/image';
import { featuredProducts } from '@/data';

export const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-orange-500'>
      {/* Wrapper */}
      <div className='w-max flex'>
        {/* Single items */}

        {featuredProducts.map((product) => {
          return (
            <div
              key={product.id}
              className='w-screen md:w-[50vw] xl:w-[33vw] h-[60vh] xl:h-[90vh] flex flex-col items-center justify-around p-4 hover:bg-orange-50 transition-all duration-300'
            >
              {/* Image-Container */}
              {product.img && (
                <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
                  <Image
                    src={product.img}
                    alt='image'
                    fill
                    className='object-contain'
                  />
                </div>
              )}
              {/* Text-Container */}
              <div className='flex-1 flex flex-col gap-4 items-center justify-center'>
                <h1 className='text-xl uppercase font-bold xl:text-2xl 2xl:text-3xl'>
                  {product.title}
                </h1>
                <p className='p-4 2xl:p-8 text-center'>{product.desc}</p>
                <span className='text-xl font-bold'>€{product.price}</span>
                <button className='bg-orange-500 text-white p-2 rounded-lg'>
                  + Warenkorb
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
