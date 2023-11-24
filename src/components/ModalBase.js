import React from "react";

import { CSSTransition } from "react-transition-group";
import Portal from "../utils/Portal";

const ModalBase = ({ visible, onClose, children }) => {
  return (
    <>
      <CSSTransition
        in={visible}
        timeout={250}
        classNames={"zoom"}
        unmountOnExit
      >
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            containerClassName="flex items-center justify-center"
            bodyStyle={{ transition: "all 250ms" }}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
