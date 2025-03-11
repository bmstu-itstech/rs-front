import {NextPage} from 'next';
const Footer: NextPage = () => {
  return (
    <div className='h-32 mt-auto md:h-48 bg-main-orange w-full flex justify-center items-center select-none'>
      <p className='text-3xl md:text-5xl'>Developed @ 2025 by ITS Tech</p>
    </div>
  );
};
Footer.displayName = 'Footer';
export default Footer;
