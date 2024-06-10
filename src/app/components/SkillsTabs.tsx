"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type SkillType = {
  title: string;
};

type SkillsTabsProps = {
  data: SkillType[];
  setActiveTab: (title: string) => void;
};

const SkillsTabs: React.FC<SkillsTabsProps> = ({ data, setActiveTab }) => {
  return (
    <Swiper
      className="skills-swiper-navigation"
      slidesPerView={"auto"}
      spaceBetween={30}
    >
      {data.map((skillType) => (
        <SwiperSlide
          className="!w-fit"
          onClick={() => setActiveTab(skillType.title.toLowerCase())}
        >
          {skillType.title}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SkillsTabs;
