import React, { useState } from "react";
import s from "./Paginator.module.css";
import ReactPaginate from "react-paginate";

const renderData = data =>{
  return(
    <ul>
      {data.map((todo, index)=>{
        return <li key={todo.id}>{todo.name}</li>
      })}
    </ul>
  )
}

export const Paginator = (props) => {

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPage, setItemsPage] = useState(5);

  const handleClick = (e) =>{
    setCurrentPage(Number(e.target.id));
  }

  const pages = []
  for (let i=1; i<=Math.ceil(props.repositorie.length/itemsPage); ++i){
    pages.push(i);
  }

  const indexOfLastItem = currentPage*itemsPage;
  const indexOfFirstItem = indexOfLastItem - itemsPage;
  const currentItems = props.repositorie.slice(indexOfFirstItem, indexOfLastItem)

  const renderPageNumbers = pages.map(num=>{
    return(
      <li key={num.id} id={num} onClick={handleClick}>
        {num}
      </li>
    )
  })

  return (
    <ul className={s.paginator}>
      
       {renderPageNumbers}
       {renderData(currentItems)}
    </ul>
  );
};
