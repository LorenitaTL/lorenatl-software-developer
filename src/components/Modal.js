import React from "react";
import ReactDOM from "react-dom";
export const Modal = ({ isShowing, content }) => {
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal">
            <div className="modal-content">{content}</div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};
