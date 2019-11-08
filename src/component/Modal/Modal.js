import React, {Component} from 'react';
import './Modal.css'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassname = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassname}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };
  
export default Modal;   