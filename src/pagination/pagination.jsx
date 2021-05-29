import React, { useEffect, useState } from "react";
import s from "./pagination.module.css";

export const Pagination = (props) => {
  const portionSize = 5;
  let [portionNumber, setPortionNumber] = useState(1);
  const maxPageNumberLimit  = 5; 

  let pagesCount = Math.ceil(props.totalRepositoriesCount / props.itemsPage);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const hundleNextBtn = () => {
    props.setCurrentPage(props.currentPage + 1);
    if (props.currentPage + 1 > portionNumber*maxPageNumberLimit) {      
      setPortionNumber(portionNumber + 1);
    }
  };
  const hundlePrevBtn = () => {
    props.setCurrentPage(props.currentPage - 1);
    if (props.currentPage - 1 < ((portionNumber - 1) * portionSize + 1)) {
      setPortionNumber(portionNumber - 1);
    }
  };

  let portionCount = Math.ceil(pagesCount / portionSize);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  useEffect(()=>{
    props.setCurrentPage(1)
    setPortionNumber(1)
  },[props.login])

  return (
    <div className={s.pagination}>
      <p className={s.pagination__text}>
        {`${props.currentPage * props.itemsPage - props.itemsPage + 1}-${
          props.currentPage * props.itemsPage
        } of ${props.totalRepositoriesCount} items`}
      </p>
      <li className={s.btn__prev}>
          <button
            onClick={hundlePrevBtn}
            disabled={props.currentPage === pages[0] ? true : false}
            
          >
            <span className={s.prev}></span>
          </button>
        </li>
      {portionNumber > 1 && (
        <button
          className={s.btn_paginator}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          ...
        </button>
      )}
      <ul>
        <li className={s.btn__item}>
          {pages
            .filter(
              (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
            )
            .map((p) => {
              return (
                <button
                  className={props.currentPage === p ? s.active : null}
                  key={p}
                  onClick={() => props.setCurrentPage(p)}
                >
                  {p}
                </button>
              );
            })}
        </li>
      </ul>

      {portionCount > portionNumber && (
        <button
          className={s.btn_paginator}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          ...
        </button>
        
      )}
      <li className={s.btn__prev}>
          <button
            disabled={props.currentPage === pages[pages.length - 1] ? true : false}
            onClick={hundleNextBtn}
          >
            <span className={s.next}></span>
          </button>
        </li>
    </div>
  );
};
