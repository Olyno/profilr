'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import ActionButton from '../ActionButton';
import FaqCollapse from '../FaqCollapse';

type FormData = {
  email: string;
};

export default () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle the form submission logic here, such as sending data to an API
    console.log(formData);
  };

  return (
    <section id='section_faq' className='py-10 flex flex-col items-center'>
      <h1 className='text-[50px]'>FAQS</h1>

      <div className='flex flex-col gap-5 items-center mt-16'>
        <FaqCollapse />
        <FaqCollapse />
        <FaqCollapse />
        <FaqCollapse />
      </div>

      <p className='mt-20 mb-5'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ut!
      </p>

      <div className='w-full flex justify-center'>
        <form onSubmit={handleSubmit} className='flex w-2/3 h-[40px]'>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Email address'
            required
            onChange={handleChange}
            value={formData.email}
            className='border-2 rounded-md border-solid border-gray-300 p-2 w-full'
          />
          <ActionButton htmlElement='button' type='submit' className='w-[25%]'>
            Get started
          </ActionButton>
        </form>
      </div>
    </section>
  );
};
