import React from 'react'
import { Repository } from './WorkRepository/Repository';
import s from "./Works.module.css";

export const Works = () =>{
    return(
        <div className={s.main__works}>
            <h1 className={s.works__title}>Repositories (249)</h1>
            <Repository />
            <Repository />
            <Repository />
            <Repository />
        </div>
    )
}