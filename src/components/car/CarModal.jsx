import React, { useContext , useState, useEffect } from "react";
/* ============ MUI ============ */
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import ButtonBase from "@mui/material/ButtonBase";
/* ============ Context ============ */
import { ShopContext } from "../../context/ShopContext";
import { CarDetailContext } from "../../context/CarDetailContext";
import { HiOutlineX } from "react-icons/hi";
/* ============ Components & Layouts ============ */
import ToolTipHeader from "./ToolTipHeader";
import Accordion from "./Accordion";
import DatePicker from "./DatePicker";
import SnackAlert from "../SnackAlert";
/* ============ utils ============ */
import { getModelFromCarName } from "../../utils/carMethods";
import { saveToLocalStorage } from "../../utils/localstorage";

const CarModal = () => {
  const [{ isModalOpen, setIsModalOpen, shop , bookingDate }] = useContext(ShopContext);
  const carDetail = useContext(CarDetailContext);
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const doBooking = () => {
    saveToLocalStorage("booking", {shop,carDetail, bookingDate:bookingDate});
    setIsOpenAlert(true);
  }

  useEffect(() => {
    if(isOpenAlert){
      const timer = setTimeout(() => {
        setIsOpenAlert(false);
      },1500)
      
      return () => clearTimeout(timer)
    }
  }, [isOpenAlert])

  const storeDetail = [
    {
      name: "โมเดลรถยนต์",
      value: getModelFromCarName(carDetail.carbrand, carDetail.name),
    },
    { name: "รถรุ่น", value: carDetail.name },
    { name: "ราคาขาย", value: shop.price },
    {
      name: "อัตราการชำระต่อเดือน (ยังไม่รวมดอกเบี้ย)",
      value: shop.monthlyPaymentRate,
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
          <span>{shop.interest}% ต่อเดือน</span>
          <span className="text-bluegrey-light-3"> (36 เดือน)</span>
        </>
      ),
    },
    {
      name: "",
      value: (
        <Accordion>
          <ul>
            {shop.services &&
              shop.services.map((service, index) => (
                <li key={service} className="text-base text-bluegrey-dark-1">
                  - {service}
                </li>
              ))}
          </ul>
        </Accordion>
      ),
    },
  ];

  return (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
      sx={{ maxWidth: "40em", mx: "auto" }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper
        elevation={2}
        className="overflow-x-hidden flex flex-col outline-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded w-11/12 max-w-[60em] h-[80vh] overflow-y-auto"
      >
        <SnackAlert open={isOpenAlert} message={"สั่งจองคิวเรียบร้อยโปรดยืนยันที่ตะกร้าสินค้า"} />
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-sky-600">{shop.name}</h2>
            <HiOutlineX
              onClick={closeModal}
              className="text-xl ml-auto cursor-pointer text-red-600"
            />
          </div>
          <Rating
            name="read-only"
            value={shop.stars}
            readOnly
            sx={{ fontSize: "1.2em" }}
          />
          <hr className="my-4" />

          <ul className="border p-4 rounded">
            {storeDetail.map((detail, index) => (
              <li key={detail.name} className="pt-2">
                <div className="text-bluegrey-light-2">{detail.name}</div>
                <div className=" text-lg font-medium text-bluegrey-dark-2">
                  {detail.value}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-24">
            <DatePicker />
            <ButtonBase
              onClick={doBooking}
              sx={{
                width: "100%",
                mt:"1em",
                padding: "0.75em 1em",
                borderRadius: "0.25em",
                fontSize: "0.9em",
                backgroundColor: "#3b82f6",
                color: "white",
                "&.Mui-disabled": {
                  opacity: 0.5,
                },
              }}
            >
              ยืนยันจองคิวร้าน {shop.name}
            </ButtonBase>
          </div>
        </div>
      </Paper>
    </Modal>
  );
};

export default React.memo(CarModal);
