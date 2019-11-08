import React from 'react';
import './Header.css';
import CalendarIcon from '../img/calendar.png';
import MenuIcon from '../img/hamburger.png';

const Header = () => {
  return (
    <div className="p-0 fixed-top calendo-theme container">
      <div className="no-gutters justify-content-md-center row">
        <div className="col d-flex justify-content-center text-white">
          <button type="button" className="btn btn-block">
            <img alt="Menu" src={MenuIcon} className="img-fluid" />
          </button>
        </div>
        <div className="col d-flex justify-content-center text-white">
          Calendo
        </div>
        <div className="col d-flex justify-content-center text-white">
          <button type="button" className="btn  btn-block">
            <img alt="Calendar" src={CalendarIcon} className="img-fluid" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
