import React from "react";

import s from "./Repository.module.css";

export const Repository = (props) => {
  return (
    <div className={s.repository__item}>
      <div>
        <a target="_blank" className={s.repository__link} href={props.href}>
          <h2 className={s.repository__title}>{props.name}</h2>
        </a>

        <p className={s.repository__text}>
          {props.title ? props.title : <>&nbsp;</>}
        </p>
      </div>
    </div>
  );
};
