import React from "react";
import scss from "./Pagination.module.scss";

function Pagination({ totalCard, cardPerPage, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCard / cardPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={scss.pagination}>
      {pageNumbers.map((number) => (
        <div className={scss.btnPaginate} key={number}>
          <button className={scss.btn} onClick={() => paginate(number)}>
            {number}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Pagination;
