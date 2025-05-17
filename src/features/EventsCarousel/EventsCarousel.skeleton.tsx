export const EventPageSkeleton = () => {
  return (
    <div
      role='status'
      className=' lg:pb-12 
       items-center justify-between animate-pulse flex flex-col my-auto  w-full h-full   rounded-3xl'>
      <div className='h-24  bg-gray-300 rounded-full w-1/2  mx-auto'></div>
      <div className='2xl:!-mt-24 lg:w-[50dvw] w-full gap-12 flex flex-col justify-end ms-auto'>
        <div className='flex flex-col  justify-start items-center w-full h-48r gap-6'>
          <div className='h-12  bg-gray-300 rounded-full w-full'></div>
          <div className='h-12  bg-gray-300 rounded-full w-full'></div>
          <div className='h-12  bg-gray-300 rounded-full w-full'></div>
          <div className='h-12  bg-gray-300 rounded-full w-full'></div>
          <div className='h-12  bg-gray-300 rounded-full w-full'></div>
          <div className='h-12  bg-gray-300 rounded-full w-full'></div>
          <div className='h-12  bg-gray-300 rounded-full w-full'></div>
        </div>
        <div className='mx-end gap-12 h-28 mb-auto lg:gap-24  flex w-full'>
          <div className='h-full bg-gray-300 rounded-full w-full'></div>
          <div className='h-full  bg-gray-300 rounded-full w-full'></div>
        </div>
      </div>
    </div>
  );
};
