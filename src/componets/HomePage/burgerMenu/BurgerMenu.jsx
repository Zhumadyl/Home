import React, { useState } from "react";
import scss from "./BurgerMenu.module.scss";
import Link from "next/link";

function BurgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const navigate = (link, item) => {
    return (
      <Link href={link} className={scss.menu_item}>
        {item}
      </Link>
    );
  };
  return (
    <div className={scss.burgerMenu}>
      <header className={scss.header}>
        <div className={scss.burger}>
          <Link href="/search">
            <button className={scss.search}>
              <img src="/assets/images/Vector.svg" alt="" />
            </button>
          </Link>
          <button className={scss.menu_button} onClick={() => setOpen(!isOpen)}>
            <img src="/assets/images/quill_hamburger.png" alt="" />
          </button>
        </div>
        <nav className={`${scss.menu} ${isOpen ? scss.active : ""}`}>
          <div className={scss.dropMenu}>
            <ul className={scss.menu_list}>
              {navigate("/link", "Аренда")}
              {navigate("/link", "Покупка")}
              {navigate("/link", "Продажа")}
              {navigate("/link", "Риелторы")}
              {navigate("/link", "Застройщики")}
            </ul>
            <div className={scss.line}></div>
            <Link href="/login">
              <div className={scss.login}>
                <img src="/assets/images/mdi_login.png" alt="" />
                <p>Войти</p>
              </div>
            </Link>
            <Link href="/link">
              <div className={scss.map}>
                <div>
                  <button className={scss.btn}>Найти по карте</button>
                </div>
              </div>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default BurgerMenu;
