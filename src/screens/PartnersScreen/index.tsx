import style from './PartnersScreen.module.css';
import { photos } from './Partners.usecase';

function PartnersScreen() {
  return (
    <div className='partners-screen min-h-[100vh] !pt-[30px]'>
      <div className='subtitle'>Партнёры</div>
      <div className={style.list}>
        {photos.map((photo, index) => (
          <img
            key={index}
            className={style.photo}
            src={photo}
            alt='logo of the partner'
          />
        ))}
      </div>
    </div>
  );
}

export default PartnersScreen;
