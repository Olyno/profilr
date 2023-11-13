import Image from 'next/image';
import ScreenCard from '../ScreenCard';

export default () => {
  return (
    <section className='w-full py-20'>
      <div className='flex justify-center items-center'>
        <Image src='/heart.svg' alt='heart logo' width={100} height={100} />
      </div>
      <div className='flex gap-4 justify-center items-center flex-wrap'>
        <button className='relative w-[75px] h-[75px] md:w-[150px] md:h-[150px]'>
          <Image src='/arrows_1.svg' alt='left arrow' fill />
        </button>
        <p className='text-base md:text-2xl self-center italic px-4 text-center'>
          "I love this product so much! It rocks!"
        </p>
        <button className='relative w-[75px] h-[75px] md:w-[150px] md:h-[150px]'>
          <Image src='/arrows_2.svg' alt='right arrow' fill />
        </button>
      </div>
      <div className='flex flex-col items-center'>
        <Image src='/user.svg' alt='user' width={50} height={50} />
        <div className='flex justify-center mt-2'>
          {[...Array(5)].map((_, i) => (
            <Image key={i} src='/star.svg' alt='star' width={20} height={20} />
          ))}
        </div>
        <div className='text-center mt-2'>
          <p>The Rock</p>
          <p>Los Angeles</p>
        </div>
      </div>
      <div className='flex flex-wrap justify-evenly mt-20 gap-5 md:gap-0'>
        <ScreenCard />
        <ScreenCard className='md:mt-28' />
        <ScreenCard />
      </div>
    </section>
  );
};
