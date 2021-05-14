import React from 'react'
import { Repository } from './WorkRepository/Repository';
import s from "./Works.module.css";

export const Works = (props) =>{
    return(
        <div className={s.main__works}>
            <h1 className={s.works__title}>Repositories ({props.repositories.length})</h1>
            {props.repositories.map((rep) => <Repository key={rep.id} rep={rep} name={rep.name} title={rep.full_name}  />)}
        </div>
    )
}