import React, { useState } from "react";

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState({
    isModalOpen: true,
    setIsModalOpen: (state) => {
      if (state === false) {
        // reset payment
        cartState.setPaymentStep(1);
      }

      setCartState((prevCartState) => ({
        ...prevCartState,
        isModalOpen: state,
      }));
    },
    paymentStep: 1,
    setPaymentStep: (step) =>
      setCartState((prevCartState) => ({
        ...prevCartState,
        paymentStep: step,
      })),
  });

  React.useEffect(() => {
    console.log(cartState);
  });

  return (
    <CartContext.Provider value={[cartState, setCartState]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
