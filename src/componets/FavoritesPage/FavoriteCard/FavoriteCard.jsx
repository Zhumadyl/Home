import React, { useState } from "react";
import scss from "./FavoriteCard.module.scss";

function FavoriteCard() {
  const service = (img, text) => {
    return (
      <div className={scss.service}>
        <img src={img} alt="" />
        <p>{text}</p>
      </div>
    );
  };
  const [likedState, setLikedState] = useState(false);

  const handleLiked = () => {
    setLikedState(!likedState);
  };
  return (
    <div className={scss.card}>
      <div className={scss.img}>
        <img src="/assets/images/Image.png" alt="" />
      </div>
      <div className={scss.cardInfo}>
        <div className={scss.title}>
          <div>
            <h2>Квартира</h2>
            <p>23.06.2023</p>
          </div>
          <h4>Бишкек</h4>
        </div>
        <p className={scss.text}>2-х комн. кв., 70 кв. м2, 7 эт. из 10</p>
        <div className={scss.services}>
          <div>
            {service("/assets/images/tabler_wifi.png", "Wi-Fi")}
            {service(
              "/assets/images/material-symbols_videocam-outline.png",
              "Видеонаблюдение"
            )}
            {service("/assets/images/material-symbols_security.png", "Охрана")}
          </div>
          <div>
            {service("/assets/images/mingcute_parking-fill.png", "Парковка")}
            {service(
              "/assets/images/mdi_playground-seesaw.png",
              "Детская площадка"
            )}
          </div>
        </div>
        <div className={scss.price}>
          <h1>85 000 $</h1>
          <button
            onClick={handleLiked}
            className={`${scss.heart} ${likedState ? scss.liked : ""}`}
          >
            <img src="/assets/images/solar_heart-bold.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
