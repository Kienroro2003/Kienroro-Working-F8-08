import React, { useRef } from "react";
import Portal from "../../utils/Portal";
import { CSSTransition } from "react-transition-group";

const DropdownBase = ({ show, onClose, children }) => {
  console.log(show);
  console.log(onClose);
  return (
    <>
      <CSSTransition in={show} timeout={300} classNames="anim" unmountOnExit>
        {(state) => (
          <Portal
            visible={state !== "exited"}
            onClose={onClose}
            bodyStyle={{ transition: "all 300ms linear" }}
            bodyClassName={"block"}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default DropdownBase;
