export const EventPageSkeleton = () => {
  return (
    <div
      role='status'
      className='space-y-2.5 mx-auto px-12 pt-36 lg:w-2/3 lg:pt-24 lg:pb-12  items-center justify-between animate-pulse flex flex-col gap-2 w-full h-full   rounded-3xl'>
      <div className='h-24  bg-gray-300 rounded-full w-1/2'></div>
      <div className='flex flex-col justify-center max-h-1/2 h-full relative items-center w-full gap-6'>
        <div className='h-12  bg-gray-300 rounded-full w-full'></div>
        <div className='h-12  bg-gray-300 rounded-full w-full'></div>
        <div className='h-12  bg-gray-300 rounded-full w-full'></div>

        <div className='size-24 absolute top-1/2 left-0 -ms-56  bg-gray-300 rounded-full'></div>
        <div className='size-24 absolute top-1/2 right-0 -me-56 bg-gray-300 rounded-full'></div>
      </div>
      <div className='flex w-full h-30 gap-12 justify-between items-center'>
        <div className='h-full bg-gray-300 rounded-full w-full'></div>
        <div className='h-full  bg-gray-300 rounded-full w-full'></div>
      </div>
    </div>
  );
};
