import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import { businessPhotos } from "./Gallery/photos";
import Image from "next/image";

function IndustryGalleryComponent() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(index) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1, // increment index by 1 to match slide numbering
    });
  }
  return (
    <div className="w-screen p-4 sm:px-24 bg-gray-100">
      <div className="text-5xl font-semibold mb-6 text-black">Gallery</div>
      <div className="industry-gallery mb-10">
        <ul className="grid grid-cols-2 sm:grid-cols-3">
          {businessPhotos.map((data, index) => (
            <li key={index}>
              <div
                className="item lightbox"
                onClick={() => openLightboxOnSlide(index)}
              >
                <div
                  className="abs_img  "
                  style={{ backgroundImage: `url(${data.src})` }}
                />
                <Image
                  width={0}
                  height={0}
                  src={data.src}
                  className="h-[127px] md:h-[400px]"
                  alt={data.name || "Business photo"}
                />
                {/* Overlay div for name text */}
                <div className="photo-name-overlay">
                  <div className="sm:text-2xl mx-2 px-2 sm:mb-10 border-solid border-l border-education-orange sm:w-3/4">
                    {data.title}
                  </div>
                  {/* Assuming 'data.name' is where the photo's name is stored */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={businessPhotos.map((data) => data.src)}
        slide={lightboxController.slide}
      />
    </div>
  );
}

export default IndustryGalleryComponent;
