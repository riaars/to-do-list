import React from 'react';
import './Header.css'
import CalendarIcon from '../img/calendar.png'
import MenuIcon from '../img/hamburger.png'

const Header = () => {
  return (
    <div className="container-fluid">
        <div className='row no-gutters justify-content-md-center'>
          <div className="col d-flex justify-content-center bg-danger text-white">
          <button type="button" class="btn btn-danger btn-block">
            <img src= {MenuIcon} class="img-fluid" alt="Responsive image"></img>
          </button>
          </div>
          <div className="col d-flex justify-content-center bg-danger text-white">Calendo</div>
          <div className="col d-flex justify-content-center bg-danger text-white">
          <button type="button" class="btn btn-danger btn-block">
            <img src= {CalendarIcon} class="img-fluid" alt="Responsive image"></img>
          </button>
          </div>
        </div>
    </div>
  )
}

export default Header; 