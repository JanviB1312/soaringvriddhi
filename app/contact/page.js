"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/layouts/layout";
import "aos/dist/aos.css";
import Image from "next/image";
import Aos from "aos";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data?.success) {
        alert(data?.message);
        setFormData({
          name: "",
          email: "",
          mobile_no: "",
          message: "",
        });
      } else {
        alert(data?.message);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <Layout>
      <div className="industify_fn_contact">
        <div className="container ">
          <div className="contact_in">
            <div className="mt-24 sm:mt-24 md:mt-48">
              <div
                className=" flex flex-col place-items-center p-4 sm:p-10 text-center"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <h2 className="sm:text-3xl lg:text-6xl text-gray-800 font-bold mb-8">
                  Evolving with Purpose
                </h2>
                <h3 className="sm:text-xl lg:text-4xl text-red-500 mb-4">
                  Company of Innovative Professionals Embarking on a New Journey
                </h3>
                <h4 className="sm:text-md lg:text-lg text-gray-600 mb-4">
                  We specialize in providing tailor-made solutions that are
                  precisely tailored to meet the unique needs of each project.
                  Leveraging state-of-the-art technology, we offer innovative
                  solutions such as laser-based maintenance-free gas analyzers,
                  true wireless systems, online insulation monitoring, and
                  poly-silicon coatings for insulators.Despite being a new
                  player in the industry, our products have already made a
                  significant impact on the global stage. With a presence in
                  over 45 countries, we boast the largest installation base
                  worldwide. Our principles are pioneers in their respective
                  technologies, with a proven track record of success.Our
                  solutions find applications across a wide range of industries,
                  including refineries, petrochemicals, chemicals, metals, power
                  plants, and pharmaceuticals. From large-scale industrial
                  projects to specialized niche applications, we have the
                  expertise to deliver results.
                </h4>
              </div>

              <div className="relative w-full overflow-hidden">
                <Image
                  objectFit="cover"
                  quality={100}
                  alt="Background"
                  className="z-0 opacity-95"
                  width={1920}
                  height={1080}
                  src={"/img/about/new1.gif"}
                />
                <div className="flex flex-col md:flex-row lg:justify-center md:justify-center items-center h-auto md:h-auto sm:justify-start">
                  <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center">
                    <div
                      data-aos="zoom-in"
                      data-aos-delay="300"
                      className="bg-white p-4 md:p-8 bg-opacity-80 rounded shadow-lg z-10 w-full md:w-auto"
                    >
                      <h2 className="sm:text-xs md:text-4xl text-gray-800 font-bold mb-4 md:mb-8">
                        Certified Expertise and Efficient Service
                      </h2>
                      <h4 className="text-xxs sm:text-xxs md:text-lg text-gray-600 mb-2 md:mb-4">
                        All our engineers are certified by our principles which
                        make them experts for instant solving of any service
                        issues. We take pride in even repairing instruments not
                        even supplied by us. We make sure that any instrument
                        which comes to us for service is repaired and validated
                        in shortest possible time.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 m-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-medium leading-6 text-red-600">
                Find Us Here
              </h3>
              <div className="mt-2">
                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.911355112138!2d77.47296654030458!3d28.571093625151967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cec195becc479%3A0xfccf19e36bc0da2f!2sSree%20Ram%20Apartment%20Sector%2010%2C%20Greater%20Noida%20Authority%20LIG%20Flats!5e0!3m2!1sen!2sus!4v1719405331250!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-red-600">
                  Company Information:
                </h4>
                <p className="text-sm text-gray-600 mt-1 mb-2">
                Address: 001FF, Block 130, Lig Apartment, Sector 10 Greater Noida ,Gautam 
                 Buddh Nagar ,Uttar Pradesh
                </p>
                <p className="text-sm font-semibold text-red-600 mt-1">
                  PIN:{" "}
                  <span className="text-base text-gray-600 mt-1 mb-2">
                    201308
                  </span>
                </p>
                <p className="text-sm font-semibold text-red-600 mt-1">
                  Phone:{" "}
                  <span className="text-base text-gray-600 mt-1 mb-2">
                    (+91) 9313099137
                  </span>
                </p>
                <p className="text-sm font-semibold text-red-600 mt-1">
                  Email:{" "}
                  <span className="text-base text-gray-600 mt-1 mb-2">
                    info@acquireservices.in
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <OthersForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

const OthersForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg space-y-4">
      <form onSubmit={handleSubmit}>
        <h3 className="text-lg font-medium leading-6 text-red-500 mb-4">
          Send a Message
        </h3>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border rounded-md mb-3"
        />
        <input
          name="email"
          type="email"
          placeholder="E-Mail"
          value={formData.email}
          onChange={handleChange}
          className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border rounded-md mb-3"
        />
        <input
          name="mobile_no"
          type="tel"
          placeholder="Mobile"
          value={formData.mobile_no}
          onChange={handleChange}
          className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border rounded-md mb-3"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border rounded-md mb-9"
        ></textarea>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-10">
          Submit
        </button>
      </form>
    </div>
  );
};
