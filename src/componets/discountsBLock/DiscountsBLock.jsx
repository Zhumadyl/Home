import React from "react";
import scss from "./DiscountsBLock.module.scss";
import CardDiscout from "../cardDiscount/CardDiscout";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function DiscountsBLock() {
  const responsive = {
    0: { items: 1 },
    576: { items: 1 },
    768: { items: 2 },
    992: { items: 3 },
    1300: { items: 4 },
  };

  const cards = (text, logo) => {
    return (
      <div className={scss.cards}>
        <CardDiscout text={text} logo={logo} />
      </div>
    );
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
        {cards("Terraguard", "./assets/images/logoterra.png")}
        {cards("Primex", "./assets/images/logo primex.png")}
        {cards("Starforge", "./assets/images/logo star.png")}
        {cards("ProBuilding", "./assets/images/logo pro.png")}
      </AliceCarousel>
    </div>
  );
}

export default DiscountsBLock;
