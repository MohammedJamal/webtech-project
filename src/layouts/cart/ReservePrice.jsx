import React from "react";
import ButtonBase from "@mui/material/ButtonBase";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const ReservePrice = () => {
  return (
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
        <FormGroup sx={{ alignSelf: "center" }}>
          <FormControlLabel
            control={<Checkbox />}
            label={
              <p className="select-none text-xs text-gray-400">
                ข้าพเจ้าได้อ่านเงื่อนไขการจองคิวเพื่อซื้อ/เช่าแล้ว
              </p>
            }
            sx={{
              fontFamily: "'Prompt', sans-serif",
              color: "gray",
            }}
          />
        </FormGroup>
        <ButtonBase>
          <div className="px-4 py-2 bg-blue-400 text-white rounded">
            ยืนยันการสั่งจอง
          </div>
        </ButtonBase>
      </div>
    </div>
  );
};

export default ReservePrice;
