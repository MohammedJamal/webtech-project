import React, { useEffect, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import ModalNavigate from "../ModalNavigate";

const StepTwo = () => {
  const [cartState, setCartState] = useContext(CartContext);
  const { paymentStep, creditCard, setPaymentStep } = cartState;

  const goBack = () => setPaymentStep(1);

  return (
    <div className=" min-h-full flex justify-between flex-col">
      <p>Hello, {creditCard.name}</p>
      <ModalNavigate>
        <div className="flex justify-between">
          <button onClick={goBack} className="text-dark-1 px-2">ย้อนกลับ</button>
          <button className="text-blue-500 px-2">ถัดไป</button>
        </div>
      </ModalNavigate>
    </div>
  );
};

export default StepTwo;
