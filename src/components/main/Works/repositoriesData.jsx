import React from 'react'
import { Repository } from './WorkRepository/Repository';
import s from "./Works.module.css";

export const repositoriesData = (data) => {
    return (
      <ul className={s.works__wrapper}>
        {data.map((rep) => (
          <Repository
            key={rep.id}
            href={rep.html_url}
            name={rep.name}
            title={rep.description}
          />
        ))}
      </ul>
    );
  };