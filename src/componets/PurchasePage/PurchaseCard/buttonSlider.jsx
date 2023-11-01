import React from "react";
import scss from "./PurchaseCard.module.scss";

const CustomPrevArrow = (props) => (
  <div className={scss["custom-prev-arrow"]} onClick={props.onClick}>
    <img src="/assets/images/Next button left.png" alt="" />
  </div>
);

const CustomNextArrow = (props) => (
  <div className={scss["custom-next-arrow"]} onClick={props.onClick}>
    <img src="/assets/images/Next button.png" alt="" />
  </div>
);

export { CustomPrevArrow, CustomNextArrow };
