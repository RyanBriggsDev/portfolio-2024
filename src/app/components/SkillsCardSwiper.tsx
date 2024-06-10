"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type skillsCardSwiperType = {
  title: string;
  skills: {
    name: string;
    image: string;
  }[];
};

type SkillsCardSwiperProps = {
  data: skillsCardSwiperType;
  activeTab: string;
};

const SkillsCardSwiper: React.FC<SkillsCardSwiperProps> = ({
  data,
  activeTab,
}) => {
  return (
    <Swiper
      spaceBetween={60}
      className={`${data.title.toLowerCase()}-swiper`}
      slidesPerView={3}
      data-title={data.title.toLowerCase()}
      style={
        activeTab === data.title.toLowerCase()
          ? { display: "block" }
          : { display: "none" }
      }
    >
      {data.skills.map((skill, index) => (
        <SwiperSlide key={index}>
          {/* <img src={skill.image} alt={skill.name} /> */}
          <p>{skill.name}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SkillsCardSwiper;
