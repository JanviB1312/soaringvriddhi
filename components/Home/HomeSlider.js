"use client";

import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { slidersDataArray } from "@/lib/data";

register();


const slider1 = "/img/slider/1.jpg";
const slider2 = "/img/slider/4.jpg";
const slider3 = "/img/slider/3.jpg";
const slider4 = "/img/slider/4.jpg";
const slider5 = "/img/slider/5.jpg";

export default function HomeSlider() {
  return (
    <>
      <div
        className="industify_slider_alpha"
        data-desc-show="yes"
        data-category-show="yes"
        data-nav-types="square"
        data-autoplay-switch="enabled"
        data-autoplay-time="8000"
        data-effect="cards"
        data-progress="enabled"
        data-box-pos="cr"
        data-img-effect="enabled"
        data-text-effect="enabled"
      >

        <div className="owl_control">
          <div className="fn_prev">
            <span>
              <span className="a"></span>
              <span className="b"></span>
              <span className="c"></span>
            </span>
          </div>
          <div className="fn_next">
            <span>
              <span className="a"></span>
              <span className="b"></span>
              <span className="c"></span>
            </span>
          </div>
        </div>

        <div className="swiper-pagination"></div>

        <Swiper
          spaceBetween={2}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: ".fn_prev",
            nextEl: ".fn_next",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="custom-class"
        >
          {slidersDataArray.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <div className="item mt-24">
                  <div
                    className="img_holder bg-no-repeat bg-center bg-cover relative w-full h-full bg-white bg-opacity-50"
                    style={{ backgroundImage: `url(${data.bg})` }}
                  ></div>
                  <div className="title_holder">
                    <div className="inner">
                      <div className="in">
                        <h3>
                          <span>{data.title}</span>
                        </h3>
                        <div className="desc">
                          <span>{data.desc}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          
        </Swiper>
      </div>
    </>
  );
}
