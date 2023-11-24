import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}
const portalWrapperElm = createPortalWrapper();
const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  containerStyle = {},
  bodyStyle = {},
  onClose = () => {},
  visible = false,
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);
  const renderContent = (
    <div
      className={`fixed inset-0 z-[9999] ${containerClassName}`}
      style={containerStyle}
      onClick={() => {
        console.log("click2");
        onClose();
      }}
    >
      <div
        className="absolute inset-0 z-[99998] bg-black overlay bg-opacity-20"
        onClick={() => {
          console.log("click");
          console.log(onClose);
        }}
      ></div>
      <div
        className={`content relative z-[99999] ${bodyClassName}`}
        style={bodyStyle}
      >
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapperElm);
};
Portal.propTypes = {
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default Portal;
