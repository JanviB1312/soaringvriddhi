import Image from "next/image";
import React, { useEffect } from "react";

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

function IndustryContact({ data }) {
  return (
    <div className="relative">
      {/* <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40"></div> */}
      <div className="p-4 sm:p-24 bg-logo-blue w-full flex flex-col sm:flex-row gap-4">
        <div
          className="absolute inset-0 bg-white opacity-100"
          style={{
            backgroundImage: `url('/img/world-map.webp')`,
            backgroundSize: "cover",
            filter: "blur(4px)",
          }}
        ></div>
        <div className="relative z-10 w-1/3 grid max-sm:grid-rows-2 ">
          <Image
            // className=" rounded-md rounded-tl-none rounded-bl-none"
            width={700}
            height={700}
            src={data.logohref}
            alt="doltan logo"
          />
          {/* <div className=" text-black w-full h-full px-4 py-2 flex flex-col gap-4 place-content-between">
            <div className="flex flex-col gap-4">
              <div className="text-xl font-bold">Learning made simple</div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="text-3xl  ">Contact</div>
              <div className="text-sm row-span-4 ">
                <div className="grid grid-cols-12 text-base font-sans">
                  <div className="col-span-4 sm:col-span-4">Address:</div>

                  <a
                    className="col-span-8 sm:col-span-8"
                    href="https://maps.app.goo.gl/SWmSh9HqNsdVTN6e8"
                    target="_blank"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum
                  </a>
                </div>
                <div className="grid grid-cols-12 text-base font-sans">
                  <div className="col-span-4 sm:col-span-4">Email:</div>

                  <div className="col-span-8 sm:col-span-8  ">
                    <a href="mailto:doltan@navsant.in">doltan@navsant.in</a>
                  </div>
                </div>
                <div className="grid grid-cols-12 text-base font-sans">
                  <div className="col-span-4 sm:col-span-4">Contact No.:</div>

                  <div className="col-span-8 sm:col-span-8">
                    <a href="tel:6031112298">6031112298</a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="relative w-2/3">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent z-10">
            <div className=" text-black w-full h-full px-4 py-2 flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <div className="text-xl font-bold">Lets Connect</div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <div className="text-sm row-span-4 ">
                  <div className="grid grid-cols-12 text-base font-sans">
                    <div className="col-span-4 sm:col-span-4">Address:</div>

                    <a
                      className="col-span-8 sm:col-span-8"
                      href="https://maps.app.goo.gl/SWmSh9HqNsdVTN6e8"
                      target="_blank"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum
                    </a>
                  </div>
                  <div className="grid grid-cols-12 text-base font-sans">
                    <div className="col-span-4 sm:col-span-4">Email:</div>

                    <div className="col-span-8 sm:col-span-8  ">
                      <a href="mailto:doltan@navsant.in">doltan@navsant.in</a>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 text-base font-sans">
                    <div className="col-span-4 sm:col-span-4">Contact No.:</div>

                    <div className="col-span-8 sm:col-span-8">
                      <a href="tel:6031112298">6031112298</a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <iframe
            className="absolute inset-0"
            width="100%"
            height="420"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed&amp;"
          ></iframe>
        </div> */}
        <div className="flex flex-col justify-between px-4">
          <div
            className="contact-padding aos-init aos-animate w-full px-4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="contact2-auhtor-section w-full bg-white text-logo-blue hover:bg-education-orange hover:text-white p-4 rounded space-x-5 flex transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="clock-area flex">
                <Image
                  width={40}
                  height={40}
                  src="/svg/location.svg"
                  alt="clock"
                />
              </div>
              <div className="contact-location flex flex-col gap-4 w-5/6">
                <p class="font-semibold text-xl leading-4">Address</p>
                <a
                  href="https://maps.app.goo.gl/SWmSh9HqNsdVTN6e8"
                  target="_blank"
                  className="text-lg"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum
                </a>
              </div>
            </div>
          </div>
          <div
            className="contact-padding aos-init aos-animate w-full px-4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="contact2-auhtor-section w-full bg-white text-logo-blue hover:bg-education-orange hover:text-white p-4 rounded flex space-x-5  transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="clock-area flex">
                <Image
                  width={40}
                  height={40}
                  src="/svg/email3.svg"
                  alt="clock"
                />
              </div>
              <div className="contact-location flex flex-col gap-4 w-5/6">
                <p class="font-semibold text-xl leading-4">Email</p>

                <a href="mailto: sales@smarttechnosystem.com" className="text-lg">
                sales@smarttechnosystem.com
                </a>
              </div>
            </div>
          </div>
          <div
            className="contact-padding aos-init aos-animate w-full px-4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="contact2-auhtor-section w-full bg-white text-logo-blue hover:bg-education-orange hover:text-white p-4 rounded flex space-x-5 transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="clock-area flex">
                <Image
                  width={40}
                  height={40}
                  src="/svg/phone-call-icon.svg"
                  alt="clock"
                />
              </div>
              <div className="contact-location flex flex-col gap-4 w-5/6">
                <p class="font-semibold text-xl leading-4">Contact us</p>
                <p className="text-lg">
                  <a href="tel:6031112298">1231231232</a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustryContact;
