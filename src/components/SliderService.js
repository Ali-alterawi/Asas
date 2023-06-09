import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import  V1 from "../images/V1.png"
import  V2 from "../images/V21.png"
import  V3 from "../images/V3.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../Css/SliderService.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const SliderService = () => {
  return (
    <>
      <div className="SliderService-bg">
        <div className=" container">
          <div className="SliderText text-center pt-5">
            <h3>OUR SERVICES</h3>
            <h1>We Offer the Following <br/>Services</h1>
          </div>
          <div className="SliderImages">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={V1} alt="1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={V2} alt="2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={V3} alt="3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={V1} alt="1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={V2} alt="2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={V3} alt="3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={V1} alt="1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={V2} alt="2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={V3} alt="3" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderService;
