export const HardathonDetailsSkeleton = () => {
  return (
    <div
      role='status'
      className='
       items-center relative justify-between animate-pulse flex flex-col my-auto  w-full h-full rounded-3xl'>
      <div className='h-24 bg-gray-300 rounded-full w-1/2  mx-auto'></div>
      <div className='size-24  bg-gray-300 rounded-full absolute top-0 left-0  mx-auto'></div>
      <div className='w-full flex flex-col h-min lg:my-auto mb-auto mt-20 justify-center items-center gap-y-24 lg:flex-row'>
        <div className='flex h-full p-20 flex-col gap-20 lg:gap-12 border border-white rounded-6xl justify-center items-center w-full'>
          <div className='h-22  bg-gray-300 rounded-full w-full'></div>
          <div className='h-22  bg-gray-300 rounded-full w-full'></div>
          <div className='h-22  bg-gray-300 rounded-full w-full'></div>
          <div className='h-22  bg-gray-300 rounded-full w-full'></div>
          <div className='h-22  bg-gray-300 rounded-full w-full'></div>
        </div>
        <div className='flex  flex-col gap-20 lg:gap-12 lg:ms-32  justify-center items-center w-full'>
          <div className='h-28  bg-gray-300 rounded-full w-full'></div>
          <div className='h-28  bg-gray-300 rounded-full w-full'></div>
          <div className='h-28  bg-gray-300 rounded-full w-full'></div>
          <div className='h-28  bg-gray-300 rounded-full w-full'></div>
          <div className='h-28  bg-gray-300 rounded-full w-full'></div>
        </div>
      </div>
    </div>
  );
};
