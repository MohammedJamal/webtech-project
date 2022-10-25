import React from 'react'
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import {HiOutlineQuestionMarkCircle } from "react-icons/hi"

const ToolTipHeader = ({ message, title }) => (
    <div className="flex items-center space-x-1">
      <h3 className="font-normal text-sky-600">{message}</h3>
      <Tooltip title={title} arrow TransitionComponent={Zoom}>
        <div className="cursor-pointer">
          <HiOutlineQuestionMarkCircle className="text-xl text-gray-400" />
        </div>
      </Tooltip>
    </div>
  );

export default ToolTipHeader