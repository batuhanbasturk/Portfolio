"use client";

import { useSwiper } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const SwiperButtons = ({ containerStyles, btnStyles }) => {
  const swiper = useSwiper();
  if (!swiper) {
    return null;
  }
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <FaArrowLeft />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default SwiperButtons;
