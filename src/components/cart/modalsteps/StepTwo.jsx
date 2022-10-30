import React, { useEffect, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import ModalNavigate from "../ModalNavigate";
import TextField from "@mui/material/TextField";

const FormWrapper = ({ children }) => (
  <form className="w-2/3 mt-4">
    {children}
  </form>
)

const StepTwo = () => {
  const [cartState, setCartState] = useContext(CartContext);
  const { paymentStep, creditCard, setPaymentStep } = cartState;

  const goBack = () => setPaymentStep(1);

  return (
    <div className=" min-h-full flex justify-between flex-col">
      <div>
        <h2 className="text-bluegrey-dark-2">ข้อมูลบัตร Visa</h2>
        <FormWrapper>
          <div className="grid grid-cols-12 gap-3">
            <TextField id="cardholder-name" label="Full name" variant="outlined" className="col-span-12"/>
            <TextField id="card-number" label="Card number" variant="outlined" className="col-span-6"/>
            <TextField id="card-cvc" label="CVC" variant="outlined" className="col-span-3"/>
            <TextField id="card-expire" label="Expire" variant="outlined" className="col-span-3"/>
          </div>
        </FormWrapper>
        <FormWrapper>
          <h2 className="text-bluegrey-dark-2">ข้อมูลใบเสร็จ</h2>
          <div className="grid grid-cols-12 gap-3">
            <TextField id="firstname" label="First name" variant="outlined" className="col-span-6"/>
            <TextField id="lastname" label="Last name" variant="outlined" className="col-span-6"/>
            <TextField id="email" label="Email" variant="outlined" className="col-span-6"/>
            <TextField id="phonenumber" label="Phone number" variant="outlined" className="col-span-6"/>
            <>
              <TextField id="address-line-1" label="Address line 1" variant="outlined" className="w-full"/>
              <TextField id="address-line-2" label="Address line 2" variant="outlined" className="w-full"/>
              <>
                <TextField id="country" label="ฉountry" variant="outlined" className="w-full"/>
                <TextField id="province-state" label="Province/State" variant="outlined" className="w-full"/>
                <TextField id="zipcode" label="Zipcode" variant="outlined" className="w-full"/>
              </>
            </>
          </div>
        </FormWrapper>
      </div>

      <ModalNavigate>
        <div className="flex justify-between">
          <button onClick={goBack} className="text-dark-1 px-2">
            ย้อนกลับ
          </button>
          <button className="text-blue-500 px-2">ถัดไป</button>
        </div>
      </ModalNavigate>
    </div>
  );
};

export default StepTwo;
