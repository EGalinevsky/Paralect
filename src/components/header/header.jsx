import React from "react";
import Frame from "./../../utils/img/Frame.svg";
import Search from "./../../utils/img/image.svg";
import s from "./header.module.css";

export const Header = React.memo((props) => {
  return (
    <div className={s.header}>
      <img className={s.header__img} src={Frame} alt="Github" />
      <div className={s.header__search}>
        <img className={s.search__img} src={Search} alt="Search" />
        <form className={s.form__serch} onSubmit={props.submitHandler}>
          <input
            value={props.name}
            className={s.search__input}
            onChange={props.handlerChange}
            type="text"
            placeholder="Enter GitHub username"
          />
        </form>
        <p>{props.data}</p>
      </div>
    </div>
  );
});
