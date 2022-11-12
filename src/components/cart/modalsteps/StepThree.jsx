import React, { useEffect, useContext } from "react";
import ModalNavigate from "../ModalNavigate";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
/* ======== Cart context ======== */
import { CartContext } from "../../../context/CartContext";
/* ======== MUI ======== */
import Chip from "@mui/material/Chip";
import { HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";

const StepThree = () => {
  const [cartState, setCartState] = useContext(CartContext);
  const { paymentStep, creditCard, setPaymentStep, purchaseDetail } = cartState;

  const goBack = () => setPaymentStep(2);
  const submit = () => {
    alert("Done");
  };

  return (
    <div className="relative min-h-full flex justify-between flex-col">
      <div className="flex flex-col space-y-4">
        <BookupDate />
        <Contact />
        <Cost />
      </div>

      <ModalNavigate>
        <div className="flex justify-between">
          <button onClick={goBack} className="text-dark-1 px-2">
            <HiOutlineArrowLeft className="inline mr-1" />
            <span>ย้อนกลับ</span>
          </button>
          <button onClick={submit} className="text-blue-500 px-2">
            <span>ยืนยันรายการ</span>
            <HiOutlineArrowRight className="inline ml-1" />
          </button>
        </div>
      </ModalNavigate>
    </div>
  );
};

const BookupDate = () => {
  return (
    <div className="bg-[#F8F8F9] py-10 px-4 sm:p-4">
      <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row items-center">
        <h3 className="text-bluegrey-dark-2">วัน/เวลาที่จองคิว</h3>

        <div className="flex items-center space-x-1.5 mx-auto sm:ml-auto sm:mr-0">
          <Chip
            variant="outlined"
            icon={<HiOutlineClock className="text-lg" />}
            label="12:30"
            color="primary"
            sx={{ fontFamily: "'Prompt', sans-serif" }}
          />
          <div className="w-1 h-1 rounded-full bg-blue-500" />
          <Chip
            variant="outlined"
            label="วันจันทร์ 31/10/2022"
            color="primary"
            sx={{ fontFamily: "'Prompt', sans-serif" }}
          />
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [cartState, setCartState] = useContext(CartContext);
  const { purchaseDetail } = cartState;

  const details = [
    {
      icon: <HiOutlineMail className="text-lg" />,
      topic: "อีเมลยืนยันการสั่งจอง",
      value: purchaseDetail.email || "-",
    },
    {
      icon: <HiOutlinePhone className="text-lg" />,
      topic: "เบอร์โทรศัพท์",
      value: purchaseDetail.phonenumber || "-",
    },
  ];

  return (
    <div className="bg-[#F8F8F9] p-4 ">
      <h3 className=" text-bluegrey-dark-2">การติดต่อของคุณ</h3>
      <div className="h-[1px] bg-bluegrey-light-2 my-2" />
      <ul className="w-full px-2 py-1 rounded">
        {details.map((detail) => (
          <li
            key={detail.topic}
            className="flex items-center justify-between py-2 text-bluegrey-dark-2"
          >
            <div className="flex space-x-2 items-center ">
              {detail.icon}
              <p>{detail.topic}</p>
            </div>
            <p>{detail.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Cost = () => {
  const details = [
    {
      topic: "ค่าบริการการจองคิวเพื่อดูรถยนต์",
      value: "THB 20,000",
    },
    {
      topic: "VAT",
      value: "THB 0",
    },
  ];

  return (
    <div className="bg-[#F8F8F9] p-4 ">
      <h3 className=" text-bluegrey-dark-2">ค่าบริการ</h3>
      <div className="h-[1px] bg-bluegrey-light-2 my-2" />
      <ul className="w-full px-2 py-1 rounded">
        {details.map((detail) => (
          <li
            key={detail.topic}
            className="flex items-center justify-between py-2 text-bluegrey-dark-2"
          >
            <div className="flex space-x-2 items-center ">
              {detail.icon}
              <p>{detail.topic}</p>
            </div>
            <p className="text-blue-500">{detail.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepThree;
