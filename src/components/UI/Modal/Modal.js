import React, { useContext } from 'react';
import { ModalContext } from "../../../context/modal-context";

import "./Modal.scss";

export const Modal = (props) => {
  const { children } = props;
  const { closeModal, modalOpened } = useContext(ModalContext)

  const handleClose = () => {
    closeModal();
    // const closeTimeout = setTimeout(() => {
    //
    //   clearTimeout(closeTimeout);
    // }, 300);
  };

  return (
    <div className={modalOpened ? "modal modal-visible" : "modal modal-hide"}>
      <div
        className={modalOpened ? "modal-window modal-window-visible" : "modal-window modal-window-hide"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='modal-content'>
          <button type="button" className="modal-close" onClick={() => handleClose()} />
          { children }
        </div>
      </div>
    </div>
  );
};

