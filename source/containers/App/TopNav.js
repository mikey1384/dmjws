import React from 'react';
import {tabs} from 'Routes';
import {Link} from 'react-router';
import {Navbar, Nav} from 'reactstrap';

export default function TopNav({location}) {
  return (
    <Navbar color="faded" light toggleable>
      <Link to="/" className="navbar-brand">
        <img src="./public/DMJW's" />
      </Link>
      <Nav navbar>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={tab.pathname === location ? 'nav-item active' : 'nav-item'}
          >
            <Link
              className="nav-link"
              style={{cursor: 'pointer'}}
              to={`/${tab.pathname}`}
            >
              {tab.tabLabel}
            </Link>
          </li>
        ))}
      </Nav>
    </Navbar>
  )
}
