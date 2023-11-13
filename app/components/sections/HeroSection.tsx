'use client';

import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import SignupButton from '../ActionButton';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  terms: boolean;
};

export default () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    terms: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle the form submission logic here, such as sending data to an API
    console.log(formData);
  };

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
        <form
          id='signup_form'
          className='flex flex-col gap-4 md:w-1/3 w-2/3 md:mt-0 mt-10'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col'>
            <label htmlFor='first_name' className='font-semibold'>
              First Name
            </label>
            <input
              id='first_name'
              name='firstName'
              type='text'
              placeholder='Your first name'
              required
              onChange={handleChange}
              value={formData.firstName}
              className='border-2 rounded-md border-solid border-gray-300 p-2'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='last_name' className='font-semibold'>
              Last Name
            </label>
            <input
              id='last_name'
              name='lastName'
              type='text'
              placeholder='Your last name'
              required
              onChange={handleChange}
              value={formData.lastName}
              className='border-2 rounded-md border-solid border-gray-300 p-2'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email' className='font-semibold'>
              Email Address
            </label>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='Your email'
              required
              onChange={handleChange}
              value={formData.email}
              className='border-2 rounded-md border-solid border-gray-300 p-2'
            />
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              name='terms'
              id='t&c'
              onChange={handleChange}
              checked={formData.terms}
              aria-label='Agree to terms and conditions'
            />
            <label htmlFor='t&c' className='ml-2'>
              T&C
            </label>
          </div>
          <SignupButton htmlElement='button' type='submit'>
            Signup
          </SignupButton>
        </form>
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
