import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to={'/'} className="nav-link">Activities</Link>
      <Link to={'/mylist'} className="nav-link">My List</Link>
    </nav>
  )
}

export default Nav;
