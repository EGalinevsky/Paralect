import React, { useState } from "react";
import Frame from "./../../other/img/Frame.svg";
import Search from "./../../other/img/image.svg";
import s from "./header.module.css";

export const Header = () => {

  const[name, setName] = useState('')

  const HandlerChange = (e) =>{
    setName(e.target.value)
  }
 
  

  return (
    <div className={s.header}>
      <img className={s.header__img} src={Frame} alt="" />
      <div className={s.header__search}>
      <img className={s.search__img} src={Search} alt="" />
        <input
          value={name}
          className={s.search__input}
          onChange={HandlerChange}
          type="text"
          placeholder="Enter GitHub username"
        />        
      </div>
    </div>
  );
};
