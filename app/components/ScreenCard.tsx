import Image from 'next/image';

export default ({ className }: { className?: string }) => {
  return (
    <div
      className={
        (className ?? '') +
        ' w-[15rem] h-[20rem] border-4 p-3 flex flex-col justify-center items-center bg-gray-100'
      }
    >
      <Image
        src='https://picsum.photos/120/120'
        alt='heart logo'
        width={120}
        height={120}
        className='rounded-md'
      />
      <h1 className='mt-5'>Heading</h1>
      <p className='text-center text-sm mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        harum dicta earum!
      </p>
    </div>
  );
};
