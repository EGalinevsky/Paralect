import React, { useEffect, useState } from "react";
import s from "./pagination.module.css";

type PropsType = {
  currentPage: number,
  login: string,
  setCurrentPage: (id:number) => void,
  totalRepositoriesCount: number,
  itemsPage: number,
  portionSize?: number,
}

export const Pagination: React.FC<PropsType> = ({ currentPage, login, setCurrentPage, totalRepositoriesCount, itemsPage, portionSize = 5 }) => {

  let [portionNumber, setPortionNumber] = useState<number>(1);
  const maxPageNumberLimit = 5;

  let pagesCount = Math.ceil(totalRepositoriesCount / itemsPage);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const hundleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > portionNumber * maxPageNumberLimit) {
      setPortionNumber(portionNumber + 1);
    }
  };
  const hundlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage - 1 < ((portionNumber - 1) * portionSize + 1)) {
      setPortionNumber(portionNumber - 1);
    }
  };

  let portionCount = Math.ceil(pagesCount / portionSize);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  useEffect(() => {
    setCurrentPage(1)
    setPortionNumber(1)
  }, [login, setCurrentPage])

  return (
    <div className={s.pagination}>
      <p className={s.pagination__text}>
        {`${currentPage * itemsPage - itemsPage + 1}-${currentPage * itemsPage
          } of ${totalRepositoriesCount} items`}
      </p>
      <li className={s.btn__prev}>
        <button
          onClick={hundlePrevBtn}
          disabled={currentPage === pages[0] ? true : false}

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
                  className={currentPage === p ? s.active : null!}
                  key={p}
                  onClick={() => setCurrentPage(p)}
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
          disabled={currentPage === pages[pages.length - 1] ? true : false}
          onClick={hundleNextBtn}
        >
          <span className={s.next}></span>
        </button>
      </li>
    </div>
  );
};
