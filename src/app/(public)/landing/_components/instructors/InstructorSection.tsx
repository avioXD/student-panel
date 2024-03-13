"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { InstructorCard } from "./_components/InstructorCard";
import { instructorSection, instructors } from "./content";

/** Import swiper  */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
/**  */

export const InstructorSection = () => {
  return (
    <section className="relative">
      <div className="absolute backdrop-blur-sm left-0 right-0 top-20 bottom-0">
        <div className=" absolute top-[2%] left-[20%]  w-[400px] h-[400px] rotate-45 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
        <div className=" absolute bottom-[10%] right-[20%]  w-80 h-[60%] bg-red-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
      </div>
      <MaxWidthWrapper className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 py-[50px] ">
          <div className="col-span-1  flex flex-col ">
            <h2 className="text-2xl mb-1">{instructorSection.title_sub}</h2>
            <h2 className="text-heading">{instructorSection.title}</h2>
            <p className="text-subheading mt-4">
              {instructorSection.description}
            </p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="  ">
              <Swiper
                pagination={true}
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
              >
                {instructors.map((instructor) => (
                  <SwiperSlide key={instructor.id} className="px-4">
                    <InstructorCard data={instructor} className="my-4" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
