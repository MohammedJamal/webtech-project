import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { HiChevronDown } from "react-icons/hi";

const SimpleAccordion = ({children}) => {
  return (
    <Accordion sx={{mt:"1em"}}>
      <AccordionSummary
        expandIcon={<HiChevronDown />}
      >
        <p className="text-bluegrey-light-2 text-base">บริการพื้นฐานจากทางร้าน</p>
      </AccordionSummary>
      <AccordionDetails>
       {children}
      </AccordionDetails>
    </Accordion>
  );
};
export default SimpleAccordion;
