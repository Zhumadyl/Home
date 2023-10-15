import React from "react";
import scss from "./CardRieltors.module.scss";
import Link from "next/link";

function CardRieltors(props) {
  return (
    <div className={scss.cardRieltors}>
      <Link href="/dsad">
        <div className={scss.cardRieltor}>
          <div className={scss.cardImg}>
            <img src={props.img} alt="" />
          </div>
          <div className={scss.cardInfo}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardRieltors;
