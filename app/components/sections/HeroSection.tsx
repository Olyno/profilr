'use client';

import Image from 'next/image';
import HeroForm from '../HeroForm';

export default () => {
  return (
    <section id='section_hero' className='bg-gray-100 h-full text-black pb-20'>
      <header className='h-screen flex flex-col items-center justify-center gap-5'>
        <h1 className='text-7xl'>Profilr</h1>
        <h2 className='text-2xl'>Talent Intelligence Software</h2>
        <Image
          src='/marker.svg'
          alt='Thing'
          width={400}
          height={400}
          className='absolute bottom-[13.5rem]'
        />
      </header>

      <main className='relative flex flex-col md:flex-row justify-evenly items-center py-12'>
        <Image
          src='https://picsum.photos/400/600'
          width={400}
          height={600}
          alt='Profilr image placeholder'
          className='rounded-md'
        />
        <HeroForm />
        <div className='absolute md:bottom-[-1.5rem] md:top-[30rem] top-[48rem] md:right-[15.5rem] right-[8.5rem] md:h-[30%] w-[50%] md:w-[30%] h-[40%]'>
          <Image src='/arrow_cta.svg' alt='Arrow CTA' fill />
        </div>
      </main>
      <footer className='md:px-32 px-5 text-center mt-12 md:mt-0'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quidem
          aliquam qui ex est iste officiis odit error architecto voluptas
          impedit, dolorum, rem pariatur dolor vitae recusandae perferendis
          laborum. Quae maiores modi alias in?
        </p>
      </footer>
    </section>
  );
};
