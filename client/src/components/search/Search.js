import React, { useState } from "react";

import './search.css'

export const Search = ({getQuery}) => {
  const [text, setText] = useState("");

  const onClick = () => {
    getQuery(text);
    setText('')
  };

  return (
    <section className='search_Container'>
      <form>
        <input
          type="text"
          className="form_Control"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='search' onClick={onClick}>Search </button>
      </form>
    </section>
  );
};
