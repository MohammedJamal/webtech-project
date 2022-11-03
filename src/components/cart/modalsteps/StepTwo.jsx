import React, { useEffect, useContext } from "react";
import ModalNavigate from "../ModalNavigate";
import {HiOutlineArrowLeft,HiOutlineArrowRight } from "react-icons/hi"
import { modalPageTwoAnimation } from "../../../utils/animation";
import TextField from "@mui/material/TextField";
/* ======== Cart context ======== */
import { CartContext } from "../../../context/CartContext";
/* ======== custom hook ======== */
import { useForm } from "react-hook-form";


const StepTwo = () => {
  const [{ paymentStep, creditCard, setPaymentStep, purchaseDetail, setPurchaseDetail } , setCartState] = useContext(CartContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    reValidateMode:"onChange", defaultValues:{
      address1: purchaseDetail.address1,
      address2: purchaseDetail.address2,
      cardNumber: purchaseDetail.cardNumber,
      cardholderName: purchaseDetail.cardholderName,
      country: purchaseDetail.country,
      cvc: purchaseDetail.cvc,
      email: purchaseDetail.email,
      expire: purchaseDetail.expire,
      firstname: purchaseDetail.firstname,
      lastname: purchaseDetail.lastname,
      phonenumber: purchaseDetail.phonenumber,
      provinceState: purchaseDetail.provinceState,
      zipCode: purchaseDetail.zipCode,
    }
  });
  
  // Handle purchase
  const handlePurchase = (detail) => {
    setPurchaseDetail(detail) // detail is -> {...} and it's mean that step changed to 3
  }

  // Perform react useEffect for watching the state of the payment step.
  useEffect(() => {
    const subscription = watch(value => console.log(value));
    return () => subscription.unsubscribe();
  }, [watch])

  useEffect(() => modalPageTwoAnimation(), [])
  const goBack = () => setPaymentStep(1);
  const goNext = () => setPaymentStep(3);

  return (
    <form onSubmit={handleSubmit(handlePurchase)} className="relative min-h-full flex justify-between flex-col">

      <div  className="w-full md:w-2/3">
        <h3 className="payment-input text-bluegrey-dark-2 mt-8">ข้อมูลบัตร {creditCard.name}</h3>
        <FormWrapper>
          <div className="grid grid-cols-12 gap-3">
            <TextField helperText={errors?.cardholderName?.message} error={Boolean(errors?.cardholderName?.message)} {...register("cardholderName", {required: "โปรดกรอกชื่อผู้ถือบัตร"})} size="small" id="cardholder-name" label="ชื่อผู้ถือบัตร" variant="outlined" className=" payment-input col-span-12 "/>
            <TextField helperText={errors?.cardNumber?.message} error={Boolean(errors?.cardNumber?.message)} {...register("cardNumber", {required: "โปรดกรอกเลขบัตร"})} size="small" id="card-number" label="เลขบัตร" variant="outlined" className="payment-input col-span-6 "/>
            <TextField helperText={errors?.cvc?.message} error={Boolean(errors?.cvc?.message)} {...register("cvc",{
              validate:{
                required: value => (value.length === 3 && !isNaN(value))|| "โปรดกรอก CVC 3 หลัก",                                                    
              }
            })} size="small" id="card-cvc" label="CVC" variant="outlined" className="payment-input col-span-3"/>
            <TextField helperText={errors?.expire?.message} error={Boolean(errors?.expire?.message)} {...register("expire", {required: "โปรดกรอกวันหมดอายุ"})} size="small" id="card-expire" label="วันหมดอายุ" variant="outlined" className="payment-input col-span-3"/>
          </div>
        </FormWrapper>
        <h3 className="payment-input text-bluegrey-dark-2 mt-8">ข้อมูลใบเสร็จ</h3>
        <FormWrapper>
          <div className="grid grid-cols-12 gap-x-2 gap-y-3">
            <TextField helperText={errors?.firstname?.message} error={Boolean(errors?.firstname?.message)} {...register("firstname", {required: "โปรดกรอกชื่อจริง"})} size="small" id="firstname" label="ชื่อจริง" variant="outlined" className="payment-input col-span-6"/>
            <TextField helperText={errors?.lastname?.message} error={Boolean(errors?.lastname?.message)} {...register("lastname", {required: "โปรดกรอกนามสกุล"})} size="small" id="lastname" label="นามสกุล" variant="outlined" className="payment-input col-span-6"/>
            <TextField helperText={errors?.email?.message} error={Boolean(errors?.email?.message)} {...register("email", {required: "โปรดกรอกอีเมล"})} size="small" id="email" label="อีเมล" variant="outlined" className="payment-input col-span-6"/>
            <TextField helperText={errors?.phonenumber?.message} error={Boolean(errors?.phonenumber?.message)} {...register("phonenumber", {required: "โปรดกรอกเบอร์โทรศัพท์"})} size="small" id="phonenumber" label="เบอร์โทรศัพท์" variant="outlined" className="payment-input col-span-6"/>
            <>
              <TextField {...register("address1")} size="small" id="address-line-1" label="ที่อยู่บรรทัดที่ 1" variant="outlined" className="payment-input col-span-12"/>
              <TextField {...register("address2")} size="small" id="address-line-2" label="ที่อยู่บรรทัดที่ 2" variant="outlined" className="payment-input col-span-12"/>
              <>
                <TextField {...register("country")} size="small" id="country" label="จังหวัด" variant="outlined" className="payment-input col-span-4"/>
                <TextField {...register("provinceState")} size="small" id="province-state" label="เขต/แขวง" variant="outlined" className="payment-input col-span-4"/>
                <TextField {...register("zipCode")} size="small" id="zipcode" label="รหัสไปรษณีย์นย์" variant="outlined" className="payment-input col-span-4"/>
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
          <button type="submit" className="text-blue-500 px-2">
            <span>ถัดไป</span>
            <HiOutlineArrowRight className="inline ml-1"/>
            </button>
        </div>
      </ModalNavigate>
    </form>
  );
};

const FormWrapper = ({ children }) => (
  <div className="mt-4">
    {children}
  </div>
)


export default StepTwo;
