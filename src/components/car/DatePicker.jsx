import React, { useState , useContext} from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
/* ============ Context ============ */
import { ShopContext } from "../../context/ShopContext";

const DatePicker = () => {
  // const [date, setDate] = useState(dayjs(new Date()).add(1,"day")["$d"]);
  const [{bookingDate , setBookingDate}, setShop] = useContext(ShopContext);

  return (
    <div>
      <DateTimePicker
        label="เลือกเวลาจองคิว"
        renderInput={(params) => <TextField sx={{width:"100%"}} {...params} />}
        value={bookingDate}
        onChange={(newDate) => {
          setBookingDate(newDate["$d"]);
        }}
      />
    </div>
  );
};

export default DatePicker;
