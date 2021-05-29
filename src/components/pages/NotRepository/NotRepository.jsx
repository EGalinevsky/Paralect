import React from "react";
import s from "./NotRepository.module.css";
import rep from "./../../../utils/img/rep.png";

export const NotRepository = () => {
  return (
    <div className={s.NotRepository}>
  
        <img src={rep} alt="" />
        <p>Repository list is empty</p>
      
    </div>
  );
};
