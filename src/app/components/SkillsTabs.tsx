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
    <div className="skills-tabs mb-3">
      <Swiper
        className="skills-swiper-navigation"
        slidesPerView={"auto"}
        spaceBetween={30}
      >
        {data.map((skillType) => (
          <SwiperSlide
            className="!w-fit cursor-pointer duration-300 ease-in-out hover:text-[#005995]"
            onClick={() => setActiveTab(skillType.title.toLowerCase())}
          >
            {skillType.title}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillsTabs;
