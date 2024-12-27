"use client";
import Image from "next/image";

function IndustrySection2({ data }) {
  const { section2Content } = data;
  return (
    <div className="min-h-screen flex bg-green-50 justify-center items-center">
      <div className="container mx-auto p-12 rounded-xl max-w-8xl">
        <h1 className="text-5xl font-bold mb-6 text-green-700">{section2Content.title}</h1>
        <h2 className="text-2xl font-bold text-orange-500 mb-6">
          {section2Content.tagLine}
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-6">
          <div
            className="flex-1 flex justify-center items-center"
            data-aos="fade-right"
          >
            <div>
              <Image
                src={section2Content.sec2Image}
                alt="Education Image"
                width={700}
                height={800}
                layout="responsive"
              />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-gray-700 text-lg" data-aos="fade-left">
              {section2Content.passage1}
              <br />
              <br />
              {section2Content.passage2}
              <br />
              <br />
              {section2Content.passage3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustrySection2;