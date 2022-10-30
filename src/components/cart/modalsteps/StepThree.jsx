import React, { useEffect, useContext } from "react";
import ModalNavigate from "../ModalNavigate";
import {HiOutlineArrowLeft,HiOutlineArrowRight } from "react-icons/hi"
/* ======== Cart context ======== */
import { CartContext } from "../../../context/CartContext";

const StepThree = () => {
  const [cartState, setCartState] = useContext(CartContext);
  const { paymentStep, creditCard, setPaymentStep } = cartState;

  const goBack = () => setPaymentStep(2);

  return (
    <div className="relative min-h-full flex justify-between flex-col">
      <div>
        
      </div>
      <ModalNavigate>
        <div className="flex justify-between">
          <button onClick={goBack} className="text-dark-1 px-2">
            <HiOutlineArrowLeft className="inline mr-1" />
            <span>ย้อนกลับ</span>
          </button>
          <button className="text-blue-500 px-2">
            <span>ถัดไป</span>
            <HiOutlineArrowRight className="inline ml-1" />
          </button>
        </div>
      </ModalNavigate>
    </div>
  );
};

export default StepThree;