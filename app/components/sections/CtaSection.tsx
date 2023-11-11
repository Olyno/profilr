import SignupButton from '../ActionButton';

export default () => {
  return (
    <section
      id='section_cta'
      className='bg-gray-100 py-10 flex flex-col items-center'
    >
      <h1 className='text-[50px]'>Headline</h1>
      <h2 className='text-[40px]'>Subheading</h2>
      <SignupButton
        htmlElement='a'
        type='button'
        href='#signup_form'
        className='w-[30%] mt-20'
      >
        Signup
      </SignupButton>
    </section>
  );
};
