import React from "react";
import "./pag.css";
import { Page } from "./Page";
export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];


  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <Page
          key={number}
            number={number} paginate={paginate} />
        ))}

      </ul>
    </nav>
  );
};
