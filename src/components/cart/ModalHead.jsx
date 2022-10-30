import React, { useContext } from "react";
import { HiOutlineX } from "react-icons/hi";
import StepperProgress from "./modalsteps/StepperProgress";
import { CartContext } from "../../context/CartContext";

const ModalHead = () => {
  const [cartState, setCartState] = useContext(CartContext);
  const { paymentStep, setIsModalOpen, setPaymentStep } = cartState; // destructuring cartState

  const closeModal = () => setIsModalOpen(false);

  const stepDetail = [
    {
      title: "เลือกวิธีการชำระ",
      subTitle: "(ปัจจุบันรองรับเฉพาะ Credit card เท่านั้น)",
    },
    {
      title: "รายละเอียดการชำระ",
      subTitle: "ข้อมูลการชำระเงินของท่านด้วย Visa",
    },
    {
      title: "ยืนยันการชำระเงิน",
      subTitle: "โปรดตรวจสอบและ ยืนยันรายการ",
    },
  ];

  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="bg-gray-100 p-6">
        <HiOutlineX
          onClick={closeModal}
          className="text-xl ml-auto cursor-pointer text-red-600"
        />
      </div>
      <div className="p-6 pb-4 leading-tight flex flex-col items-center md:flex-row justify-between space-y-10 md:space-y-0">
        <div>
          <h2 className="text-bluegrey-dark-2 text-center md:text-left">
            {stepDetail[paymentStep - 1].title}
          </h2>
          <p className="text-dark-1 text-sm text-center md:text-left">
            {stepDetail[paymentStep - 1].subTitle}
          </p>
        </div>
        <StepperProgress />
      </div>
      <div className="mx-6">
        <hr />
      </div>
    </div>
  );
};

export default ModalHead;
