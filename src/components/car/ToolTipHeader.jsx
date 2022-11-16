import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

const ToolTipHeader = ({ title }) => (
  <Tooltip title={title} arrow TransitionComponent={Zoom}>
    <div className="cursor-pointer">
      <HiOutlineQuestionMarkCircle className="text-lg text-gray-400" />
    </div>
  </Tooltip>
);

export default ToolTipHeader;
