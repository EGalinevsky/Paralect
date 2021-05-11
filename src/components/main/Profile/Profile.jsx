import React from 'react'
import s from "./Profile.module.css";
import Followers from './../../../other/img/shared.svg'
import Following from './../../../other/img/provate.svg'
import Avatar from './../../../other/img/image_1.png'

export const Profile = () =>{
    return(
        <div className={s.main__profile}>
        <img className={s.profile__img} src={Avatar} alt="" />

        <h2 className={s.profile__name}>Dan Abramov</h2>
        <a className={s.profile__link} href="#">gaearon</a>

        <div className={s.profile__follows}>
            <p className={s.profile__inner}>
                <img src={Followers} alt="" />
                24k
                followers</p>
            <p className={s.profile__inner}>
                <img src={Following} alt="" />
                26
                following</p>
        </div>
      </div>
    )
}