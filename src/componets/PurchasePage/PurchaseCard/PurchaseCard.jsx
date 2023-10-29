import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scss from "./PurchaseCard.module.scss";
import { CustomPrevArrow, CustomNextArrow } from "./buttonSlider";
import Link from "next/link";

function PurchaseCard({ isCard, loading }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const [likedState, setLikedState] = useState(isCard.map(() => false));

  const handleLiked = (index) => {
    const updatedLikedState = [...likedState];
    updatedLikedState[index] = !updatedLikedState[index];
    setLikedState(updatedLikedState);
  };

  const sliderInfo = (index) => {
    return (
      <div>
        <div className={scss.cardSlider}>
          <div className={scss.img}>
            <Link href="/">
              <img src="/assets/images/Image.png" alt="" />
            </Link>
          </div>
          <div
            className={`${scss.heart} ${likedState[index] ? scss.liked : ""}`}
            onClick={() => handleLiked(index)}
          >
            <img src="/assets/images/Heart.png" alt="" />
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return <h1>Loading . . . </h1>;
  }

  return (
    <div className={scss.wrapper}>
      {isCard.map((card, i) => (
        <div className={scss.card} key={i}>
          <Slider {...settings}>
            {sliderInfo(i)}
            {sliderInfo(i)}
            {sliderInfo(i)}
          </Slider>
          <div className={scss.info}>
            <div className={scss.title}>
              <h2>{card.price + " C/мес"}</h2>
              <p>2-х комн. кв., 70 кв. м2, 7 эт. из 10</p>
              <h3>{card.street + "...."}</h3>
            </div>
            <div className={scss.rating}>
              <img src="/assets/images/vector.png" alt="" />
              <p>4,88</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PurchaseCard;
