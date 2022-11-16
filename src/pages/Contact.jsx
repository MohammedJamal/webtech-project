import React from "react";
/* ================== MUI ================== */
import Paper from "@mui/material/Paper";

const Contact = () => {
  const people = [
    "👩🏻 64070036 ณุทยา นิติอภัยธรรม",
    "👦🏻 64070045 ธนาธิป สิงหานนท์",
    "👦🏻 64070081 ไพรัช ชื่นชม",
    "👩🏽 64070106 ศศิธร ศรีจันทร์",
    "👦🏼 64070108 ศุภกร เนตรสุวรรณ",
  ];
  return (
    <Wrapper>
      <h2 className="text-bluegrey-dark-4">สมาชิกกลุ่ม</h2>
      <p className="text-bluegrey-light-1">
        นี่คือรายชื่อของสมาชิกในกลุ่มของเรา<br/>ผลงานจัดทำด้วยรัก และ ความพยายาม💖
      </p>
      <hr className="my-4" />
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
        {people.map((person, index) => (
          <Paper  variant="outlined" component="li" key={person} className="p-4">
            <h4 className="text-lg font-medium text-bluegrey-dark-2">{person}</h4>
          </Paper>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = ({ children }) => {
  return <div className="p-6">{children}</div>;
};

export default Contact;
