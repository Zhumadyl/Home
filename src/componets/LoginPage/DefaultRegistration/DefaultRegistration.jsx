// DefaultRegistration.jsx
import React from "react";
import scss from "./DefaultRegistration.module.scss";
import Link from "next/link";
import Google from "../google/Google";
import Title from "../title/Title";

function DefaultRegistration({ onNextStep, onLoginLinkClick, onGoogleLinkClick }) {
  const submit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    onNextStep("telephoneAuthorization");
  };

  const handleLoginLinkClick = () => {
    onLoginLinkClick();
  }

  const handleGoogleLinkClick = () => {
    onGoogleLinkClick();
  }

  return (
    <div className={scss.defaultRegistration}>
      <Title title="Регистрация" />
      <form onSubmit={submit}>
        <div className={scss.form}>
          <div>
            <label>Имя</label>
          </div>
          <input type="text" placeholder="Иван" name="firstName" id="firstName" />{" "}
          <div>
            <label>Фамилия</label>
          </div>
          <input type="text" placeholder="Иванов" name="lastName" id="lastName" />{" "}
          <div>
            <label>Номер телефона</label>
          </div>
          <input type="number" placeholder="Номер телефона" name="phoneNumber" id="phoneNumber" />{" "}
          <div>
            <label>E-mail</label>
          </div>
          <input
            type="email"
            placeholder="ivanivanov@gmail.com"
            name="email"
            id="email"
          />
        </div>
        <div className={scss.btns}>
          <button type="submit" className={scss.btn1}>
            Далее
          </button>
          <div onClick={handleGoogleLinkClick}>
            <Google />
          </div>
          <p onClick={handleLoginLinkClick}>У вас уже есть учетная запись? Войти</p>
        </div>
      </form>
    </div>
  );
}

export default DefaultRegistration;
