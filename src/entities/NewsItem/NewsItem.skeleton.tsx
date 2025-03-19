export const NewsItemSkeleton = () => {
  return (
    <div
      role='status'
      className='space-y-2.5 py-6 px-12  items-center justify-center animate-pulse flex flex-col gap-2 w-[min(45rem,88vw)] h-full bg-gray-200  rounded-3xl'>
      <svg
        className='w-52 h-52 text-gray-300'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 20 18'>
        <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
      </svg>

      <div className='flex flex-col justify-end max-h-1/2 h-full items-center w-full gap-6'>
        <div className='h-12  bg-gray-300 rounded-full w-full'></div>
        <div className='h-12  bg-gray-300 rounded-full w-full'></div>
        <div className='h-12  bg-gray-300 rounded-full w-full'></div>
      </div>
    </div>
  );
};
