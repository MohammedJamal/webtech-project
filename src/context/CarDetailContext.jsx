import React from "react";
import { useParams } from "react-router-dom";
/* ============== utils ============== */
import { getEachCarDetail } from "../utils/carMethods";

export const CarDetailContext = React.createContext();

// คือ context ที่ทำหน้าที่เก็บรายละเอียดรถนยนต์ทั้งหมดเลย ของรุ่นนั้นๆ อย่างละเอียด
// Ex.
// Acceleration: 2.8
// Wheelbase: 2700
// carbrand: "lamborghini"
// combined: "18.0 l/100km"
// name: "AVENTADOR SVJ"
// powerKW: 566
// powerPS: 770
// srcImg: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
// stores: [{…}]
// topspeed: 350

const CarDetailProvider = ({ children }) => {
  const { carbrand, car } = useParams();

  return (
    <CarDetailContext.Provider value={{ ...getEachCarDetail(carbrand, car), carbrand:carbrand}}>
      {children}
    </CarDetailContext.Provider>
  );
};

export default CarDetailProvider;
