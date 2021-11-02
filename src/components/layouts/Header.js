import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/books">Books</NavLink>
        </li>

        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
