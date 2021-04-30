import React from 'react';

export const Navbar: React.FC = () => (
  <nav className="indigo darken-2">
    <div className="nav-wrapper container">
      <a href="/" className="brand-logo">TypeScript</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Sass</a></li>
        <li><a href="/">Components</a></li>
      </ul>
    </div>
  </nav>
)