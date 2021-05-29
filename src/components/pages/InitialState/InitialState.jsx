import React from "react";
import s from "./InitialState.module.css";
import search from "./../../../utils/img/search.png";

export const InitialState = () => {
  return (
    <div className={s.InitialState}>
  
        <img src={search} alt="" />
        <p>Start with searching a GitHub user</p>
      
    </div>
  );
};
