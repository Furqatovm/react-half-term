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

const Slider = () => {
  return (
    <div className="w-full h-[70vh] mx-auto my-[1rem]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
            delay: 2000,            
            disableOnInteraction: false, 
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
        <SwiperSlide>
          <img
            src="https://zon.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpollwon_desktop.29ae1837.webp&w=3840&q=75"
            alt="Slide 2"
            className="w-full h-[70vh] object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://zon.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fresanta-desk.f316dc1c.webp&w=3840&q=75"
            alt="Slide 3"
            className="w-full h-[70vh] object-cover rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
