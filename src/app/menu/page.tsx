import Link from 'next/link';
import { menu } from '@/data';

const MenuPage = () => {
  return (
    <div className='flex flex-col items-center md:flex-row  p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-6rem)]'>
      {menu.map((category) => {
        return (
          <Link
            key={category.id}
            href={`/menu/category.slug`}
            style={{ backgroundImage: `url(${category.img})` }}
            className='w-full h-1/3 bg-cover p-8 md:h-1/2'
          >
            <div className={`text-${category.color} w-1/2`}>
              <h1 className='uppercase font-bold text-3xl'>{category.title}</h1>
              <p className='text-sm my-8'>{category.desc}</p>
              <button
                className={`hidden 2xl:block bg-orange-500  py-2 px-4 rounded-lg text-white`}
              >
                Details
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default MenuPage;
