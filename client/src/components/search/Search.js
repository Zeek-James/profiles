import React, { useState } from "react";

import './search.css'

export const Search = ({getQuery}) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className='search'>
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
