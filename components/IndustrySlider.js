// UniversitySlider.jsx
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample data for the slide

const IndustrySlider = ({ universities }) => {

    // ...your settings as updated above
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // You want to show 4 slides at a time
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
      <div className="container mx-auto px-4 py-8">
        <Slider {...settings}>
          {universities.map((uni, index) => (
            <div key={index} className="flex justify-center items-center flex-col p-4">
              <Image src={uni.imageUrl} alt={uni.name} width={500} height={300} objectFit="contain" className="rounded-xl" />
              <p className="text-lg font-semibold mt-4">{uni.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  
};

export default IndustrySlider;
