import React, {Component} from 'react';
import './Modal.css';

const Modal = ({handleClose, show, children}) => {
  const showHideClassname = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className="container pop-up">
      <div className={showHideClassname}>
        <section className="modal-main">
          <button
            className="btn btn-warning"
            style={{borderRadius: '20px', color: 'white'}}
            onClick={handleClose}>
            close
          </button>
          <div className="header-title">CREATE NEW SCHEDULE</div>
          {children}
        </section>
      </div>
    </div>
  );
};

export default Modal;
