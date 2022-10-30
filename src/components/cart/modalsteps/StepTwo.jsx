import React, { useEffect, useContext } from "react";
import ModalNavigate from "../ModalNavigate";
import {HiOutlineArrowLeft,HiOutlineArrowRight } from "react-icons/hi"
import { modalPageTwoAnimation } from "../../../utils/animation";
import TextField from "@mui/material/TextField";
/* ======== Cart context ======== */
import { CartContext } from "../../../context/CartContext";


const StepTwo = () => {
  const [cartState, setCartState] = useContext(CartContext);
  const { paymentStep, creditCard, setPaymentStep } = cartState;

  useEffect(() => {
    modalPageTwoAnimation()
  }, [])

  const goBack = () => setPaymentStep(1);
  const goNext = () => setPaymentStep(3);

  return (
    <div className="relative min-h-full flex justify-between flex-col">

      <div className="w-full md:w-2/3">
        <h3 className="payment-input text-bluegrey-dark-2 mt-8">ข้อมูลบัตร {creditCard.name}</h3>
        <FormWrapper>
          <div className="grid grid-cols-12 gap-3">
            <TextField size="small" id="cardholder-name" label="ชื่อผู้ถือบัตร" variant="outlined" className=" payment-input col-span-12 "/>
            <TextField size="small" id="card-number" label="เลขบัตร" variant="outlined" className="payment-input col-span-6 "/>
            <TextField size="small" id="card-cvc" label="CVC" variant="outlined" className="payment-input col-span-3"/>
            <TextField size="small" id="card-expire" label="วันหมดอายุ" variant="outlined" className="payment-input col-span-3"/>
          </div>
        </FormWrapper>
        <h3 className="payment-input text-bluegrey-dark-2 mt-8">ข้อมูลใบเสร็จ</h3>
        <FormWrapper>
          <div className="grid grid-cols-12 gap-x-2 gap-y-3">
            <TextField size="small" id="firstname" label="ชื่อจริง" variant="outlined" className="payment-input col-span-6"/>
            <TextField size="small" id="lastname" label="นามสกุล" variant="outlined" className="payment-input col-span-6"/>
            <TextField size="small" id="email" label="อีเมล" variant="outlined" className="payment-input col-span-6"/>
            <TextField size="small" id="phonenumber" label="เบอร์โทรศัพท์" variant="outlined" className="payment-input col-span-6"/>
            <>
              <TextField size="small" id="address-line-1" label="ที่อยู่บรรทัดที่ 1" variant="outlined" className="payment-input col-span-12"/>
              <TextField size="small" id="address-line-2" label="ที่อยู่บรรทัดที่ 2" variant="outlined" className="payment-input col-span-12"/>
              <>
                <TextField size="small" id="country" label="จังหวัด" variant="outlined" className="payment-input col-span-4"/>
                <TextField size="small" id="province-state" label="เขต/แขวง" variant="outlined" className="payment-input col-span-4"/>
                <TextField size="small" id="zipcode" label="รหัสไปรษณีย์นย์" variant="outlined" className="payment-input col-span-4"/>
              </>
            </>
          </div>
        </FormWrapper>
      </div>

      <img id="credit-card" src={creditCard.imgURL} alt={creditCard.name} className="drop-shadow-md hidden md:block absolute top-24 max-w-[15em] -right-6 w-1/3 rotate-[20deg]"/>

      <ModalNavigate >
        <div className="flex justify-between">
          <button onClick={goBack} className="text-dark-1 px-2">
            <HiOutlineArrowLeft className="inline mr-1"/>
            <span>ย้อนกลับ</span>
          </button>
          <button onClick={goNext} className="text-blue-500 px-2">
            <span>ถัดไป</span>
            <HiOutlineArrowRight className="inline ml-1"/>
            </button>
        </div>
      </ModalNavigate>
    </div>
  );
};

const FormWrapper = ({ children }) => (
  <form className="mt-4">
    {children}
  </form>
)


export default StepTwo;
