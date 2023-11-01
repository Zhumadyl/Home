import React, { useState } from "react";
import scss from "./TelephoneAutorization.module.scss";
import Link from "next/link";
import Title from "../title/Title";

function TelephoneAutorization({ onNextStep }) {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNextStep("password");
  };

  const handleGoBack = () => {
    onNextStep("registration"); // Navigate to the "registration" step
  };

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!isNaN(value) && value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    }
  };

  return (
    <div className={scss.telephoneAutorization}>
      <Title title="Введите 4-значный код" />
      <form onSubmit={handleSubmit}>
        <p>Код Внизу</p>
        <div className={scss.cod}>
          {code.map((digit, index) => (
            <input
              key={index}
              type="number"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        <div className={scss.btns}>
          <button type="submit" className={scss.btn1}>
            Далее
          </button>
          <button className={scss.btn2}>Отправить повторно</button>
          <p onClick={handleGoBack}>Вернуться назад</p>
        </div>
      </form>
    </div>
  );
}

export default TelephoneAutorization;
