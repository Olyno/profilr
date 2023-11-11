export default () => {
  return (
    <div className='bg-gray-100 text-black rounded-md border-2 border-solid border-gray-400 w-2/3'>
      <details>
        <summary className='p-2 rounded-md cursor-pointer flex items-center justify-center'>
          <span className='bg-gray-700 text-white w-[100px] h-[60px] rounded-md text-[50px] flex justify-center items-center'>
            +
          </span>
          <p className='ml-10'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            distinctio est itaque alias impedit laborum error soluta officia.
            Praesentium, harum!
          </p>
        </summary>
        <div className='mt-2 p-2'>
          <p>Your content goes here...</p>
        </div>
      </details>
    </div>
  );
};
