import React from "react";
import { InitialState } from "./InitialState/InitialState";
import s from "./Main.module.css";
import { Profile } from "./Profile/Profile";
import { Works } from "./Works/Works";

export const Main = () => {
  return (
    <div className={s.main}>
      <Profile/>
      <Works />
      
      {/* <InitialState /> */}
    </div>
  );
};
