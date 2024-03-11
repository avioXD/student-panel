"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import {
  TestimonialCardProps,
  testimonialContent,
  testimonialReviews,
} from "./content";

/** Import swiper  */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { TestimonialCard } from "./_components/TestimonialCard";
/**  */

export const TestimonialSection = () => {
  return (
    <section className="bg-black rounded-t-2xl relative ">
      <div className="absolute backdrop-blur-sm left-0 right-0 top-20 bottom-0">
        <div className=" absolute bottom-[10%] left-[20%]  w-[600px] h-[400px]   bg-green-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
        <div className=" absolute top-[10%] right-[10%]  w-[600px] h-[60%] bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
      </div>
      <MaxWidthWrapper>
        <div className="pt-[100px] flex flex-col relative">
          <div className="text-center flex flex-col gap-4 text-white mb-10 md:mb-12">
            <h2 className="text-heading ">{testimonialContent.title}</h2>
            <p className="text-subheading mx-auto">
              {testimonialContent.description}
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="relative pb-[100px]">
        <div className="flex flex-col gap-8">
          <div>
            <Swiper
              modules={[FreeMode, Pagination, Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="w-[100%] mx-4"
              freeMode={true}
              loop={true}
              autoplay={{
                delay: 0,
                pauseOnMouseEnter: true,
                reverseDirection: false,
              }}
              speed={6000}
            >
              {testimonialReviews.map((testimonial: TestimonialCardProps) => (
                <SwiperSlide key={testimonial.id} className="mx-4 md:mx-0">
                  <TestimonialCard data={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <Swiper
              modules={[FreeMode, Pagination, Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="w-[100%] mx-4"
              freeMode={true}
              loop={true}
              autoplay={{
                delay: 0,
                pauseOnMouseEnter: true,
                reverseDirection: true,
              }}
              speed={6000}
            >
              {testimonialReviews.map((testimonial: TestimonialCardProps) => (
                <SwiperSlide key={testimonial.id} className="mx-4 md:mx-0">
                  <TestimonialCard data={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
