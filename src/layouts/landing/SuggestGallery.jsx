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
            imageURL="car-images/mercedes-Benz/SALOONS/C-Class_Saloon/1.jpg"
            carName="C-Class Saloon"
            description="ผู้จำหน่าย 4 ร้าน"
            price="เริ่มต้น 2,700,000"
            carLink="mercedes-Benz/C-Class%20Saloon"
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <GalleryContent
            imageURL="car-images/mercedes-Benz/SUVs/G-Class/1.jpg"
            carName="G-Class"
            description="ผู้จำหน่าย 1 ร้าน"
            price="เริ่มต้น 6,990,000"
            carLink="mercedes-Benz/G-Class"
          />
        </SwiperSlide>
      
        <SwiperSlide>
          <GalleryContent
            imageURL="car-images/mercedes-Benz/VAN/V-Class/1.jpg"
            carName="V-Class"
            description="ผู้จำหน่าย 3 ร้าน"
            price="เริ่มต้น 5,400,000"
            carLink="mercedes-Benz/V-Class"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryContent
            imageURL="car-images/audi/A6/RS6_Avant/1.jpg"
            carName="RS6 Avant"
            description="ผู้จำหน่าย 1 ร้าน"
            price="เริ่มต้น 9,990,000"
            carLink="audi/RS6%20Avant"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryContent
            imageURL="car-images/lamborghini/URUS/URUS_PERFORMANTE/1.jpg"
            carName="URUS PERFORMANTE"
            description="ผู้จำหน่าย 2 ร้าน"
            price="เริ่มต้น 8,100,000"
            carLink="lamborghini/URUS%20PERFORMANTE"
          />
        </SwiperSlide>

    
      </Gallery>
    </>
  );
};

export default LandingGallery;
