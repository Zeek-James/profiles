import React, { useState } from "react";
import { Header } from "../Header/Header";
import { Pagination } from "../Pagination/Pagination";
// import { Search } from "../search/Search";

import "./nav.css";

export const Nav = ({postsPerPage, totalPosts, paginate}) => {
    // const [query, setQuery] = useState('')  

  
  return (
    <nav className='nav_Container'>
      <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={ paginate}/>
        <Header />
      <div className="nav_fadeBottom" />
    </nav>
  );
};
