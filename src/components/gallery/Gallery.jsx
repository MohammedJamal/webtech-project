import React from "react";

// Import Swiper React components 🎫
import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles 💅
import "swiper/css/bundle";

const Gallery = ({ children }) => {
  return (
    <Swiper
      autoplay={{
        delay: 2000,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      loop={false}
      breakpoints={{
        // when window width is >= 320px
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1020: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default Gallery;
