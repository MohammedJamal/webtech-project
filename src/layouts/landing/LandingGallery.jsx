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
            imageURL="/sample-car.png"
            carName="Honda Civic"
            description="ผู้จำหน่าย 4 ร้าน + ออฟฟิเชี่ยล"
            price="เริ่มต้น 2,200,000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryContent
            imageURL="/sample-car-2.png"
            carName="Honda Civic"
            description="ผู้จำหน่าย 6 ร้าน"
            price="เริ่มต้น 2,200,000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryContent
            imageURL="/sample-car-3.png"
            carName="Honda Civic"
            description="ผู้จำหน่าย 1 ร้าน + ออฟฟิเชี่ยล"
            price="เริ่มต้น 2,200,000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryContent
            imageURL="https://img.autobytel.com/chrome/multiview/white/640/2022hyc03_640/2022hyc030017_640_01.jpg"
            carName="Honda Civic"
            description="ผู้จำหน่าย 4 ร้าน + ออฟฟิเชี่ย"
            price="เริ่มต้น 2,200,000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryContent
            imageURL="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Porsche-Taycan-190820221318.jpg&w=872&h=578&q=75&c=1"
            carName="Honda Civic"
            description="ผู้จำหน่าย 4 ร้าน + ออฟฟิเชี่ย"
            price="เริ่มต้น 2,200,000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryContent
            imageURL="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-ghost-white-fr-3-4-1-1598911711.jpg"
            carName="Honda Civic"
            description="ผู้จำหน่าย 4 ร้าน + ออฟฟิเชี่ย"
            price="เริ่มต้น 2,200,000"
          />
        </SwiperSlide>
      </Gallery>
    </>
  );
};

export default LandingGallery;
