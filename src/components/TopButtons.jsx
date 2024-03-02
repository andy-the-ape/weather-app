import React from 'react';
import './TopButtons.css';
import { Link } from 'react-router-dom';

function TopButtons() {

    const pages = [
        {name: 'Today', url: '/'},
        {name: 'History', url: '/history'}
    ]

  return (
    <div className='topbuttons'>{pages.map((page) => (
        <Link className='link' to={page.url}>
            <button key={page.name}>{page.name}</button>
        </Link>
    ))}</div>
  )
}

export default TopButtons;