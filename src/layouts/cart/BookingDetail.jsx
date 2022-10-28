import React from "react";
import {
  HiOutlineClock,
  HiOutlineCalendar,
  HiOutlineEmojiHappy,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import Chip from "@mui/material/Chip";

const Date = () => (
  <div className="bg-[#F8F8F9] py-10 px-4 sm:p-4">
    <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row items-center">
      <div className="flex space-x-2 self-start">
        <HiOutlineCalendar className="text-xl" />
        <h4 className="font-normal text-base text-dark-4">วัน/เวลาที่จองคิว</h4>
      </div>
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

const Service = () => {
  const services = [
    "เครื่องดื่มรีฟิลและ อาหารสำหรับแขก",
    "บริการนวดผ่อนคลาย",
    "แชมเปญ",
    "รถรับส่งฟรีในระยะทาง 20 กิโลเมตรแรก",
  ];
  return (
    <div className="bg-[#F8F8F9] py-10 px-4 p-4 ">
      <div className="flex space-x-2">
        <HiOutlineEmojiHappy className="text-xl" />
        <h4 className="font-normal text-base text-dark-4">
          บริการพื้นฐานจากทางร้าน
        </h4>
      </div>
      <ul className="w-full px-2 py-1 bg-white shadow divide-y mt-4 rounded">
        {services.map((service, index) => (
          <li key={index} className="px-2 py-4">
            <p className="text-bluegrey-dark-2">{service}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const VerifyNumber = () => {
  return (
    <div className="bg-[#F8F8F9]  py-10 px-4 p-4 ">
      <div className="flex space-x-2">
        <HiOutlineShieldCheck className="text-xl" />
        <h4 className="font-normal text-base text-dark-4">หมายเลขยืนยัน</h4>
      </div>
      <div className="py-24 text-center">
        <h2 className="text-amber-500">21JAK92PQL8C</h2>
        <p className="text-bluegrey-light-1">Status: waiting for payment</p>
      </div>
    </div>
  );
};

const BookingDetail = () => {
  return (
    <div className="relative mt-12 border border-gray-300 rounded p-2 md:p-4">
      <p className="text-gray-500 absolute sm:px-2 bg-white top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        รายละเอียดการจองคิว
      </p>
      <div className="flex flex-col space-y-2">
        <Date />
        <Service />
        <VerifyNumber />
      </div>
    </div>
  );
};
export default BookingDetail;
