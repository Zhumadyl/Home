import React from "react";
import scss from "./DiscountsBLock.module.scss";
import CardDiscout from "../cardDiscount/CardDiscout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";

function DiscountsBLock() {
  return (
    <div className={scss.discountsBLock}>
      <h1>Акции и скидки на новостройки</h1>
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        className={scss.carousel}
      >
        <div className={scss.cards}>
          <CardDiscout text="Terraguard" logo="./logoterra.png" />{" "}
          <CardDiscout text="Primex " logo="./logo primex.png" />{" "}
          <CardDiscout text="Starforge" logo="./logo star.png" />{" "}
          <CardDiscout text="ProBuilding" logo="./logo pro.png" />{" "}
        </div>
        <div className={scss.cards}>
          <CardDiscout text="Terraguard" logo="./logoterra.png" />{" "}
          <CardDiscout text="Terraguard" logo="./logo primex.png" />{" "}
          <CardDiscout text="Terraguard" logo="./logo star.png" />{" "}
          <CardDiscout text="Terraguard" logo="./logo pro.png" />{" "}
        </div>
      </Carousel>
    </div>
  );
}

export default DiscountsBLock;
