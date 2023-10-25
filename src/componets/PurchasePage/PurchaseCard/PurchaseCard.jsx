import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scss from "./PurchaseCard.module.scss";
import { CustomPrevArrow, CustomNextArrow } from "./buttonSlider";

function PurchaseCard() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  const [liked, isLiked] = useState(false);

  const handleLiked = () => {
    isLiked(!liked);
  };

  const sliderInfo = () => {
    return (
      <div>
        <div className={scss.cardSlider}>
          <div className={scss.img}>
            <img src="/assets/images/Image.png" alt="" />
          </div>
          <div
            className={`${scss.heart} ${liked ? scss.liked : ""}`}
            onClick={handleLiked}
          >
            <img src="/assets/images/Heart.png" alt="" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={scss.card}>
      <Slider {...settings}>
        {sliderInfo()}
        {sliderInfo()}
        {sliderInfo()}
      </Slider>
      <div className={scss.info}>
        <div className={scss.title}>
          <h2>25 000 С/мес</h2>
          <p>2-х комн. кв., 70 кв. м2, 7 эт. из 10</p>
          <h3>Бишкек, Ахунбаева №29...</h3>
        </div>
        <div className={scss.rating}>
          <img src="/assets/images/vector.png" alt="" />
          <p>4,88</p>
        </div>
      </div>
    </div>
  );
}

export default PurchaseCard;
