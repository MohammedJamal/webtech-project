import React, { useContext } from "react";
/* ============ context ============ */
import { CarDetailContext } from "../../../context/CarDetailContext";
import { ShopContext } from "../../../context/ShopContext";
/* ============ Components & Layous ============ */
import ToolTipHeader from "../ToolTipHeader";
import Accordion from "../Accordion";
/* ============ MUI ============ */
import Rating from "@mui/material/Rating";
import ButtonBase from "@mui/material/ButtonBase";

const Stores = () => {
  const carDetail = useContext(CarDetailContext);
  const { stores } = carDetail;

  return (
    <>
      <p className="text-bluegrey-dark-1 mb-12">
        นี่คือร้านที่จัดจำหน่ายรถยนต์รุ่น {carDetail.name}{" "}
        ท่านสามารถเลือกจองคิวกับร้านดังกล่าวได้ทันที
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        {stores.map((store, index) => (
          <Store key={store.name} {...store} />
        ))}
      </div>
    </>
  );
};

const Store = (props) => {
  const [shop, setShop] = useContext(ShopContext);

  const storeDetail = [
    { name: "ราคาขาย", value: props.price },
    {
      name: "อัตราการชำระต่อเดือน (ยังไม่รวมดอกเบี้ย)",
      value: props.monthlyPaymentRate,
    },
    {
      name: (
        <div className="flex items-center space-x-1">
          <span>อัตราดอกเบี้ย</span>
          <ToolTipHeader
            title="ค่าชำระต่อเดือนเมื่อผ่อนจ่ายโดยยังไม่ได้มีการคิดอัตราดอกเบี้ยเพิ่มเติม
        ราคาอัตราค่าชำระต่อเดือนอาจมีการเปลี่ยนแปลงได้จากการตกลงซื้อขายเพิ่มเติม"
          />
        </div>
      ),
      value: (
        <>
          <span>{props.interest}% ต่อเดือน</span>
          <span className="text-bluegrey-light-3"> (36 เดือน)</span>
        </>
      ),
    },
    {
      name: "",
      value: (
        <Accordion>
          <ul>
            {props.services.map((service, index) => (
              <li key={service} className="text-base text-bluegrey-dark-1">
                - {service}
              </li>
            ))}
          </ul>
        </Accordion>
      ),
    },
  ];

  const openCartModal = () => {
    shop.setIsModalOpen(true)
  }

  return (
    <div className="self-start bg-white rounded-xl shadow p-4">
      <h3 className="text-sky-600">{props.name}</h3>
      <Rating
        name="read-only"
        value={props.stars}
        readOnly
        sx={{ fontSize: "1.2em" }}
      />
      <hr className="my-4" />
      <ul>
        {storeDetail.map((detail, index) => (
          <li key={detail.name} className="py-2">
            <div className="text-bluegrey-light-2">{detail.name}</div>
            <div className=" text-lg font-medium text-bluegrey-dark-2">
              {detail.value}
            </div>
          </li>
        ))}
      </ul>
      <ButtonBase
        onClick={openCartModal}
        sx={{
          width:"100%",
          padding: "0.5em 1em",
          borderRadius: "0.25em",
          fontSize: "0.9em",
          backgroundColor: "#3b82f6",
          color: "white",
          "&.Mui-disabled": {
            opacity: 0.5,
          },
        }}
      >
        จองคิวกับร้านนี้
      </ButtonBase>
    </div>
  );
};

export default Stores;
