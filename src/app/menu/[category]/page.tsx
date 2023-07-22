import { pizzas } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
const CategoryPage = () => {
  return (
    <div className='flex flex-wrap  text-orange-500'>
      {pizzas.map((pizza) => {
        return (
          <Link
            key={pizza.id}
            href={`product/${pizza.id}`}
            className=' w-full h-[60vh] border-r-2 border-b-2 border-orange-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-orange-50'
          >
            {pizza.img && (
              <div className='relative h-[80%] '>
                <Image alt='' src={pizza.img} fill className='object-contain' />
              </div>
            )}
            {/* Text-Container */}
            <div className='flex items-center justify-between font-bold '>
              <h1 className='text-2xl uppercase font-bold p-2'>
                {pizza.title}
              </h1>
              <h2>€{pizza.price}</h2>
              <button className='hidden group-hover:block  uppercase bg-orange-500 px-4 py-2 rounded-lg text-white'>
                {' '}
                + Waenkorb
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default CategoryPage;
