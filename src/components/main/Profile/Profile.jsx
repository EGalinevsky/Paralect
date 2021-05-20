import React from 'react'
import s from "./Profile.module.css";
import Followers from './../../../other/img/shared.svg'
import Following from './../../../other/img/provate.svg'

export const Profile = (props) =>{

    
    return(
        <div className={s.main__profile}>
        <img className={s.profile__img} src={props.data.avatar_url} alt="" />

        <h2 className={s.profile__name}>{props.data.name}</h2>
        <a target='_blank' className={s.profile__link} href={props.data.html_url}>{props.data.login}</a>

        <div className={s.profile__follows}>
            
            <p className={s.profile__inner}>
                <img src={Followers} alt="" />
                &nbsp;{props.data.followers}
                &nbsp;followers</p>
            <p className={s.profile__inner}>
                <img src={Following} alt="" />
                &nbsp;{props.data.following} 
                &nbsp;following</p>
        </div>
      </div>
    )
}