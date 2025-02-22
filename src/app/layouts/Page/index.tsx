import type {FC} from 'react';
import type Props from './Page.props';

const PageLayout: FC<Props> = ({title, children, className, ...props}) => {
  return (
    <div
      className={`w-full h-dvh bg-background_image2 bg-cover flex flex-col gap-3 pb-10
      after:absolute after:h-full after:w-full after:bg-black after:bg-opacity-80 after:-z-0
      ${className}`}
      {...props}>
      <p className='w-full flex text-white justify-center text-6xl leading-6xl z-10 mt-5 font-normal'>
        {title}
      </p>
      {children}
    </div>
  );
};

export default PageLayout;
