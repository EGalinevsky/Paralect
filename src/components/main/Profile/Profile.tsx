import React from "react";
import s from "./Profile.module.css";
import Followers from "./../../../other/img/shared.svg";
import Following from "./../../../other/img/provate.svg";
import { followers } from "../../../other/utils";
import { Link } from "react-router-dom"

type Props = {
  avatar_url: string
  name: string
  html_url: string
  login: string
  followersItem: number
  following: number
}


export const Profile: React.FC<Props> = ({ avatar_url, name, html_url, login, followersItem, following }) => {
  console.log(html_url)
  return (
    <div className={s.main__profile}>
      <img className={s.profile__img} src={avatar_url} alt="" />

      <h2 className={s.profile__name}>{name}</h2>
      <Link to={html_url}  className={s.profile__link} >
        {login}
      </Link >

      <div className={s.profile__follows}>
        <p className={s.profile__inner}>
          <img src={Followers} alt="" />
          {followers(followersItem)}
          &nbsp;followers
        </p>
        <p className={s.profile__inner}>
          <img src={Following} alt="" />
          {following}
          &nbsp;following
        </p>
      </div>
    </div>
  );
};
