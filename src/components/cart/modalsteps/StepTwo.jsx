import React, { useEffect, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import ModalNavigate from "../ModalNavigate";

const StepTwo = () => {
  const [cartState, setCartState] = useContext(CartContext);
  const { paymentStep, creditCard } = cartState;

  return (
    <div className=" min-h-full flex justify-between flex-col">
      <p>Hello, {creditCard.name}</p>
      <ModalNavigate>ถัดไป</ModalNavigate>
    </div>
  );
};

export default StepTwo;
