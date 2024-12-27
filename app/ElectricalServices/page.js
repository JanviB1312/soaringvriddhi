"use client";
import React, { useState } from "react";
import BaseComponent from "../../components/BaseComponent";

export default function Page() {
  const contentData = [
    {
      title: "Electrical New System Design & Installation",
      passage1:
        "Our Electrical New System Design & Installation service offers tailored solutions for a wide range of electrical systems, from residential wiring to industrial power distribution. We specialize in designing and installing electrical systems that meet the specific needs and requirements of each project.",
      passage2:
        "Beginning with a thorough assessment of your space, electrical load requirements, and safety considerations, we develop comprehensive designs that optimize performance, reliability, and energy efficiency. Our designs adhere to industry standards and regulatory requirements, ensuring compliance and safety.",
      passage3:
        "Our experienced electricians and engineers execute installations with precision and attention to detail, utilizing high-quality materials and advanced technologies to deliver reliable and efficient electrical systems. We prioritize open communication and collaboration with clients to ensure that their needs are met throughout the installation process.",
      image: "/img/services/electric1.webp",
    },
    {
      title: "MV/LV Electrical Distribution",
      passage1:
        "Our MV/LV Electrical Distribution services provide efficient and reliable power distribution solutions for medium-voltage (MV) and low-voltage (LV) electrical systems. We specialize in designing and installing distribution networks that meet the specific needs and requirements of industrial, commercial, and residential projects.",
      passage2:
        "Using advanced modeling and simulation tools, we analyze electrical loads, voltage levels, and distribution requirements to develop optimized distribution network designs. Our designs prioritize safety, reliability, and energy efficiency, ensuring efficient power delivery to all connected loads.",
      passage3:
        "Our skilled electricians and engineers execute distribution system installations with precision and attention to detail, adhering to industry standards and best practices. We utilize high-quality components and equipment to ensure the reliability and longevity of the distribution network.",
      image: "/img/services/mvlvelectrical.jpg",
    },
    {
      title: "Electrical Load Calculation",
      passage1:
        "Our Electrical Load Calculation service provides accurate assessments of electrical loads to ensure that electrical systems are properly sized and capable of meeting demand. We utilize industry-standard methodologies and software tools to analyze load requirements for residential, commercial, and industrial applications.",
      passage2:
        "By considering factors such as appliance usage, lighting requirements, HVAC systems, and future expansion plans, we determine the total electrical load for each project. Our calculations account for peak demand, diversity factors, and safety margins to ensure reliable and efficient system operation.",
      passage3:
        "Our load calculation reports provide detailed information on load profiles, demand patterns, and recommended system capacities. This information helps clients make informed decisions about electrical system design, equipment selection, and capacity planning.",
      image: "/img/services/loadcalculation.png",
    },
    {
      title: "Electrical Lighting Design",
      passage1:
        "Our Electrical Lighting Design service offers creative and functional lighting solutions for residential, commercial, and industrial spaces. We specialize in designing lighting layouts that enhance aesthetics, comfort, and productivity while maximizing energy efficiency and sustainability.",
      passage2:
        "Using advanced lighting design software and photometric analysis tools, we create lighting schemes that balance ambient, task, and accent lighting to meet the specific needs and preferences of each project. Our designs prioritize visual comfort, color rendering, and glare control to create inviting and visually appealing environments.",
      passage3:
        "Our experienced lighting designers collaborate closely with clients to understand their lighting goals and preferences, integrating architectural elements and design themes into the lighting scheme. We offer a wide range of lighting products and technologies to achieve the desired ambiance and functionality.",
      image: "/img/services/lightingdesign.webp",
    },
    {
      title: "Electrical Power Design",
      passage1:
        "Our Electrical Power Design service offers comprehensive solutions for designing electrical power systems that meet the specific needs and requirements of residential, commercial, and industrial projects. We specialize in developing efficient, reliable, and cost-effective power distribution solutions.",
      passage2:
        "Beginning with a thorough assessment of your power requirements, we develop customized power system designs that optimize performance, reliability, and energy efficiency. Our designs consider factors such as voltage levels, load profiles, fault tolerance, and future expansion.",
      passage3:
        "Our experienced engineers and electricians execute power system installations with precision and attention to detail, adhering to industry standards and best practices. We utilize high-quality equipment and components to ensure the reliability and longevity of the electrical infrastructure.",
      image: "/img/services/powerdesign.png",
    },
    {
      title: "Emergency Lighting Design",
      passage1:
        "Our Emergency Lighting Design service offers reliable and compliant emergency lighting solutions for various applications, ensuring safe egress and illumination in the event of power outages or emergencies. We specialize in designing and installing emergency lighting systems that meet regulatory requirements and building codes.",
      passage2:
        "Using advanced lighting design software and calculations, we develop emergency lighting layouts that provide adequate illumination levels and coverage for escape routes, stairwells, and critical areas. Our designs prioritize visual clarity, uniformity, and reliability to facilitate safe evacuation.",
      passage3:
        "Our experienced lighting designers collaborate closely with clients to understand their emergency lighting requirements and preferences, integrating emergency luminaires, exit signs, and battery backup systems into the lighting scheme. We ensure that emergency lighting systems are seamlessly integrated with the overall lighting design.",
      image: "/img/services/emelightning.jpg",
    },
    {
      title: "Earthing & Grounding System",
      passage1:
        "Our Earthing & Grounding System service provides comprehensive solutions for ensuring electrical safety and equipment protection through effective earthing and grounding systems. We specialize in designing, installing, and testing earthing and grounding systems for various applications and environments.",
      passage2:
        "Using advanced soil resistivity testing and analysis techniques, we assess soil conditions and determine the most suitable grounding methods and configurations. Our designs prioritize low-resistance paths to earth, ensuring efficient dissipation of fault currents and minimizing the risk of electrical hazards.",
      passage3:
        "Our experienced engineers and electricians execute earthing and grounding system installations with precision and attention to detail, adhering to industry standards and best practices. We utilize high-quality materials and equipment to ensure the reliability and effectiveness of the grounding infrastructure.",
      image: "/img/services/earthing.jpg",
    },
    {
      title: "Lightning Protection System",
      passage1:
        "Our Lightning Protection System service offers effective solutions for safeguarding structures and occupants against the destructive effects of lightning strikes. We specialize in designing, installing, and testing lightning protection systems that meet industry standards and regulatory requirements.",
      passage2:
        "Using advanced risk assessment techniques and lightning protection calculations, we evaluate the lightning risk to structures and determine the most suitable protection measures. Our designs include air terminals, down conductors, and grounding systems to safely dissipate lightning currents into the ground.",
      passage3:
        "Our experienced engineers and technicians execute lightning protection system installations with precision and attention to detail, ensuring that all components are installed correctly and connected to low-resistance grounding systems. We conduct thorough testing and inspection to verify system performance and compliance.",
      image: "/img/services/lightningprotection.jpg",
    },
  ];
  const commondata = 
  {
    image: "/img/services/electricservices.jpg",
    description:
    "Our professional electrical services encompass everything from regular wiring installations and maintenance to emergency electrical repairs and system upgrades. We ensure your electrical systems meet rigorous standards of safety and efficiency. Whether it's a residential upgrade or a large commercial project, our certified electricians are equipped to manage all your electrical needs with precision and care.",
    title: "Electric Services",
  };

  return <BaseComponent contentData={contentData} commondata={commondata} />;
}
