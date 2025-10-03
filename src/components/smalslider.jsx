import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img from "../assets/images/swipe.png"

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Smalslider = () => {
  return (
    <div className="w-full h-64 mx-auto my-[1rem]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
            delay: 2000,            // har 3 soniyada slayd almashadi
            disableOnInteraction: false, // foydalanuvchi bosganda ham davom etadi
          }}
        loop={true}
        className="rounded-2xl shadow-lg"
      >
        <SwiperSlide>
          <img
            src={img}
            alt="Slide 1"
            className="w-full h-[70vh] object-cover rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Smalslider;
