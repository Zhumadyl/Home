import React from "react";
import CardRieltors from "../cardRieltors/CardRieltors";
import scss from "./RieltorsBlock.module.scss";
import Link from "next/link";

function RieltorsBLock() {
  const card = () => {
    return (
      <CardRieltors
        img="./assets/images/avatar.png"
        title="Ольга Алексеевна"
        text="Риелтор стаж 5 лет"
      />
    );
  };
  return (
    <div className={scss.block}>
      <div className={scss.rieltorsBLock}>
        <div className={scss.title}>
          <h1>Риелторы</h1>
          <Link href="/asd">
            <div>
              <p>Смотреть больше</p>
              <img src="./assets/images/Union.png" alt="" />
            </div>
          </Link>
        </div>
        <div className={scss.rieltor}>
          <div>
            <CardRieltors
              img="./assets/images/avatar.png"
              title="Ольга Алексеевна"
              text="Риелтор стаж 5 лет"
            />{" "}
            <CardRieltors
              img="./assets/images/avatar.png"
              title="Ольга Алексеевна"
              text="Риелтор стаж 5 лет"
            />{" "}
            <CardRieltors
              img="./assets/images/avatar.png"
              title="Ольга Алексеевна"
              text="Риелтор стаж 5 лет"
            />{" "}
            <CardRieltors
              img="./assets/images/avatar.png"
              title="Ольга Алексеевна"
              text="Риелтор стаж 5 лет"
            />{" "}
          </div>
          <div>
            <CardRieltors
              img="./assets/images/avatar.png"
              title="Ольга Алексеевна"
              text="Риелтор стаж 5 лет"
            />{" "}
            <CardRieltors
              img="./assets/images/avatar.png"
              title="Ольга Алексеевна"
              text="Риелтор стаж 5 лет"
            />{" "}
            <CardRieltors
              img="./assets/images/avatar.png"
              title="Ольга Алексеевна"
              text="Риелтор стаж 5 лет"
            />{" "}
            <CardRieltors
              img="./assets/images/avatar.png"
              title="Ольга Алексеевна"
              text="Риелтор стаж 5 лет"
            />{" "}
          </div>
          <div>
            <CardRieltors
              img="./assets/images/avatar.png"
              title="Ольга Алексеевна"
              text="Риелтор стаж 5 лет"
            />{" "}
            <CardRieltors
              img="./assets/images/avatar.png"
              title="Ольга Алексеевна"
              text="Риелтор стаж 5 лет"
            />{" "}
            <CardRieltors
              img="./assets/images/avatar.png"
              title="Ольга Алексеевна"
              text="Риелтор стаж 5 лет"
            />{" "}
            <CardRieltors
              img="./assets/images/avatar.png"
              title="Ольга Алексеевна"
              text="Риелтор стаж 5 лет"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RieltorsBLock;
