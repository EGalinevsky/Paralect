import React, { useState, useEffect } from "react";
import Frame from "./../../other/img/Frame.svg";
import Search from "./../../other/img/image.svg";
import s from "./header.module.css";

export const Header = (props) => {
  return (
    <div className={s.header}>
      <img className={s.header__img} src={Frame} alt="" />
      <div className={s.header__search}>
        <img className={s.search__img} src={Search} alt="" />
        <form onSubmit={props.submitHandler}>
          <input
            value={props.name}
            className={s.search__input}
            onChange={props.HandlerChange}
            type="text"
            placeholder="Enter GitHub username"
          />
        </form>
        <p>{props.data}</p>
      </div>
    </div>
  );
};
