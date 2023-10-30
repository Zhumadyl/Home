import React from "react";
import scss from "./DiscountsBLock.module.scss";
import CardDiscout from "../cardDiscount/CardDiscout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CustomPrevArrow, CustomNextArrow } from "./ButtonSLider";
import { useTranslation } from "react-i18next";
import Title from "../title/Title";

function DiscountsBLock() {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const card = [
    { text: "Terraguard", logo: "./assets/images/logoterra.png" },
    { text: "Primex", logo: "./assets/images/logo primex.png" },
    { text: "Starforge", logo: "./assets/images/logo star.png" },
    { text: "ProBuilding", logo: "./assets/images/logo pro.png" },
  ];
  const duplicatedCards = card.concat(card);

  return (
    <div className={scss.discountsBLock}>
      <Title title={t("header.Promotions")} />
      <Slider {...settings}>
        {duplicatedCards.map((card, index) => (
          <div key={index} className={scss.cards}>
            <CardDiscout text={card.text} logo={card.logo} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default DiscountsBLock;
