import { useState } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import BurgerMenu from "../burgerMenu/BurgerMenu";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  const url = [
    { url: "/аренда-1", text: "Квартиры" },
    { url: "/аренда-2", text: "Комнаты" },
    { url: "/аренда-3", text: "Дома" },
    { url: "/аренда-4", text: "Таунхаусы и коттеджи" },
  ];

  const urlData = [
    { url: "/покупка-1", text: "Квартиры в новостройках" },
    { url: "/покупка-2", text: "Квартиры во вторичках" },
    { url: "/покупка-3", text: "Комнаты и доли" },
  ];

  const urlData1 = [
    { url: "/покупка-1", text: "Дома" },
    { url: "/покупка-2", text: "Таунхаусы и коттеджы" },
    { url: "/покупка-3", text: "Дачи" },
    { url: "/покупка-4", text: "Участки" },
  ];

  const search = () => {
    return (
      <div className={scss.like}>
        <div className={scss.search}>
          <img src="./uiw_map.png" alt="" />
          <a href="/">Поиск по карте</a>
        </div>
        <div className={scss.line1}></div>
        <h3>Разместить объявление</h3>
      </div>
    );
  };
  function renderLinkList(linkData) {
    return (
      <span className={scss.sale}>
        {linkData.map((link) => (
          <a key={link.url} href={link.url}>
            {link.text}
          </a>
        ))}
      </span>
    );
  }

  function renderDropList() {
    return (
      <span className={scss.navigate_text1}>
        {url.map((link) => (
          <a key={link.url} href={link.url}>
            {link.text}
          </a>
        ))}
      </span>
    );
  }

  const renderDataSection = () => {
    return (
      <div className={scss.data}>
        <div>
          <div className={scss.solo}>{rental_type("Квартиры")}</div>
          {renderLinkList(urlData)}
          {search()}
        </div>
        <div className={scss.colorB}>{renderLinkList(urlData1)}</div>
      </div>
    );
  };

  const rental_type = (text) => {
    return <span className={scss.rental_type}>{text}</span>;
  };

  const navigationItems = [
    {
      label: "Аренда",
      links: [
        {
          text: (
            <span className={scss.navigate_text}>
              <span className={scss.navigate_text1}>
                {rental_type("Длительная аренда")}
                {renderDropList()}
                {search()}
              </span>
              <span className={scss.navigate_text1}>
                {rental_type("Посуточная аренда")}
                {renderDropList()}
              </span>
            </span>
          ),
        },
      ],
    },
    {
      label: "Покупка",
      links: [
        {
          text: <div className={scss.sale1}>{renderDataSection()}</div>,
        },
      ],
    },
    {
      label: "Продажа",
      links: [
        {
          text: <div>{renderDataSection()}</div>,
        },
      ],
    },
  ];

  return (
    <header className={scss.header}>
      <div className={scss.left}>
        <div className={scss.logo}>
          <img src="./assets/images/Logo.svg" alt="Logo" />
          <div className={scss.BurgerMenu}>
            <BurgerMenu />
          </div>
          <div className={scss.line}></div>
        </div>
        <div className={scss.navigate}>
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className={scss.dropdownTrigger}
              onMouseEnter={() => toggleDropdown(index)}
              onMouseLeave={() => toggleDropdown(index)}
            >
              <a href="/">{item.label}</a>
              {activeDropdown === index && (
                <div className={scss.dropdown}>
                  {item.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className={link.className || ""}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="/">Риелторы</a>
          <a href="/">Застройщики</a>
        </div>
      </div>
      <Link href="/login">
        <div className={scss.right}>
          <button className={scss.btn}>Войти</button>
        </div>
      </Link>
    </header>
  );
}
