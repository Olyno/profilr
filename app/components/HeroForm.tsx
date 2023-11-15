'use client';

import {
  CheckboxField,
  FieldError,
  Form,
  Label,
  TextField,
} from '@redwoodjs/forms';
import ActionButton from './ActionButton';

type SignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  terms: boolean;
};

export default () => {
  const onSubmit = (data: SignupFormData) => {
    console.log('Action form data:', data);
  };

  return (
    <Form
      id='signup_form'
      className='flex flex-col gap-4 md:w-1/3 w-2/3 md:mt-0 mt-10'
      onSubmit={onSubmit}
    >
      <div className='flex flex-col'>
        <Label
          name='firstName'
          className='font-semibold'
          errorClassName='font-semibold text-red-500'
        >
          First Name
        </Label>
        <TextField
          name='firstName'
          placeholder='Your first name'
          className='border-2 rounded-md border-solid border-gray-300 p-2'
          errorClassName='border-2 rounded-md border-solid border-red-500 p-2'
          validation={{
            required: 'Your first name is required',
          }}
        />
        <FieldError name='firstName' className='text-red-500' />
      </div>
      <div className='flex flex-col'>
        <Label
          name='lastName'
          className='font-semibold'
          errorClassName='font-semibold text-red-500'
        >
          Last Name
        </Label>
        <TextField
          name='lastName'
          placeholder='Your last name'
          className='border-2 rounded-md border-solid border-gray-300 p-2'
          errorClassName='border-2 rounded-md border-solid border-red-500 p-2'
          validation={{
            required: 'Your last name is required',
          }}
        />
        <FieldError name='lastName' className='text-red-500' />
      </div>
      <div className='flex flex-col'>
        <Label
          name='email'
          className='font-semibold'
          errorClassName='font-semibold text-red-500'
        >
          Email Address
        </Label>
        <TextField
          name='email'
          placeholder='Your email'
          className='border-2 rounded-md border-solid border-gray-300 p-2'
          errorClassName='border-2 rounded-md border-solid border-red-500 p-2'
          validation={{
            required: 'Your email is required',
          }}
        />
        <FieldError name='email' className='text-red-500' />
      </div>
      <div className='flex items-center'>
        <CheckboxField
          name='terms'
          aria-label='Agree to terms and conditions'
          validation={{
            required: true,
          }}
        />
        <Label name='terms' className='ml-2'>
          T&C
        </Label>
      </div>
      <ActionButton htmlElement='button' type='submit'>
        Signup
      </ActionButton>
    </Form>
  );
};
