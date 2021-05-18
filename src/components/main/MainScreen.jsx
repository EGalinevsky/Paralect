import React from "react";
import { InitialState } from "./InitialState/InitialState";
import { InitialStateUserNotFound } from "./InitialStateUserNotFound/InitialStateUserNotFound";
import s from "./Main.module.css";
import { NotRepository } from "./NotRepository/NotRepository";
import { Profile } from "./Profile/Profile";
import  {Works}  from "./Works/Works";

export const Main = (props) => {
  
  return (
    <div className={s.main}>
      <Profile data={props.data}/>
     
      {props.repositories.length ? <Works data={props.data} repositories={props.repositories}/> : <NotRepository />}
            
      
    </div>
  );
};
