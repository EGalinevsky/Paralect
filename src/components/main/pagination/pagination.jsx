import React from "react";
import s from "./pagination.module.css";

export const Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalRepositoriesCount / props.itemsPage);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  console.log(pages);
  return (
    <div className={s.pagination}>
      {pages.map((p) => {
        return (
          <button
            className={props.currentPage === p && s.active}
            key={p}
            onClick={() => props.setCurrentPage(p)}
          >
            {p}
          </button>
        );
      })}
    </div>
  );
};
