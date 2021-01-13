import React from 'react'

export const Page = ({ number, paginate }) => {
  
  return (
    <li className='page-item'>
      <a onClick={() => paginate(number)} href='#!' className='page_Link'>
            {number}
      </a>
          </li>
    )
}
