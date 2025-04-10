import {NextPage} from 'next';
const Footer: NextPage = () => {
  return (
    <div className='h-32 mt-auto lg:h-40 bg-main-orange w-full flex justify-center items-center select-none'>
      <p className='text-3xl lg:text-5xl'>Developed @ 2025 by ITS Tech</p>
    </div>
  );
};
Footer.displayName = 'Footer';
export default Footer;
