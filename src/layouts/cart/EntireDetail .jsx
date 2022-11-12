import React from "react";

/* ================== Import layouts from same level ================== */
import ToolTipHeader from "./ToolTipHeader";
import BookingDetail from "./BookingDetail";
import ReservePrice from "./ReservePrice";

const EntireDetail = () => {
  return (
    <div className="p-4 md:p-12 bg-white mx-[0.5em] md:mx-[1.5em] w-[calc(100%-1em)] md:w-[calc(100%-3em)] relative -translate-y-32 min-h-[40em] shadow-xl rounded-xl">
      <h3 className="font-normal text-sky-600">ราคาขาย</h3>
      <h2 className="font-semibold text-bluegrey-dark-2 leading-loose">
        THB 32,050,000
      </h2>
      <hr className="my-6" />
      <ToolTipHeader
        message="อัตราการชำระต่อเดือน (ยังไม่รวมดอกเบี้ย)"
        title="ค่าชำระต่อเดือนเมื่อผ่อนจ่ายโดยยังไม่ได้มีการคิดอัตราดอกเบี้ยเพิ่มเติม
          ราคาอัตราค่าชำระต่อเดือนอาจมีการเปลี่ยนแปลงได้จากการตกลงซื้อขายเพิ่มเติม"
      />

      <h2 className="font-semibold text-bluegrey-dark-2 leading-loose">
        THB 890,277
      </h2>
      <hr className="my-6" />
      <ToolTipHeader
        message="อัตราดอกเบี้ย"
        title=" อัตราดอกเบี้ยอาจมีการเปลี่ยนแปลงได้"
      />

      <h2 className="font-semibold text-bluegrey-dark-2 leading-loose flex space-x-2">
        <span>0.5% ต่อเดือน</span>
        <span className="text-bluegrey-light-3 font-light">(36 เดือน)</span>
      </h2>
      <BookingDetail />
      <ReservePrice />
    </div>
  );
};

export default EntireDetail;
