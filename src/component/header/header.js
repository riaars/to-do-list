import React from 'react';
import './header.css'
import CalendarIcon from '../img/calendar.png'
import MenuIcon from '../img/hamburger.png'

const Header = () => {
  return (
    <div className="container-fluid">
        <div className='row justify-content-md-center'>
          <div className="col d-flex justify-content-center">
          <button type="button" class="btn-primary btn-sm">
            <img src= {MenuIcon} alt="Responsive image"></img>
          </button>
          </div>
          <div className="col d-flex justify-content-center ">
          <div className="appName"> Calendo </div>
          </div>
          <div className="col d-flex justify-content-center">
          <button type="button" class="btn-secondary btn-sm">
            <img src= {CalendarIcon} alt="Responsive image"></img>
          </button>
          </div>
        </div>
    </div>
  )
}

export default Header; 