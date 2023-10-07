import React from "react";
import scss from "./DiscountsBLock.module.scss";
import CardDiscout from "../cardDiscount/CardDiscout";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function DiscountsBLock() {
  const responsive = {
    0: {
      items: 1,
    },
  };
  return (
    <div className={scss.discountsBLock}>
      <h1>Акции и скидки на новостройки</h1>
      <AliceCarousel
        autoPlay
        autoPlayInterval={2000}
        buttonsDisabled={true}
        responsive={responsive}
        infinite={true}
      >
        <div className={scss.cards}>
          <CardDiscout text="Terraguard" logo="./assets/images/logoterra.png" />{" "}
          <CardDiscout text="Primex " logo="./assets/images/logo primex.png" />{" "}
          <CardDiscout text="Starforge" logo="./assets/images/logo star.png" />{" "}
          <CardDiscout text="ProBuilding" logo="./assets/images/logo pro.png" />{" "}
        </div>
        <div className={scss.cards}>
          <CardDiscout text="Terraguard" logo="./assets/images/logoterra.png" />{" "}
          <CardDiscout
            text="Terraguard"
            logo="./assets/images/logo primex.png"
          />{" "}
          <CardDiscout text="Terraguard" logo="./assets/images/logo star.png" />{" "}
          <CardDiscout text="Terraguard" logo="./assets/images/logo pro.png" />{" "}
        </div>
      </AliceCarousel>
    </div>
  );
}

export default DiscountsBLock;
