import React from "react";
import scss from "./CreatePage.module.scss";
import Header from "@/componets/HomePage/header/Header";

function CreatePage() {
  const selectors = (label) => {
    return (
      <label>
        {label}
        <select></select>
      </label>
    );
  };

  const checkbox = (text) => {
    return (
      <div className={scss.check}>
        <input type="checkbox" />
        <p>{text}</p>
      </div>
    );
  };
  return (
    <div className={scss.createPage}>
      <Header />
      <div className={scss.advert}>
        <div className={scss.createLeft}>
          <h1>Добавить объявление</h1>
          <div className={scss.blocks}>
            <h2>Основная информация </h2>
            <div className={scss.line}></div>
            <h2>Расположение</h2>
            <div className={scss.line}></div>
            <h2>Цена и условия сделки</h2>
            <div className={scss.line}></div>
            <h2>Галерея</h2>
            <div className={scss.line}></div>
            <h2>Текст</h2>
          </div>
        </div>
        <div className={scss.createRight}>
          <div className={scss.basis}>
            <h1>Основная информация об объекте</h1>
            <div>
              <label>
                Дата публикации
                <input type="text" placeholder="ДД.ММ.ГГГГ" />
                <img src="" alt="" />
              </label>
              {selectors("Тип сделки")}
            </div>
            <div>
              {selectors("Тип недвижимости")}
              {selectors("Количество комнат")}
              {selectors("Жилой комплекс")}
              {selectors("Серия")}
            </div>{" "}
            <div>
              {selectors("Высота потолков")}
              {selectors("Коммуникации")}
              {selectors("Тип строения")}
              {selectors("Год сдачи в эксплуатацию")}
            </div>
            <div className={scss.miniInput}>
              {selectors("Год сдачи в эксплуатацию")}
              {selectors("Год сдачи в эксплуатацию")}
              <label>
                Общая
                <input type="number" />
              </label>{" "}
              <label>
                Жилая
                <input type="number" />
              </label>{" "}
              <label>
                Кухня
                <input type="number" />
              </label>
            </div>
            <div>
              {selectors("Высота потолков")}
              {selectors("Коммуникации")}
              {selectors("Тип строения")}
              {selectors("Год сдачи в эксплуатацию")}
            </div>
          </div>
          <div className={scss.characteristics}>
            <div className={scss.title}>
              <h1>Основные характеристики</h1>
              <p>
                Чтобы потенциальному клиенту было легче определиться с выбором,
                укажите все возможные характеристики предлагаемой недвижимости.
              </p>
            </div>
            <div className={scss.checkboxes}>
              <div className={scss.box}>
                {checkbox("Телефон")}
                {checkbox("Интернет Wi-Fi")}
                {checkbox("Домофон")}
                {checkbox("Балкон")}
                {checkbox("Паркинг")}
                {checkbox("Охрана")}
                {checkbox("Видеонаблюдение")}
                {checkbox("Детская площадка")}
                {checkbox("Пластиковые окна")}
                {checkbox("Улучшенная планировка")}
              </div>
              <div className={scss.box}>
                {checkbox("Удобно под бизнес")}
                {checkbox("Неугловая")}
                {checkbox("Тихий двор")}
                {checkbox("Закрытый двор")}
                {checkbox("Кондиционер")}
                {checkbox("Кладовка")}
                {checkbox("Гардеробная")}
                {checkbox("Новая сантехника")}
                {checkbox("Хорошие соседи")}
              </div>
            </div>
          </div>
          <div className={scss.location}>
            <h1>Расположение</h1>
            <div>
              {selectors("Регион")}
              {selectors("Город, село, поселок")}
            </div>
            <div>
              {selectors("Район")}
              {selectors("Пересечение с")}
            </div>
            <div>
              <label>
                <input type="text" placeholder="Улица" />
              </label>
              <input type="text" placeholder="№ дома" />
              <input type="text" placeholder="№ кв." />
            </div>
          </div>
          <div className={scss.map}>
            <h1>Укажите расположение недвижимости на карте</h1>
            <img src="/assets/images/image 2.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
