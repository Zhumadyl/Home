import Link from "next/link";
import scss from "./PurchaseFilter.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import React, { useState } from "react";

function PurchaseFilter() {
  const [founderContent, setfounderContent] = useState("");
  const [isOpen, setOpen] = useState(false);

  const info = (option1, option2) => {
    return (
      <div className={scss.info}>
        <select>
          <option>{option1}</option>
        </select>
        <div className={scss.line}></div>
        <select>
          <option>{option2}</option>
        </select>
      </div>
    );
  };

  const checkbox = (checkbox) => {
    return (
      <div className={scss.checkboxInfo}>
        <input type="checkbox" />
        <p>{checkbox}</p>
      </div>
    );
  };

  const infoFilter = () => {
    return <div className={scss.filterInfo}>{info("Нет мин", "Нет макс")}</div>;
  };

  return (
    <div>
      {/* <Header /> */}
      <section className={scss.filter}>
        <input
          type="text"
          className={scss.founder}
          placeholder="Город, улица, адрес"
          value={founderContent}
          onChange={(e) => {
            setfounderContent(e.target.value);
          }}
        />
        <div className={scss.select}>
          <select>
            <option>Цена</option>
          </select>
        </div>
        <div className={scss.select}>
          <select>
            <option>Комнаты и ванны</option>
          </select>
        </div>
        <div className={scss.select}>
          <select>
            <option>Тип жилья</option>
          </select>
        </div>
        <div className={scss.advancedSelect}>
          <button className={scss.menu_button} onClick={() => setOpen(!isOpen)}>
            Еще
          </button>
          <nav className={`${scss.menu} ${isOpen ? scss.active : ""}`}>
            <div className={scss.dropMenu}>
              <div className={scss.title}>
                <h1>Расширенные фильтры</h1>
              </div>
              <div className={scss.date}>
                <h2>Дата Заселения</h2>
                <Calendar className={scss.calendar} locale="ru-RU" />
              </div>
              <div className={scss.infoFilter}>
                <h2>Квадратные метры</h2>
                {infoFilter()}
                <h2>Размер участка</h2>
                <div className={scss.filterInfo}>
                  {info("Нет мин", "Нет макс")}
                </div>{" "}
                <h2>Год постройки</h2>
                <div className={scss.filterInfo}>
                  {info("Нет мин", "Нет макс")}
                </div>
              </div>
              <div className={scss.checkbox}>
                <div className={scss.checkbox_block}>
                  <h2>Подвал</h2>
                  {checkbox("Есть подвал")}
                </div>
                <div className={scss.checkbox_block}>
                  <h2>Домашние животные</h2>
                  {checkbox("Можно с крупными собаками")}
                  {checkbox("Можно с маленькими собаками")}
                  {checkbox("Можно с кошками")}
                </div>
                <div className={scss.checkbox_block}>
                  <h2>Другие особенности</h2>
                  {checkbox("Должен быть кондиционер")}
                  {checkbox("Должен быть бассейн")}
                  {checkbox("На набережной")}
                  {checkbox("Парковка на территории комплекса")}
                  {checkbox("Прачечная в отделении")}
                  {checkbox("Многоквартирный жилой комплекс")}
                </div>
                <div className={scss.checkbox_block}>
                  <h2>Вид</h2>
                  {checkbox("Город")}
                  {checkbox("Горы")}
                  {checkbox("Парк")}
                  {checkbox("Реки / Озера")}
                </div>
              </div>
              <div className={scss.btns}>
                <p>Сбросить все фильтры</p>
                <button className={scss.btn}>Применить</button>
              </div>
            </div>
          </nav>
        </div>
        <button className={scss.btn}>Сохранить поиск</button>
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default PurchaseFilter;
