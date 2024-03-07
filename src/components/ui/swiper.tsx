"use client";
import React, { use, useRef, useState } from "react";
// Import Swiper React components

import { Swiper as Slider, SwiperSlide as Slides } from "swiper/react";

/** Import swiper  */
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
/**  */

export const Swiper: React.FC<any> = ({ children, ...props }) => {
  return (
    <Slider {...props} modules={[Pagination, Autoplay]}>
      {children}
    </Slider>
  );
};

export const SwiperSlide: React.FC<any> = ({ children }) => {
  return <Slides>{children}</Slides>;
};
