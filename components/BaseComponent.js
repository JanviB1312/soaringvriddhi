"use client";
import React, { useEffect } from "react";
import Layout from "@/layouts/layout";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

export default function BaseComponent({ contentData, commondata }) {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <Layout>
      <div className="relative mt-60 md:mt-12 lg:mt-8 mb-12">
        <div className="h-[50vh] md:h-[50vh] lg:h-[500px] w-full relative">
          <Image
            src={commondata?.image}
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Background"
            className="opacity-20"
          />
        </div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center bg-opacity-50 p-4 md:p-6 rounded-lg mt-8 md:mt-16 lg:mt-32">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-red-500">
              {commondata?.title}
            </h1>
            <p className="text-base md:text-lg lg:text-lg text-gray-700 px-4 md:px-16 lg:pl-36 lg:pr-36">
              {commondata.description}
            </p>
          </div>
        </div>
      </div>

      {contentData.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={index} className={`md:p-12 lg:p-12 ${isEven ? "" : "bg-red-50"}`}>
            <div
              className={`flex flex-col md:flex-row ${
                isEven ? "md:flex-row-reverse ml-12" : "ml-8"
              } gap-12 mb-8 md:mb-0 items-center`}
            >
              <div
                className="flex justify-center items-center w-full md:w-1/2 lg:w-1/2 h-64 "
                data-aos={isEven ? "fade-right" : "fade-left"}
              >
                <div className="w-full h-full relative">
                  <Image
                    src={service.image}
                    layout="fill"
                    objectFit="contain"
                    alt="Exterior"
                    className="rounded-2xl"
                  />
                </div>
              </div>
              <div
                className={"max-w-xl w-full md:w-1/2 lg:w-1/2 mr-4"}
                data-aos={isEven ? "fade-left" : "fade-right"}
              >
                <h2 className="text-xl font-bold mb-4">{service.title}</h2>
                <p className="text-base mb-2">{service.passage1}</p>
                <p className="text-base mb-2">{service.passage2}</p>
                <p className="text-base">{service.passage3}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}