import React, { useState } from "react";

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState({
    creditCard: {
      // name: "Mastercard",
      // imgURL: "/mastercard.svg",
    },
    setCreditCard: (card) => {
      setCartState((prevCartState) => ({
        ...prevCartState,
        creditCard: card,
        paymentStep: 2,
      }));
    },
    isModalOpen: false,
    setIsModalOpen: (state) => {
      if (state === false) {
        // reset payment
        
        setCartState((prevCartState) => ({
          ...prevCartState,
          isModalOpen: state,
          purchaseDetail:{},
          paymentStep: 1,
        }));
        return;
      }

      setCartState((prevCartState) => ({
        ...prevCartState,
        isModalOpen: state,
      }));
    },
    paymentStep: 1,
    setPaymentStep: (step) => {
      if (step > 3) return; // prevent voerstep bug.
      setCartState((prevCartState) => ({
        ...prevCartState,
        paymentStep: step,
      }));
    },
    purchaseDetail: {
      // address1: "99/924  C/24  หมูบ้านพาร์คเวย์โฮม  ถนนรามคำแหง 150",
      // address2: "เขตสะพานสูง  แขวงสะพานสูง  กทม.10240",
      // cardNumber: "asdasd",
      // cardholderName: "asdas",
      // country: "Thailand",
      // cvc: "123",
      // email: "earth_killerdark@hotmail.com",
      // expire: "ascd",
      // firstname: "ศุภกร",
      // lastname: "เนตรสุวรรณ",
      // phonenumber: "+66959259515",
      // provinceState: "กรุงเทพมหานคร",
      // zipCode: "10240",
    },
    setPurchaseDetail: (detail) => {
      setCartState((prevCartState) => ({
        ...prevCartState,
        purchaseDetail: detail,
        paymentStep: 3, // It's now step 2 so next step is 3
      }));
    },
  });

  return (
    <CartContext.Provider value={[cartState, setCartState]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
