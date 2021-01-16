import React, { useState } from "react";

import './search.css'

export const Search = ({getQuery}) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    getQuery(q);
    setText(q)
  };

  return (
    <section className='search_Container'>
      <form>
        <input
          type="text"
          className="form_Control"
          placeholder="Search..."
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};
