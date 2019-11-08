import React from 'react';
import './Header.css'
import CalendarIcon from '../img/calendar.png'
import MenuIcon from '../img/hamburger.png'
import {Col, Row , Container} from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";


const Header = () => {
  return (


        <Container className="p-0 fixed-top">

          <Row className='no-gutters justify-content-md-center'>
            <Col className="d-flex justify-content-center bg-danger text-white">
              <button type="button" className="btn btn-danger btn-block">
                <Image alt="Menu" src={MenuIcon} className="img-fluid" />
              </button>
            </Col>
            <div className="col d-flex justify-content-center bg-danger text-white">Calendo</div>
            <div className="col d-flex justify-content-center bg-danger text-white">
              <button type="button" className="btn btn-danger btn-block">
                <Image alt="Calendar" src={CalendarIcon} className="img-fluid" />
              </button>
            </div>
          </Row>

        </Container>


  )
}

export default Header; 