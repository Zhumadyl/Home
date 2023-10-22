import React from "react";
import scss from "./Title.module.scss";

function Title(props) {
  return (
    <div className={scss.title}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Title;
