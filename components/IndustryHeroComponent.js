import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// const data = {
//   label: "Education Industry",
//   tag: "Education",
//   title: "Doltan Legends Education Consultancy Firm",
//   href: "",
//   link: "/business/serviceSinglePage1",
//   img: "img/thumb/480-700.jpg",
//   bg: "/img/service/single/education-3.jpg",
//   id: 1,
//   logohref: "/img/logos/education-logo.jpeg",
//   companyBrief:
//     "Through our history, we have championed initiatives to ensure access to quality education for all, while building some of India's finest institutions",
// };

function IndustryHeroComponent({ data }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="absolute top-0 left-0">
      <div className="hero-component font-bold text-white border p-2 sm:p-20 mt-80 flex flex-col sm:flex-row justify-between h-96 sm:h-max">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col justify-end gap-4"
        >
          <div className="tag bg-logo-blue text-base w-max font-light px-2 py-1">
            {data.tagText}
          </div>
          <div className="title text-5xl font-medium text-pretty">
            {data.title}
          </div>
          <div className="sm:ml-16 p-4 border-spacing-4 w-96 border-solid border-l-2 border-l-education-orange">
            {data.companyBrief}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustryHeroComponent;
