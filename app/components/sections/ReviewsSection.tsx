import Image from 'next/image';
import ScreenCard from '../ScreenCard';

export default () => {
  return (
    <section className='w-full py-20'>
      <div className='flex justify-center items-center'>
        <Image src='/heart.svg' alt='heart logo' width={100} height={100} />
      </div>
      <div className='flex gap-5 justify-center'>
        <button>
          <Image
            src='/arrows_1.svg'
            alt='left_arrow'
            width={200}
            height={200}
          />
        </button>
        <p className='text-2xl self-center italic'>
          "I love this product so much ! It rocks!"
        </p>
        <button>
          <Image
            src='/arrows_2.svg'
            alt='right_arrow'
            width={200}
            height={200}
          />
        </button>
      </div>
      <div className='flex flex-col items-center'>
        <Image src='/user.svg' alt='user' width={50} height={50} />

        <div className='flex'>
          <Image src='/star.svg' alt='star' width={20} height={20} />
          <Image src='/star.svg' alt='star' width={20} height={20} />
          <Image src='/star.svg' alt='star' width={20} height={20} />
          <Image src='/star.svg' alt='star' width={20} height={20} />
          <Image src='/star.svg' alt='star' width={20} height={20} />
        </div>
        <div className='text-center'>
          <p>The Rock</p>
          <p>Los Angeles</p>
        </div>
      </div>
      <div className='flex justify-evenly mt-20'>
        <ScreenCard />
        <ScreenCard className='mt-[7rem]' />
        <ScreenCard />
      </div>
    </section>
  );
};
