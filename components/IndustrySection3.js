"use client";
import Image from "next/image";

function IndustrySection3({ data }) {
  const { section3Content } = data;
  return (
    <div className="min-h-screen  flex justify-center items-center">
    <div className="container mx-auto p-12 bg-white rounded-xl max-w-8xl">
     {/*  <h1 className="text-5xl font-bold mb-6 text-green-700">
       {section3Content.title}
      </h1> */}
      <h2 className="text-3xl p-8 font-bold text-orange-500 mb-6">
        {section3Content.tagLine}
      </h2>
      <p className="text-base font-bold mb-6">
        {section3Content.mainContent}
      </p>

      <div className="flex flex-wrap -mx-3 mb-6">
        {/* First Column */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" data-aos="fade-up-right">
          <div className="rounded-lg h-full">
            {/*   <h3 className="text-lg md:text-xl font-semibold mb-4">
              Customized Curriculum Development
            </h3> */}
            <div className="flex flex-col sm:flex-row items-center">
              {/* Content */}
              <div className="sm:w-1/2 sm:pl-4">
                <p className="text-sm md:text-base">
                 {section3Content.row1LeftContent}
                </p>
              </div>

              {/* Image */}
              <div className="sm:w-1/2">
                <Image
                  src={section3Content.row1LeftImage}
                  alt="Cap Image"
                  width={700}
                  height={800}
                  layout="responsive"
                  className="w-full rounded-lg mb-4 sm:mb-13 static"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" data-aos="fade-up-left">
          <div className="rounded-lg h-full">
            {/* <h3 className="text-lg md:text-xl font-semibold mb-4">
              Technology-Enhanced Learning
            </h3> */}
            <div className="flex flex-col sm:flex-row items-center">
              {/* Image */}
              <div className="sm:w-1/2 p-10">
                <Image
                  src={section3Content.row1RightImage}
                  alt="Laptop Image"
                  width={100}
                  height={100}
                  layout="responsive"
                  className="w-full rounded-lg mb-4 sm:mb-0"
                />
              </div>

              {/* Content */}
              <div className="sm:w-1/2 sm:pl-4">
                <p className="text-sm md:text-base">
                {section3Content.row1RightContent}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        {/* First Column */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" data-aos="fade-down-right">
          <div className="rounded-lg h-full">
            {/*   <h3 className="text-lg md:text-xl font-semibold mb-4">
              Customized Curriculum Development
            </h3> */}
            <div className="flex flex-col sm:flex-row items-center">
              {/* Content */}
              <div className="sm:w-1/2 sm:pl-4">
                <p className="text-sm md:text-base">
                 {section3Content.row2LeftContent}
                </p>
              </div>

              {/* Image */}
              <div className="sm:w-1/2">
                <Image
                  src={section3Content.row2LeftImage}
                  alt="Cap Image"
                  width={700}
                  height={800}
                  layout="responsive"
                  className="w-full rounded-lg mb-4 sm:mb-13"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" data-aos="fade-down-left">
          <div className="rounded-lg h-full">
            {/* <h3 className="text-lg md:text-xl font-semibold mb-4">
              Technology-Enhanced Learning
            </h3> */}
            <div className="flex flex-col sm:flex-row items-center">
              {/* Image */}
              <div className="sm:w-1/2 p-10">
                <Image
                  src={section3Content.row2RightImage}
                  alt="Laptop Image"
                  width={100}
                  height={100}
                  layout="responsive"
                  className="w-full rounded-lg mb-4 sm:mb-0"
                />
              </div>

              {/* Content */}
              <div className="sm:w-1/2 sm:pl-4">
                <p className="text-sm md:text-base">
                {section3Content.row1RightContent}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  );
}

export default IndustrySection3;