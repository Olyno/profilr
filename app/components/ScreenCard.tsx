import Image from 'next/image';

export default ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-2/3 md:w-60 h-80 border-4 p-3 flex flex-col justify-center items-center bg-gray-100 ${className}`}
    >
      <Image
        src='https://picsum.photos/120/120'
        alt='sample image'
        width={120}
        height={120}
        className='rounded-md'
      />
      <h1 className='mt-5 text-lg'>Heading</h1>
      <p className='text-center text-sm mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        harum dicta earum!
      </p>
    </div>
  );
};
