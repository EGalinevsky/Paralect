import React from "react";
import s from "./Profile.module.css";
import Followers from "./../../../other/img/shared.svg";
import Following from "./../../../other/img/provate.svg";
import { followers } from "../../../other/utils";

type Props = {
  avatar_url : string
  name : string
  html_url : string
  login : string
  followersItem : number
  following : number
}
  

export const Profile: React.FC<Props> = ({avatar_url,name,html_url,login,followersItem,following}) => {    
  return (
    <div className={s.main__profile}>
      <img className={s.profile__img} src={avatar_url} alt="" />

      <h2 className={s.profile__name}>{name}</h2>
      <a target="_blank" className={s.profile__link} href={html_url}>
        {login}
      </a>

      <div className={s.profile__follows}>
        <p className={s.profile__inner}>
          <img src={Followers} alt="" />
          &nbsp;{followers(followersItem)}
          &nbsp;followers
        </p>
        <p className={s.profile__inner}>
          <img src={Following} alt="" />
          &nbsp;{following}
          &nbsp;following
        </p>
      </div>
    </div>
  );
};
