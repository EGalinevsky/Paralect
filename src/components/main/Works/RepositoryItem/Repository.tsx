import React from "react";
import s from "./Repository.module.css";

type PropsRepositoryType ={
  key: number,
  href: string,
  name: string,
  title: string
}

export const Repository:React.FC<PropsRepositoryType> = ({href,name, title}) => {
  return (
    <div className={s.repository__item}>
      <div>
        <a target="_blank" className={s.repository__link} rel="noreferrer" href={href}>
          <h2 className={s.repository__title}>{name}</h2>
        </a>

        <p className={s.repository__text}>
          {title ? title : null}
        </p>
      </div>
    </div>
  );
};
