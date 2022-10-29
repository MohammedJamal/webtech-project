import React from "react";
/* =========== Modal layout ===========*/
import ModalHead from "./ModalHead";

const ModalPage = ({ children }) => {
  return (
    <>
      <ModalHead />
      <ModalContentWrapper>{children}</ModalContentWrapper>
    </>
  );
};

const ModalContentWrapper = ({ children }) => {
  return <div className="p-6 flex-1">{children}</div>;
};

export default ModalPage;
