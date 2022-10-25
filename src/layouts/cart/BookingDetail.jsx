import React from "react";
import { HiOutlineCalendar } from "react-icons/hi";

const BookingDetail = () => {
  return (
    <div className="relative mt-12 border border-gray-300 rounded p-4">
      <p className="text-gray-500 absolute px-2 bg-white top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        รายละเอียดการจองคิว
      </p>
      <div className="bg-[#F8F8F9] p-4 ">
        <div className="flex items-center space-x-2">
          <HiOutlineCalendar className="text-xl" />
          <h4 className="font-normal text-base">วัน/เวลาที่จองคิว</h4>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};
export default BookingDetail;
