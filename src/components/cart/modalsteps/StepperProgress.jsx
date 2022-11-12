import React, { useContext } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { CartContext } from "../../../context/CartContext";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";

const Connector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#1E88E5",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#1E88E5",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#CFD8DC",
    borderTopWidth: 2,
    borderRadius: 1,
    margin: "0 0.25em",
  },
}));

const StepIcon = (props) => {
  const { active, completed } = props;

  const icons = { 1: "1", 2: "2", 3: "3" };

  return (
    <div
      className={`${
        active || completed
          ? "bg-blue-500 ring-offset-white scale-100"
          : "bg-blue-500/50 ring-white scale-90"
      } px-2.5 ring-2 ring-offset-2  aspect-square rounded text-sm flex items-center justify-center text-white transition-all duration-300`}
    >
      {icons[String(props.icon)]}
    </div>
  );
};

const stepTitle = ["เลือกวิธีการชำระ", "รายละเอียดการชำระ", "ยืนยันรายการ"];

const StepperProgress = () => {
  const [cartState, setCartState] = useContext(CartContext);
  const { paymentStep } = cartState; // destructuring cartState

  return (
    <Stepper
      activeStep={paymentStep - 1}
      alternativeLabel
      connector={<Connector />}
    >
      {stepTitle.map((label, i) => (
        <Step key={label}>
          <StepLabel StepIconComponent={StepIcon} className="md:min-w-[8em]">{stepTitle[i]}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperProgress;
