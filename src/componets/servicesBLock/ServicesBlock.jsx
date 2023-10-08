import React from "react";
import scss from "./ServicesBLock.module.scss";
import CardServices from "../servicesCard/CardServices";

function ServicesBlock() {
  return (
    <div className={scss.servicesBlock}>
      <h1>Наши услуги</h1>
      <div className={scss.cards}>
        <CardServices
          img="./assets/images/Picteure house search.png"
          title="Аренда дома"
          btn="Найти аренду"
          link="/link1"
        />{" "}
        <CardServices
          img="./assets/images/зеленая картинка.png"
          title="Продажа дома"
          btn="Разместить объявление"
          link="/link2"
        />{" "}
        <CardServices
          img="./assets/images/поиск дома.png"
          title="Покупка дома"
          btn="Посмотреть варианты"
          link="/link3"
        />
      </div>
    </div>
  );
}

export default ServicesBlock;
