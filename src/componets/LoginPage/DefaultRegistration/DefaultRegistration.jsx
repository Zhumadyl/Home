import React from "react";
import scss from "./DefaultRegistration.module.scss";
import Link from "next/link";
import Google from "../google/Google";
import Title from "../title/Title";

function DefaultRegistration({ onNextStep }) {
  const submit = (e) => {
    e.preventDefault();
    // Assuming a successful registration, you can trigger the next step
    onNextStep("telephoneAuthorization");
  };

  return (
    <div className={scss.defaultRegistration}>
      <Title title="Регистрация" />
      <form onSubmit={submit}>
        <div className={scss.form}>
          <div>
            <label>Имя</label>
          </div>
          <input type="text" placeholder="Иван " name="" id="" />{" "}
          <div>
            <label>Фамилия</label>
          </div>
          <input type="text" placeholder="Иванов " name="" id="" />{" "}
          <div>
            <label>Номер телефона </label>
          </div>
          <input type="number" placeholder="Номер телефона " name="" id="" />{" "}
          <div>
            <label>E-mail</label>
          </div>
          <input
            type="email"
            placeholder="ivanivanov@gmail.com"
            name=""
            id=""
          />
        </div>
        <div className={scss.btns}>
          <button type="submit" className={scss.btn1}>
            Далее
          </button>
          <div>
            <Google />
          </div>
          <Link href="/TelephoneAutorization">
            <p>Еще нет учетной записи? Зарегистрируйся прямо сейчас!</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default DefaultRegistration;





