import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => (
  <header className={classes.header}>
    <div className={classes.headerContainer}>
      <h1 className={classes.headerTitle}>Bookstore CMS</h1>
      <nav>
        <ul className={classes.listContainer}>
          <li className={classes.listItem}>
            <NavLink to="/books" className={classes.navLink} activeClassName="is-active" exact>Books</NavLink>
          </li>

          <li className={classes.listItem}>
            <NavLink to="/categories" className={classes.navLink} activeClassName="is-active" exact>Categories</NavLink>
          </li>
        </ul>
      </nav>
    </div>

    <div>
      <i className="far fa-user fa-2x" />
    </div>
  </header>
);

export default Header;
