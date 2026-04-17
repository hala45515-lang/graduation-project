import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { img1, img2, img3 } from "../img";

const Banner = () => {
  return (
    <div className="transition-colors duration-500 bg-white dark:bg-gray-900">
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
          <img src={img1} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img2}/>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;