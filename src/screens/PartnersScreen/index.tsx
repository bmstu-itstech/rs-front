import Image from "next/image";
import style from "./PartnersScreen.module.css";

const photos = [
  "/partners/fc-rsk.png",
  "/partners/techprosv.jpg",
  "/partners/tbank.png",
  "/partners/novikom.png",
  "/partners/lipgart.png"
];

function PartnersScreen() {

  return (
    <div className="partners-screen min-h-[100vh] !pt-[30px]">
      <div className="subtitle">Партнёры</div>
      <div className={style.list}>
        {photos.map(photo => (
          <img
            className={style.photo}
            src={photo}
            alt="logo of the partner"
          />
        ))}
      </div>
    </div>
  );

};

export default PartnersScreen;
