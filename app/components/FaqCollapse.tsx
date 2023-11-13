export default () => {
  return (
    <div className='bg-gray-100 text-black rounded-md border-2 border-solid border-gray-400 w-full max-w-2xl mx-auto'>
      <details>
        <summary className='p-2 rounded-md cursor-pointer flex items-center'>
          <div className='flex-none w-10 h-10 bg-gray-700 flex items-center justify-center rounded-md'>
            <span className='text-4xl text-white'>+</span>
          </div>
          <p className='ml-4 text-sm flex-grow'>
            This is a placeholder text. You can replace it with any other
            content.
          </p>
        </summary>
        <div className='mt-2 p-2'>
          <p>Your content goes here...</p>
        </div>
      </details>
    </div>
  );
};
