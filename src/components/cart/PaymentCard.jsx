import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const PaymentCard = ({ name, imgURL, isEnable }) => {
  const [cartState, setCartState] = useContext(CartContext);
  const {setPaymentStep, paymentStep, setCreditCard} = cartState;

  const nextStep = (cardDetail) => setCreditCard(cardDetail);

  /*
    Updateing creditecard detail
    Interface {
      name: string,
      imgURL: string
    }
  */

  return (
    <div
      onClick={() => isEnable ? nextStep({name, imgURL}) : null}
      className={`${
        isEnable
          ? "bg-gray-50 cursor-pointer hover:scale-[1.02] hover:shadow-md"
          : "bg-gray-100 opacity-40"
      } relative w-full max-w-[20em] mx-auto sm:max-w-none sm:mx-0 border rounded-lg border-lighten-1 p-2 min-h-[10em] flex items-center justify-center transition-all duration-100 group`}
    >
      <p
        className={`text-bluegrey-dark-2 px-3 roudned-full border inline-block rounded-full bg-white border-lighten-1 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 whitespace-nowrap`}
      >
        {name}
      </p>
      <img
        src={imgURL}
        alt={name + "_img"}
        className={
          isEnable
            ? "group-hover:scale-110 ease-out duration-200 delay-75 group-hover:rotate-[6deg]"
            : ""
        }
      />
    </div>
  );
};

export default PaymentCard;
