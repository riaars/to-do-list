import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-color">
      <nav className=" container navbar navbar-expand-lg header-color">
        <a
          className="navbar-brand"
          href="#"
          style={{textDecoration: 'note', color: 'white', fontSize: '32px'}}>
          Calendo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
};

export default Header;
