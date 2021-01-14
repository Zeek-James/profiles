import React from "react";
import { Header } from "../Header/Header";
import { Pagination } from "../Pagination/Pagination";

import "./nav.css";

export const Nav = ({postsPerPage, totalPosts, paginate, loading}) => {

  
  return (
    <nav className='nav_Container'>
      <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} loading={loading} paginate={ paginate}/>
        <Header />
      <div className="nav_fadeBottom" />
    </nav>
  );
};
