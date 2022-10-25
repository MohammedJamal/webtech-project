import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import Rating from "@mui/material/Rating";
import ToolTipHeader from "../layouts/cart/ToolTipHeader";
import BookingDetail from "../layouts/cart/BookingDetail";

const Cart = () => {
  return (
    <>
      <Banner />
      <Wrapper>
        <BackToLanding />
        <h2 className="text-dark-4">
          ใบยืนยันการสั่งจองและ รายละเอียดเพื่อเข้าดูรถยนต์
        </h2>
        <p className="text-dark-1">
          โปรดยืนยันจ้อมูลการสั่งจองรถยนต์และ ตรวจสอบวันนัดหมายอย่างละเอียด
        </p>
        <CarBadge logoURL="/bugati-icon.png" />
        <hr className="my-4" />
        <CarReserve carURL="/bmwi8.png" />
      </Wrapper>
    </>
  );
};

const Wrapper = ({ children }) => (
  <div className="max-w-[60em] mt-10 px-6 mx-auto w-full">{children}</div>
);

const BackToLanding = () => (
  <Link to="/" className="mb-12 inline-block">
    <div className="flex items-center text-dark-1">
      <HiChevronLeft className="text-xl" />
      <span>กลับไปหน้าแรก</span>
    </div>
  </Link>
);

const CarBadge = ({ logoURL }) => {
  
  const CarIcon = () => (
    <div className="aspect-square flex items-center justify-center bg-gradient-to-t from-gray-50 to-gray-200 rounded-full">
      <img src={logoURL} alt={logoURL} className="w-20" />
    </div>
  );

  return (
    <div className="flex items-center space-x-4 mt-10">
      <CarIcon />
      <div className="flex flex-col leading-[1.6em]">
        <h2 className="text-dark-3 ">BMW I8</h2>
        <div className="flex items-center space-x-4 divide-x-2">
          <p className="text-dark-1">บริษัทเอกะมาชิโดะ มอเตอร์</p>
          <Rating
            name="read-only"
            value={4}
            readOnly
            sx={{ fontSize: "1.2em", padding: "0 0 0 0.5em" }}
          />
        </div>
      </div>
    </div>
  );
};

const CarReserve = ({ carURL }) => {
  return (
    <div className="relative">
      <div className="bg-[#FAFAFA] rounded-md">
        <img src={carURL} alt={carURL} className="p-4 " />
      </div>
      <div className="bg-gradient-to-t from-[#E1E4E7] to-[#FAFAFA] min-h-[20vh]" />
      <div className="p-12 bg-white mx-[1.5em] w-[calc(100%-3em)] relative -translate-y-32 h-[40em] shadow-xl rounded-xl">
        <h3 className="font-normal text-sky-600">ราคาขาย</h3>
        <h2 className="font-semibold text-bluegrey-dark-2 leading-loose">
          THB 32,050,000
        </h2>
        <hr className="my-6" />
        <ToolTipHeader
          message="อัตราการชำระต่อเดือน"
          title="ค่าชำระต่อเดือนเมื่อผ่อนจ่ายโดยยังไม่ได้มีการคิดอัตราดอกเบี้ยเพิ่มเติม
          ราคาอัตราค่าชำระต่อเดือนอาจมีการเปลี่ยนแปลงได้จากการตกลงซื้อขายเพิ่มเติม"
        />

        <h2 className="font-semibold text-bluegrey-dark-2 leading-loose">
          THB 890,277
        </h2>
        <hr className="my-6" />
        <ToolTipHeader
          message="อัตราการดอกเบี้ย"
          title=" อัตราดอกเบี้ยอาจมีการเปลี่ยนแปลงได้"
        />

        <h2 className="font-semibold text-bluegrey-dark-2 leading-loose flex space-x-2">
          <span>0.5% ต่อเดือน</span>
          <span className="text-bluegrey-light-3">(36 เดือน)</span>
        </h2>
        <BookingDetail />
      </div>
    </div>
  );
};
export default Cart;
