"use client";
import React, { useState } from "react";
import BaseComponent from "../../components/BaseComponent";

export default function Page() {
  const contentData = [
    {
      title: "Industrial Cleaning Services",
      passage1:
        "Our Industrial Cleaning Services are designed to handle the heavy-duty cleaning needs of manufacturing facilities, warehouses, and other industrial settings. We employ specialized techniques and equipment to ensure thorough cleaning and maintenance of industrial spaces.",
      passage2:
        "We address a wide range of industrial cleaning challenges, from degreasing heavy machinery to cleaning industrial floors and surfaces, ensuring compliance with health and safety standards.",
      passage3:
        "Our team is trained in handling hazardous materials and waste, providing not only cleaning but also ensuring environmental safety and compliance.",
      image: "/img/services/industrialcleaning.jpg",
    },
    {
      title: "Commercial Cleaning Services",

      passage1:
        "Our Commercial Cleaning Services ensure that your business spaces, including offices, retail stores, and other commercial properties, are immaculate, fostering a healthy and appealing environment for both customers and employees.",
      passage2:
        "We use eco-friendly cleaning products and state-of-the-art equipment to deliver a superior clean that enhances your commercial space's appearance and hygiene.",
      passage3:
        "Our services are tailored to your business hours to provide flexibility and convenience, ensuring that our operations do not disrupt your daily activities.",

      image: "/img/services/comm.webp",
    },
    {
      title: "Residential Cleaning Services",

      passage1:
        "Our Residential Cleaning Services provide thorough and detailed cleaning solutions for homes of all sizes. From routine cleaning to deep cleaning sessions, we ensure that your living space is spotless and hygienic.",
      passage2:
        "We offer flexible scheduling options to accommodate the unique needs and preferences of each household, ensuring minimal disruption to your daily routines.",
      passage3:
        "Our experienced cleaners use safe and effective cleaning products and techniques, paying special attention to high-touch areas to enhance your home's overall cleanliness and safety.",
      image: "/img/services/residential.webp",
    },
    {
      title: "Post-Construction Cleaning Services",

      passage1:
        "After construction work, our Post-Construction Cleaning Services come in to transform your newly built or renovated space into a clean and ready-to-use area. We remove all traces of construction debris, dust, and dirt, ensuring a thorough clean-up.",
      passage2:
        "Our team handles everything from dusting and washing all surfaces to cleaning windows, floors, and other finishes that often accumulate dirt during construction.",
      passage3:
        "We use specialized tools and cleaning products that are effective against construction residue, ensuring that every corner of your space is impeccably clean.",

      image: "/img/services/postconstruction.jpg",
    },
    {
      title: "Problem-Solving Cleaning Services",

      passage1:
        "Our Problem-Solving Cleaning Services are designed to tackle specific and challenging cleaning issues such as stain removal, odor elimination, and other difficult cleaning tasks that require professional attention.",
      passage2:
        "We employ advanced techniques and specialized products to effectively address and resolve these issues, restoring the cleanliness and comfort of your space.",
      passage3:
        "Our experienced technicians assess the problem areas and apply targeted solutions to ensure that the issues are comprehensively addressed.",

      image: "/img/services/problemsolving.png",
    },
    {
      title: "Event Cleaning Services",

      passage1:
        "Our Event Cleaning Services provide comprehensive cleaning before, during, and after events, ensuring that venues are pristine and maintained throughout all phases of the event.",
      passage2:
        "We handle all aspects of event cleaning, from setting up a clean venue to post-event waste disposal and site restoration, ensuring a seamless experience for organizers and attendees.",
      passage3:
        "Our services are scalable to any size event, from private gatherings to large public events, and we customize our offerings to meet the specific needs of each event.",

      image: "/img/services/eventcleaning.jpg",
    },
    {
      title: "Sanitization and Disinfection Services",

      passage1:
        "In today's world, ensuring the cleanliness of your environment extends beyond simple cleaning. Our Sanitization and Disinfection Services provide a deep clean that targets and eliminates bacteria, viruses, and other harmful pathogens.",
      passage2:
        "We use EPA-approved disinfectants and follow CDC guidelines to ensure a high standard of hygiene, particularly in areas prone to high-touch or high-traffic.",
      passage3:
        "Our services are essential for places like schools, offices, healthcare facilities, and public transport, where the risk of germ transmission is higher.",

      image: "/img/services/sanitization.jpg",
    },
  ];
  const commondata = 
  {
    image: "/img/services/housekeeping.jpg",
    description:
    "Our comprehensive housekeeping services include everything from routine cleaning and maintenance to specialized deep cleaning tasks. We ensure your spaces are maintained to the highest standards of cleanliness and hygiene. Whether it’s daily upkeep for a corporate office or detailed cleaning for residential properties, our professional team is equipped to handle all your housekeeping needs efficiently and thoroughly.",
    title: "House Keeping Services",
  };

  return (
    <BaseComponent contentData={contentData} commondata={commondata}/>
  );
}
