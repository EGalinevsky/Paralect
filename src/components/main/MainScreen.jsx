import React from "react";
import s from "./Main.module.css";
import { NotRepository } from "../pages/NotRepository/NotRepository";
import { Profile } from "./Profile/Profile";
import  {Works}  from "./Works/Works";

export const Main = (props) => {
  
  return (
    <div className={s.main}>
      <Profile
        avatar_url={props.data.avatar_url}
        html_url={props.data.html_url}
        name={props.data.name}
        login={props.data.login}
        followersItem={props.data.followers}
        following={props.data.following}
      />
      {props.repositories.length ?
        <Works  repositories={props.repositories} />
       : 
        <NotRepository />
      }
    </div>
  );
};
