import React from 'react';
import {tabs} from 'Routes';
import {Link} from 'react-router';

export default function TopNav({location}) {
  return (
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Minecraft</Link>
        </div>
        <ul className="nav navbar-nav">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={tab.pathname === location && 'active'}
            >
              <Link
                style={{cursor: 'pointer'}}
                to={`/${tab.pathname}`}
              >
                {tab.tabLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
