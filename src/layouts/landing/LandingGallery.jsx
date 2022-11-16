import React from "react";
import Gallery from "../../components/gallery/Gallery";
import GalleryContent from "../../components/gallery/GalleryContent";
import { SwiperSlide } from "swiper/react";

const LandingGallery = () => {
  return (
    <>
      <Gallery>
        <SwiperSlide>
          <GalleryContent
            imageURL="car-images/Porsche/718/718_Cayman/1.jpg"
            carName="718 Cayman"
            description="ผู้จำหน่าย 3 ร้าน"
            price="เริ่มต้น THB 5,650,000"
            carLink="/Porsche/718%20Cayman"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryContent
            imageURL="car-images/Porsche/718/718_Cayman_T/1.jpg"
            carName="718 Cayman T"
            description="ผู้จำหน่าย 2 ร้าน"
            price="เริ่มต้น THB 6,500,000"
            carLink="Porsche/718%20Cayman%20T"
          />
        </SwiperSlide>
       
        <SwiperSlide>
          <GalleryContent
            imageURL="car-images/bentley/FLYINGSPUR/Flying_Spur_Speed/1.jpeg"
            carName="Flying Spur Speed"
            description="ผู้จำหน่าย 1 ร้าน"
            price="เริ่มต้น THB 14,400,000"
            carLink="bentley/Flying%20Spur%20Speed"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryContent
            imageURL="car-images/bentley/CONTINENTALGTC/Continental_GTC_Mulliner/1.jpeg"
            carName="Continental GTC Mulliner"
            description="ผู้จำหน่าย 1 ร้าน"
            price="เริ่มต้น THB 20,000,000"
            carLink="bentley/Continental%20GTC%20Mulliner"
          />
        </SwiperSlide>
       
        <SwiperSlide>
          <GalleryContent
            imageURL="car-images/audi/A5/RS5_Coupe/1.jpg"
            carName="RS5 Coupe"
            description="ผู้จำหน่าย 2 ร้าน"
            price="เริ่มต้น 5,999,000"
            carLink="audi/RS5%20Coupe"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryContent
            imageURL="car-images/audi/Q8/RS_Q8/1.jpg"
            carName="RS Q8"
            description="ผู้จำหน่าย 3 ร้าน"
            price="เริ่มต้น 11,200,000"
            carLink="audi/RS%20Q8"
          />
        </SwiperSlide>
      </Gallery>
    </>
  );
};

export default LandingGallery;
