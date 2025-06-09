import {Offcanvas} from '@/layouts/OffcanvasLayout';
import {CloseMenuButton} from '@/shared/CloseMenuButton';
import type {IEventsBit} from '@/domain/entities/events';
import {useOffcanvas} from '@/layouts/OffcanvasLayout/OffcanvasContext';
import EventDropdown from '@/features/EventDropdown';

export const EventOffCanvas = ({item}: {item: IEventsBit}) => {
  const Content = () => {
    const {setIsOpen} = useOffcanvas();
    return (
      <>
        <CloseMenuButton
          className='absolute top-16 lg:top-10 size-20 right-32 lg:right-10 cursor-pointer z-10'
          onClick={() => setIsOpen(prev => !prev)}
        />
        <EventDropdown event={item} />
      </>
    );
  };
  return (
    <Offcanvas
      hasOverlayShadowing
      className='select-none uppercase
        lg:bg-main-orange  lg:hover:bg-white lg:hover:border-white
          hover:text-main-orange py-5 lg:py-8 lg:px-34 rounded-6xl
          bg-transparent hover:bg-main-orange border-2 border-main-orange
           w-full lg:w-full cursor-pointer transition-all duration-300 text-3xl lg:text-5xl'
      icon={<>Подробнее</>}>
      <Content />
    </Offcanvas>
  );
};
