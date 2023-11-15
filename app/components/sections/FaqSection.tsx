'use client';

import { EmailField, Form } from '@redwoodjs/forms';
import ActionButton from '../ActionButton';
import FaqCollapse from '../FaqCollapse';

type FormData = {
  email: string;
};

export default () => {
  const onSubmit = (data: FormData) => {
    console.log('Submit: ', data);
  };

  return (
    <section id='section_faq' className='py-10 flex flex-col items-center'>
      <h1 className='text-[50px] leading-tight text-center'>FAQS</h1>

      <div className='flex flex-col gap-5 items-center mt-16 w-full px-5 md:px-0'>
        <FaqCollapse />
        <FaqCollapse />
        <FaqCollapse />
        <FaqCollapse />
      </div>

      <p className='mt-20 mb-5 text-center px-5'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ut!
      </p>

      <div className='w-full flex justify-center px-5'>
        <Form
          onSubmit={onSubmit}
          className='flex flex-col gap-4 md:flex-row md:gap-0 w-full md:w-2/3'
        >
          <EmailField
            name='email'
            placeholder='Email address'
            className='border-2 rounded-md border-solid border-gray-300 p-2 flex-grow'
            errorClassName='border-2 rounded-md border-solid border-red-500 p-2 flex-grow'
            validation={{ required: true }}
          />

          <ActionButton
            htmlElement='button'
            type='submit'
            className='md:w-auto flex-none'
          >
            <span className='text-sm md:text-base whitespace-nowrap'>
              Get started
            </span>
          </ActionButton>
        </Form>
      </div>
    </section>
  );
};
