import React from "react";
import { getModelDetail } from "../../utils/getModelsFromBrand";

const Content = ({ brand, models }) => {
  return (
    <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 content-start">
      {getModelDetail(brand).map((model) => {
        const carsOnEachModel = Object.keys(model.cars).map(
          (key) => model.cars[key]
        ); // เรามีชื่อ model อยู่ที่มาจากแต่ละ brand ทำการ หาว่าแล้วใน model นี้มีรถยีรุ่นไหนที่แตกย่อยลงมาอีกบ้าง
        
        
        return carsOnEachModel.map((car) => {
          return <EachModelContent key={car.name} {...car} modelName={model.modelName}/>;
        });
      })}
    </div>
  );
};

const EachModelContent = (props) => {
  console.log(props)

  return (
    <div className="bg-lighten-3/80 p-2 rounded-sm">
      <div className="w-full aspect-square bg-lighten-2 rounded"></div>
      <div>asd</div>
    </div>
  );
};

export default React.memo(Content);
