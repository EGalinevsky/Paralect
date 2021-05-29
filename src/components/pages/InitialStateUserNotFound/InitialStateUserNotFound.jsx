import React from "react";
import s from "./InitialStateUserNotFound.module.css";
import user from "./../../../utils/img/user.png";

export const InitialStateUserNotFound = () => {
  return (
    <div className={s.InitialStateUserNotFound}>
        
          <img src={user} alt="" />
          <p>User not found</p>
    </div>
  );
};
