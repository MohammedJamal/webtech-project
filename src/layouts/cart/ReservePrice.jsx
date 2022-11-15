import React, { useContext, useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
/* ================== Components & Layouts ================== */
import SnackAlert from "../../components/SnackAlert";
/* ================== MUI ================== */
import ButtonBase from "@mui/material/ButtonBase";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
/* ================== utils ================== */
import { removeFromLocalStorage } from "../../utils/localstorage";
/* ================== Context ================== */
import { CartContext } from "../../context/CartContext";

const ReservePrice = () => {
  const navigate = useNavigate();
  const [isAccept, setIsAccept] = useState(false);
  const [cartState, setCartState] = useContext(CartContext);
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const setAccept = (acceptState) => setIsAccept(acceptState); //set is user accept agreement.
  const openCartModal = () => cartState.setIsModalOpen(true); //open cart modal
  const removeFromCart = () => {
    removeFromLocalStorage("booking");
    setIsOpenAlert(true)
  }; //remove booking from local storage

  useEffect(() => {
    if(isOpenAlert){
      const timer = setTimeout(() => {
        setIsOpenAlert(false);
        navigate("/");
      },1500)
      
      return () => clearTimeout(timer)
    }
  }, [isOpenAlert])

  return (
    <>
      <SnackAlert open={isOpenAlert} message={"ยกเลิกการนัดจองคิวเรียบร้อย"} />
      <div className="p-4 border border-gray-300  mt-4 rounded">
        <ul className="flex text-sm sm:text-base flex-col space-y-2 text-dark-4">
          <li className="flex justify-between">
            <p>ค่าบริการการจองคิวเพื่อดูรถยนต์</p>
            <p>THB 20,000</p>
          </li>
          <li className="flex justify-between">
            <p>VAT</p>
            <p>THB 0</p>
          </li>
          <li>
            <hr className="my-2" />
            <div className="flex justify-between">
              <p>รวม</p>
              <p>THB 20,000</p>
            </div>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row mt-12 justify-between">
          <FormGroup
            onChange={(e) => setAccept(e.target.checked)}
            sx={{ alignSelf: "center" }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={
                <p className="select-none text-xs text-gray-400">
                  ข้าพเจ้าได้อ่าน
                  <Link className="underline text-blue-400" to="/policy">
                    เงื่อนไข
                  </Link>
                  การจองคิวเพื่อซื้อ/เช่าแล้ว
                </p>
              }
              sx={{
                fontFamily: "'Prompt', sans-serif",
                color: "gray",
              }}
            />
          </FormGroup>
          <div className="flex space-x-2">
            <ButtonBase
              onClick={removeFromCart}
              sx={{
                padding: "0.5em 1em",
                borderRadius: "0.25em",
                fontSize: "0.9em",
                border: "1px solid #D32F2F",
                color: "#D32F2F",
                "&.Mui-disabled": {
                  opacity: 0.5,
                },
              }}
            >
              ยกเลิกการจองคิว
            </ButtonBase>
            <ButtonBase
              onClick={openCartModal}
              disabled={!isAccept}
              sx={{
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
              ยืนยันการสั่งจอง
            </ButtonBase>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(ReservePrice);
