import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Badge from "@mui/material/Badge";
import IconButton from '@mui/material/IconButton';
/* ============ utils ============ */
import {getFromLocalStorage} from "../../utils/localStorage";

const BasketIcon = () => {
  const navigate = useNavigate();
  
  /* get value as Boolean type for checking if cart is now available */
  const bookingDetail = React.useMemo(() => {
    return Boolean(getFromLocalStorage("booking"));
    // We'll need to stringify because Object is not primitive data type. It's refered to memory
  },[ JSON.stringify(getFromLocalStorage("booking")) ])


  return (
    <>
      <IconButton onClick={() => navigate("/cart")} size="medium">
        <Badge invisible={!bookingDetail} variant="dot" overlap="circular" color="primary">
          <HiOutlineShoppingBag className="text-lg lg:text-2xl text-[#546E7A]" />
        </Badge>
      </IconButton>
    </>
  );
};

export default BasketIcon;
