// "use client";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import SkillsCard from "./SkillsCard";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// type skillsCardSwiperType = {
//   title: string;
//   skills: {
//     name: string;
//     image: string;
//   }[];
// };

// type SkillsCardSwiperProps = {
//   data: skillsCardSwiperType;
//   activeTab: string;
// };

// const SkillsCardSwiper: React.FC<SkillsCardSwiperProps> = ({
//   data,
//   activeTab,
// }) => {
//   return (
//     <div
//       className="skills-card-tab-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
//       style={
//         activeTab === data.title.toLowerCase()
//           ? { display: "grid" }
//           : { display: "none" }
//       }
//     >
//       {data.skills.map((skill, index) => (
//         <SkillsCard data={skill} key={index} />
//       ))}
//     </div>
//   );
// };

// export default SkillsCardSwiper;

// // <Swiper
// //   spaceBetween={60}
// //   className={`${data.title.toLowerCase()}-swiper`}
// //   slidesPerView={1.8}
// //   data-title={data.title.toLowerCase()}
// //   breakpoints={{
// //     440: {
// //       slidesPerView: 2.8,
// //     },
// //     1024: {
// //       slidesPerView: 3.8,
// //     },
// //     1440: {
// //       slidesPerView: 4.8,
// //     },
// //   }}
// //   style={
// //     activeTab === data.title.toLowerCase()
// //       ? { display: "block" }
// //       : { display: "none" }
// //   }
// // >
// //   {data.skills.map((skill, index) => (
// //     <SwiperSlide key={index}>
// //       <SkillsCard data={skill} />
// //     </SwiperSlide>
// //   ))}
// // </Swiper>
