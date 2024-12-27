"use client";
import Image from "next/image";

function IndustrySection4({ data }) {
  const { section4Content } = data;
  return (
    <div>
    <div className="min-h-screen  bg-orange-100 flex justify-center items-center">
      <div className="container mx-auto p-12 rounded-xl max-w-8xl">
        <h1 className="text-5xl font-bold mb-6 text-green-700">{section4Content.title}</h1>
        <h2 className="text-2xl font-bold mb-6 text-orange-500">
          {/* {section1Content.tagLine} */}
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1 space-y-6">
            <p className="text-gray-700 text-lg" data-aos="fade-right">
             {section4Content.passage1} <br />
              <br />
              {section4Content.passage2}
              <br />
              <br />
              {section4Content.passage3}
            </p>
          </div>

          <div
            className="flex-1 flex justify-center items-center"
            data-aos="fade-left"
          >
            <div>
              <Image
                src={section4Content.sec4Image}
                alt="Market Graph Image"
                width={700}
                height={800}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default IndustrySection4;