// components/ContinuousSlider.jsx
import React from "react";
import Image from "next/image";

const ContinuousSlider = () => {
  // Array of image URLs, you can import this or define it elsewhere if you prefer.
  const logos = [
    "/img/Education/Logo1-sts.png",
    "/img/Education/Logo2-sts.jpg",
    "/img/Education/Logo3-sts.png",
    "/img/Education/Logo4-sts.jpg",
    "/img/Education/Logo5-sts.png",
    "/img/Education/Logo6-sts.png",
    "/img/Education/Logo7-sts.jpg",
    "/img/Education/Logo8-sts.jpg",
    "/img/Education/Logo9-sts.jpg",
    "/img/Education/Logo10-sts.jpg",
    "/img/Education/Logo11-sts.jpeg",
    "/img/Education/Logo12-sts.jpg",
    "/img/Education/Logo13-sts.png",
    "/img/Education/Logo14-sts.jpg",
    "/img/Education/Logo15-sts.png",
    "/img/Education/Logo16-sts.gif",
    "/img/Education/Logo17-sts.png",
    "/img/Education/Logo18-sts.png",
    "/img/Education/Logo19-sts.png",
    "/img/Education/Logo20-sts.jpg",
    "/img/Education/Logo21-sts.jpg",
  ];

  const isEven = (index) => index % 2 === 0;

  return (
    <div className="pb-20">
      <div className="w-screen flex justify-center">
        <h1 className="w-2/8 sm:w-2/8 text-5xl mb-10 p-6 text-black-500 rounded font-bold "> Our Customers </h1>
      </div>
      <div className="relative h-48">
        <div className="slide-track absolute top-0 left-0 right-0 flex whitespace-nowrap m-5 h-48 mb-36">
          {logos.map((logo, index) =>           
              isEven(index) ? (<div key={`even-${index}`} className="slide p-12" >
                <Image
                  src={logo}
                  alt={`Logo ${index}`}
                  width={250}
                  height={100}
                />
              </div> ):(
              // Empty div for spacing
              <div key={`odd-space-${index}`} className="slide" />
            )
          )}
        </div>
         <div className="slide-track-second-line absolute top-24 left-0 right-0 m-5flex whitespace-nowrap h-48 mt-36">
          {logos.map((logo, index) =>
            !isEven(index) ? (
              <div key={`odd-${index}`} className="slide">
                <Image
                  src={logo}
                  alt={`Logo ${index}`}
                  width={250}
                  height={100}
                  fixed
                />
              </div>
            ) : (
              // Empty div for spacing
              <div key={`odd-space-${index}`} className="slide" />
            )
          )}
        </div> 
      </div>
    </div>

  );
};

export default ContinuousSlider;
