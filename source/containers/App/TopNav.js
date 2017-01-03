import React from 'react';
import {tabs} from 'Routes';
import {Link} from 'react-router';

export default function TopNav({location}) {
  return (
    <nav className="navbar navbar-light bg-faded">
      <Link to="/" className="navbar-brand">Minecraft</Link>
      <ul className="nav navbar-nav">
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
      </ul>
    </nav>
  )
}
