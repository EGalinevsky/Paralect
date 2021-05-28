import React from "react";
import s from "./Main.module.css";
import { NotRepository } from "../pages/NotRepository/NotRepository";
import { Profile } from "./Profile/Profile";
import  {Works}  from "./Works/Works";
import { WorksContainer } from "./Works/WorksContainer";

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
      {props.data.public_repos ?
        // <Works public_repos={props.data.public_repos} repositories={props.repositories} />
        <WorksContainer data={props.data} repositories={props.repositories}/>
       : 
        <NotRepository />
      }
    </div>
  );
};
