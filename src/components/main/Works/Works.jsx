import React, { useEffect, useState } from "react";
import { Repository } from "./WorkRepository/Repository";
import s from "./Works.module.css";


export const Works = React.memo((props) => {
  debugger;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPage, setItemsPage] = useState(4);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);


  const repositoriesData = (data) => {
    return (
      <ul>
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

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(props.repositories.length / itemsPage); ++i) {
    pages.push(i);
  }
  
  const indexOfLastItem = currentPage * itemsPage;
  const indexOfFirstItem = indexOfLastItem - itemsPage;
  const currentItems = props.repositories.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const hundleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const hundlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage - 2 < minPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const renderPageNumbers = pages.map((num) => {
    if (num < maxPageNumberLimit + 1 && num > minPageNumberLimit) {
      return (
        <li
          key={num}
          id={num}
          onClick={handleClick}
          className={currentPage == num ? s.active : null}
        >
          {num}
        </li>
      );
    } else {
      return null;
    }
  });

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={hundleNextBtn}>&hellip;</li>;
  }
  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={hundlePrevBtn}>&hellip;</li>;
  }

  useEffect(()=>{
    setCurrentPage(1)
    setMinPageNumberLimit(0)
  },[props.data,pageNumberLimit])

  return (
    <div className={s.main__works}>
      <h1 className={s.works__title}>
        Repositories ({props.repositories.length})
      </h1>

      {repositoriesData(currentItems)}
      <ul className={s.paginator}>
      {`${(currentPage*itemsPage)-itemsPage+1}-${currentPage*itemsPage} of ${props.repositories.length} items`}
        <li>
          <button
            onClick={hundlePrevBtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            <span className={s.prev}></span>
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li>
          <button
            disabled={currentPage == pages[pages.length - 1] ? true : false}
            onClick={hundleNextBtn}
          >
            <span className={s.next}></span>
          </button>
        </li>
      </ul>
    </div>
  );
});
