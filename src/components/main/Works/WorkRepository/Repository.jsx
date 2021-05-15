import React from "react";
import { NotRepository } from "../../NotRepository/NotRepository";
import s from "./Repository.module.css";

export const Repository = (props) => {
  return (
    <div className={s.repository__item}>
      
      <a className={s.repository__link} href="#">
        <h2 className={s.repository__title}>{props.name}</h2>
      </a>

      <p className={s.repository__text}>
        {props.title}
      </p>
      
    </div>
  );
};
