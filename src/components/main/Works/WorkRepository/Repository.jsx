import React from "react";
import s from "./Repository.module.css";

export const Repository = () => {
  return (
    <div className={s.repository__item}>
      <a className={s.repository__link} href="#">
        <h2 className={s.repository__title}>react-hot-loader</h2>
      </a>

      <p className={s.repository__text}>
        Tweak React components in real time. (Deprecated: use Fast Refresh
        instead.
      </p>
    </div>
  );
};
