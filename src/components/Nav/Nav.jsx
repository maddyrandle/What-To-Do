import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ myList }) => {

  return (
    <nav className="nav">
      <Link
        to={'/'}
        className="activities-btn"
      >
        <p id="activities">Activities</p>
      </Link>

      <Link
        to={'/mylist'}
        className="favorites-btn"
      >
        <p id="mylist">My List</p>
      </Link>
    </nav>
  )
}

export default Nav;
