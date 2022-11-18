import React, { useEffect } from "react";
import PaymentCard from "../PaymentCard";
import { modalPageOneAnimation } from "../../../utils/animation";
import ModalNavigate from "../ModalNavigate";

const StepOne = () => {
  useEffect(() => modalPageOneAnimation(), []);

  // choose payment provider.
  const cardProviders = [
    { name: "Visa", imgURL: "visacard.svg", isEnable: true },
    { name: "Mastercard", imgURL: "mastercard.svg", isEnable: true },
    { name: "American Express", imgURL: "americancard.svg", isEnable: true },
    { name: "Paypal", imgURL: "paypal.png", isEnable: false },
  ];

  return (
    <div className=" min-h-full flex justify-between flex-col">
      <div className="payment-card grid sm:grid-cols-2 md:grid-cols-3 gap-y-5 gap-2 lg:gap-5">
        {cardProviders.map((provider, i) => (
          <PaymentCard key={i} {...provider} />
        ))}
      </div>
      <ModalNavigate></ModalNavigate>
    </div>
  );
};

export default StepOne;
