import React from "react";
import Frame from "./../../utils/img/Frame.svg";
import Search from "./../../utils/img/image.svg";
import s from "./header.module.css";

type PropsHeaderType ={
  name: string,
  handlerChange: () => void,
  submitHandler: () => void
}

export const Header:React.FC<PropsHeaderType> =({name, handlerChange, submitHandler}) => {
  return (
    <div className={s.header}>
      <img className={s.header__img} src={Frame} alt="Github" />
      <div className={s.header__search}>
        <img className={s.search__img} src={Search} alt="Search" />
        <form className={s.form__serch} onSubmit={submitHandler}>
          <input
            value={name}
            className={s.search__input}
            onChange={handlerChange}
            type="text"
            placeholder="Enter GitHub username"
          />
        </form>
        
      </div>
    </div>
  );
};
