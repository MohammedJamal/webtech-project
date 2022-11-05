import React from "react";
import { useParams } from "react-router-dom";

/* ============== Components & Layouts ============== */
import Content from "../components/carbrand/Content";
import TopBar from "../components/carbrand/TopBar";
import LeftBar from "../components/carbrand/LeftBar";

const CarBrand = () => {
    const {carbrand} = useParams();
    
    return (
        <>
            <TopBar />
            <div className="flex px-6">
                <LeftBar />
                <Content />
            </div>
        </>
    )
}

export default CarBrand;