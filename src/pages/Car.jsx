import React, {  Suspense, useContext } from "react";
/* ============== Components & Layouts ============== */
import Header from "../components/car/Header";
const CarTabs = React.lazy(() => import("../layouts/car/CarTabs"));
import CarModal from "../components/car/CarModal"

const Car = () => {

  return (
    <div className="p-6 pt-12 lg:max-w-[50em] mx-auto pb-24">
      <Header  />
      <hr className="mb-4" />
      <Suspense fallback={<div>Loading...</div>}>
        <CarTabs />
      </Suspense>
      <CarModal /> {/* Modal */}
    </div>
  );
};

export default Car;
