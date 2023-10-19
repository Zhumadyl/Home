import { useState } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { useTranslation } from "react-i18next";
import ReactSwitch from "react-switch";

export default function Header() {
  const { t, i18n } = useTranslation();

  const [isChecked, setIsChecked] = useState(i18n.language === "ru");

  const handleSwitchChange = (checked) => {
    setIsChecked(checked);
    const newLanguage = checked ? "ru" : "en";
    i18n.changeLanguage(newLanguage);
  };
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  const url = [
    { url: "/аренда-1", text: t("apartments") },
    { url: "/аренда-2", text: t("rooms") },
    { url: "/аренда-3", text: t("houses") },
    { url: "/аренда-4", text: t("townhousesAndCottages") },
  ];

  const urlData = [
    { url: "/покупка-1", text: t("newlyBuiltApartments") },
    { url: "/покупка-2", text: t("secondHandApartments") },
    { url: "/покупка-3", text: t("roomsAndShares") },
  ];

  const urlData1 = [
    { url: "/покупка-1", text: t("houses") },
    { url: "/покупка-2", text: t("townhousesAndCottages") },
    { url: "/покупка-3", text: t("dachas") },
    { url: "/покупка-4", text: t("plots") },
  ];

  const search = () => {
    return (
      <div className={scss.like}>
        <div className={scss.search}>
          <img src="./uiw_map.png" alt="" />
          <a href="/">{t("searchByMap")}</a>
        </div>
        <div className={scss.line1}></div>
        <h3>{t("placeAd")}</h3>
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
          <div className={scss.solo}>{rental_type(t("apartments"))}</div>
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
      label: t("rent"),
      links: [
        {
          text: (
            <span className={scss.navigate_text}>
              <span className={scss.navigate_text1}>
                {rental_type(t("rent"))}
                {renderDropList()}
                {search()}
              </span>
              <span className={scss.navigate_text1}>
                {rental_type(t("rent"))}
                {renderDropList()}
              </span>
            </span>
          ),
        },
      ],
    },
    {
      label: t("buy"),
      links: [
        {
          text: <div className={scss.sale1}>{renderDataSection()}</div>,
        },
      ],
    },
    {
      label: t("sell"),
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
          <a href="/">{t("realtors")}</a>
          <a href="/">{t("developers")}</a>
        </div>
      </div>
      <div className={scss.right}>
        {" "}
        <ReactSwitch
          onChange={handleSwitchChange}
          checked={isChecked}
          onColor="#407bff"
          offColor="#000"
          uncheckedIcon={false}
          checkedIcon={false}
          checkedHandleIcon={<div className={scss.switchLabel}>RU</div>}
          uncheckedHandleIcon={<div className={scss.switchLabel}>EN</div>}
        />
        <Link href="/login">
          <button className={scss.btn}>{t("login")}</button>
        </Link>
      </div>
    </header>
  );
}
