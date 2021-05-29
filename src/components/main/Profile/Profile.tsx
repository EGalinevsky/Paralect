import React from "react";
import s from "./Profile.module.css";
import Followers from "./../../../utils/img/shared.svg";
import Following from "./../../../utils/img/provate.svg";
import { followers } from "../../../utils/utils";

type Props = {
  avatar_url: string
  name: string
  html_url: string
  login: string
  followersItem: number
  following: number
}

export const Profile: React.FC<Props> = ({ avatar_url, name, html_url, login, followersItem, following }) => {

  return (
    <div className={s.main__profile}>
      <img className={s.profile__img} src={avatar_url} alt="avatar_url" />

      <h2 className={s.profile__name}>{name}</h2>
      <a rel="noreferrer" href={html_url} target='_blank'  className={s.profile__link} >
        {login}
      </a >

      <div className={s.profile__follows}>
        <p className={s.profile__inner}>
          <img src={Followers} alt="Followers" />
          {followers(followersItem)}
          &nbsp;followers
        </p>
        <p className={s.profile__inner}>
          <img src={Following} alt="Following" />
          {following}
          &nbsp;following
        </p>
      </div>
    </div>
  );
};
