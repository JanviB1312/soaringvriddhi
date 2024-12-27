"use client";
import React, { useState } from "react";
import BaseComponent from "../../components/BaseComponent";

export default function Page() {
  const contentData = [
    {
      title: "New System Design & Installation for Solar Lighting",

      passage1:
        "Our New System Design & Installation service tailors solar lighting solutions that are both innovative and efficient. We focus on creating systems that maximize sunlight capture and extend operational hours, ensuring optimal light coverage and energy savings.",
      passage2:
        "We incorporate advanced photovoltaic technology, robust fixtures, and intelligent lighting controls to provide reliable and cost-effective illumination. Our designs consider geographic and climatic conditions to optimize system performance throughout the year.",
      passage3:
        "From residential pathways to urban street lamps, our installations prioritize safety, aesthetics, and environmental sustainability. We ensure that each project adheres to the highest standards of quality and efficiency, using durable materials and smart sensors that adjust lighting levels automatically.",

      image: "/img/services/solar.webp",
    },
    {
      title: "Solar Street Lights Installation",

      passage1:
        "Solar Street Lights provide a sustainable solution to urban and rural lighting needs by utilizing clean solar energy. Our street lighting systems are designed for optimum light dispersion, ensuring broad coverage and enhanced night-time visibility.",
      passage2:
        "Each unit is self-contained, with solar panels, batteries, LED lights, and smart sensors that adapt to ambient light conditions. This autonomy ensures consistent performance, even in areas with unreliable electrical grids.",
      passage3:
        "We focus on system longevity and resilience, incorporating weather-resistant materials and tamper-proof designs that are ideal for public spaces. Our solar street lights are easy to install and require minimal maintenance, making them ideal for widespread municipal adoption.",

      image: "/img/services/streetlight.jpg",
    },
    {
      title: "Solar Garden Lights Installation",

      passage1:
        "Our Solar Garden Lights offer a charming and practical solution to garden and pathway illumination. These lights enhance the beauty and functionality of outdoor spaces while being completely powered by solar energy.",
      passage2:
        "Designed for effortless installation, each light is a self-contained unit with a solar panel, battery, and LED light. They are ideal for gardens, parks, and private landscapes, providing ample lighting without the need for electrical wiring.",
      passage3:
        "Our garden lights come in various styles and finishes to complement any outdoor decor, and they automatically illuminate at dusk, providing a hassle-free, cost-effective lighting solution.",

      image: "/img/services/solargarden.jpg",
    },
    {
      title: "Home Solar Lights Installation",

      passage1:
        "Our Home Solar Lights are designed to provide homeowners with a sustainable and cost-effective lighting solution. These systems are perfect for indoor and outdoor lighting, offering a significant reduction in electricity bills.",
      passage2:
        "The installation includes solar panels, energy storage batteries, and high-quality LED lights that provide bright, efficient lighting. The systems are fully automated, with light sensors to switch on at dusk and off at dawn.",
      passage3:
        "Our home solar lights are customizable, allowing homeowners to choose the intensity and color of the lighting to match their aesthetic and functional needs.",

      image: "/img/services/homesolar.webp",
    },
    {
      title: "Solar Lights for Poles Installation",

      passage1:
        "Our Solar Lights for Poles are engineered to offer versatile, high-performance lighting for various applications, from street lamps to parking lots. These solar-powered units ensure continuous lighting without reliance on the main power grid.",
      passage2:
        "Each pole light is equipped with robust solar panels, durable batteries, and efficient LEDs that provide bright, consistent lighting. The design includes features like motion sensors and remote controls for enhanced functionality and energy conservation.",
      passage3:
        "These pole lights are ideal for municipal, commercial, and industrial settings, providing reliable lighting solutions that are easy to install and maintain.",

      image: "/img/services/solarpoles.webp",
    },
    {
      title: "Battery Solar Lights Installation",

      passage1:
        "Our Battery Solar Lights provide a flexible and mobile lighting solution, ideal for areas without direct electrical access. These lights store solar energy during the day and deliver powerful illumination where and when it's needed.",
      passage2:
        "The systems feature high-capacity batteries that ensure long-lasting operation, even during cloudy days or extended night-time hours. They are perfect for outdoor events, temporary installations, and emergency lighting needs.",
      passage3:
        "With easy setup and portability, our battery solar lights can be quickly deployed to enhance visibility and safety in any environment.",

      image: "/img/services/betterysolar.jpg",
    },
    {
      title: "Annual Maintenance Contract",

      passage1:
        "Our Annual Maintenance Contract ensures that your solar lighting systems are always operating at peak efficiency. We provide regular inspections, cleaning, and repairs to prolong the life of your solar installations.",
      passage2:
        "This service includes preventative maintenance to detect and rectify issues before they lead to system failures, ensuring consistent performance and reliability of your solar lights.",
      passage3:
        "Our skilled technicians are equipped to handle all aspects of solar light maintenance, from panel cleaning to battery checks and LED upgrades.",

      image: "/img/services/contract.jpg",
    },
    {
      title: "Off Grid Residential Systems",

      passage1:
        "Our Off Grid Residential Systems are designed for households looking to become completely energy self-sufficient. These systems are perfect for remote locations without reliable access to the main power grid.",
      passage2:
        "Each system is customized based on the household's energy consumption patterns and geographical conditions, ensuring that all energy needs are met efficiently throughout the year.",
      passage3:
        "We integrate the latest battery storage technologies to ensure power availability during nighttime and cloudy days, enhancing the system's reliability and the homeowner's peace of mind.",

      image: "/img/services/grid.webp",
    },
    {
      title: "SPV Module Street Lighting Solutions",

      passage1:
        "Our SPV Module Street Lighting solutions harness solar power to illuminate streets, highways, and public areas, offering a sustainable alternative to traditional street lighting. These solutions are designed for easy integration into existing infrastructure.",
      passage2:
        "These systems feature high-performance solar panels and energy-efficient LED lights, ensuring reliable illumination from dusk till dawn. Intelligent lighting controls automatically adjust brightness based on ambient light conditions, maximizing energy conservation.",
      passage3:
        "Our street lighting solutions are robust and designed to withstand various environmental conditions, ensuring long-term reliability and minimal maintenance. They are ideal for urban and rural areas, enhancing safety and visibility without the carbon footprint of traditional systems.",

      image: "/img/services/streetlightspv.jpg",
    },
    {
      title: "Solar Pumping Solutions for SPV Modules",

      passage1:
        "Our Solar Pumping Solutions utilize SPV modules to power irrigation and water supply systems, making them ideal for agricultural and remote community applications. These systems are both cost-effective and environmentally friendly.",
      passage2:
        "The solar pumps operate independently of the grid, making them suitable for areas without reliable electricity. They are capable of delivering large volumes of water without fuel costs, using the sun's energy to power the entire operation.",
      passage3:
        "Each system is tailored to meet specific site conditions and water requirements, ensuring efficient water management and resource use. We also incorporate monitoring systems to optimize performance and water usage.",

      image: "/img/services/solarpumping.jpg",
    },
    {
      title: "On Grid Rooftop Residential SPV Systems",

      passage1:
        "Our On Grid Rooftop Residential SPV Systems are designed to integrate seamlessly with existing residential electrical systems, providing homeowners with a reliable source of solar energy that reduces electricity bills and increases energy independence.",
      passage2:
        "These systems connect directly to the public utility power grid, allowing for energy exchange. Homeowners can offset their energy costs by feeding excess power back into the grid through net metering.",
      passage3:
        "Our SPV modules are aesthetically pleasing and engineered to maximize energy capture and conversion efficiency. They are also equipped with real-time monitoring technology, enabling homeowners to track energy production and consumption easily.",

      image: "/img/services/on-grid-rooftop.webp",
    },
    {
      title: "SPV Modules for Defense Requirements",

      passage1:
        "Our SPV Modules for Defense Requirements deliver robust and reliable solar power solutions specifically designed to meet the stringent needs of military and defense operations. These systems provide critical energy support in remote and challenging environments.",
      passage2:
        "Designed for portability and resilience, our SPV systems can be rapidly deployed and are capable of withstanding extreme conditions, ensuring continuous power supply for communications, reconnaissance, and other critical operations.",
      passage3:
        "We customize each system to align with specific defense requirements, including camouflage, secure mounting, and integration with existing military hardware, ensuring seamless operation and strategic advantage.",

      image: "/img/services/defensereq.jpg",
    }, 
    {
      title: "Heat Pump Solutions for Hotels",

      passage1:
        "Our heat pump solutions for hotels are designed to provide cost-effective, reliable, and sustainable heating and cooling. We understand the unique demands of the hospitality sector, including the need for consistent comfort, minimal operational noise, and the ability to scale according to seasonal occupancy variations.",
      passage2:
        "We offer custom-designed systems that integrate seamlessly into the hotel’s infrastructure, providing centralized control and energy management capabilities that reduce operational costs and enhance guest comfort. Our systems are engineered to meet the rigorous usage requirements of hotels, ensuring durability and long-term performance.",
      passage3:
        "Our environmentally friendly heat pump systems help hotels reduce their carbon footprint while maintaining high standards of guest comfort. We utilize technologies that extract heat from ambient air or ground sources, significantly reducing reliance on fossil fuels and decreasing greenhouse gas emissions.",

      image: "/img/services/hotelssolar.jpeg",
    },
    {
      title: "Heat Pump Solutions for Dairy Farms",

      passage1:
        "Our heat pump systems for dairy farms are engineered to provide optimal thermal control essential for milk production and storage. By maintaining precise temperatures, our systems ensure the quality and safety of dairy products throughout the processing stages.",
      passage2:
        "The systems are designed to operate efficiently under the demanding conditions of dairy operations, offering energy savings and reduced operational costs. Our heat pumps utilize renewable energy sources, contributing to sustainable agricultural practices.",
      passage3:
        "Installation includes integration with existing refrigeration and storage facilities, ensuring seamless operation and minimal disruption to farm activities. Our solutions are scalable, accommodating the growth and diversification of dairy operations.",

      image: "/img/services/dairy.jpg",
    },
    {
      title: "Heat Pump Systems for Hospitals",

      passage1:
        "Our heat pump solutions for hospitals are designed to provide reliable and efficient heating and cooling, critical for patient care and comfort. These systems support precise climate control, essential for operating rooms, patient wards, and storage areas.",
      passage2:
        "Energy efficiency is a priority, with our systems reducing hospital operating costs and contributing to sustainability goals. The heat pumps are capable of handling large scale requirements typical of hospital settings, ensuring uninterrupted service.",
      passage3:
        "The design incorporates features that ensure low noise operation and minimal maintenance, important in the sensitive hospital environment. We also ensure that our installations comply with health industry standards for safety and reliability.",

      image: "/img/services/hospitals.webp",
    },
    {
      title: "Industrial Heat Pump Applications",

      passage1:
        "Our industrial heat pumps are designed to meet the rigorous heating and cooling demands of various industries. These systems provide high-capacity, reliable temperature control critical for manufacturing processes and facility management.",
      passage2:
        "The technology behind our heat pumps maximizes energy efficiency, helping industries reduce energy costs and environmental impact. Systems are customized to meet specific industrial requirements, ensuring optimal performance across a wide range of applications.",
      passage3:
        "We provide robust systems that are engineered to withstand harsh industrial environments and offer longevity and reliability. Our solutions also include integration with existing HVAC systems, enhancing overall efficiency.",

      image: "/img/services/industries.webp",
    },
    {
      title: "Heat Pumps for Residential Buildings",

      passage1:
        "Our heat pumps for residential buildings are designed to provide comfortable and efficient heating and cooling solutions. Tailored to the needs of modern homes, these systems offer both warmth in the winter and cooling in the summer while minimizing energy use.",
      passage2:
        "The systems are compact, quiet, and integrate seamlessly with home aesthetics. They are also equipped with smart technology that allows homeowners to control settings remotely, optimizing comfort and energy efficiency.",
      passage3:
        "Our residential heat pumps are easy to install and maintain, providing a cost-effective alternative to traditional HVAC systems. They also contribute to reducing the home's carbon footprint by using renewable energy sources.",

      image: "/img/services/residentialheatpump.jpg",
    },
    {
      title: "Heat Pump Solutions for Swimming Pools",

      passage1:
        "Our heat pumps specifically designed for swimming pools provide energy-efficient water heating solutions that ensure comfortable swimming temperatures year-round. These systems are ideal for both private and public pools, optimizing water temperature regardless of weather conditions.",
      passage2:
        "With high-performance capabilities, our heat pumps maintain consistent temperatures and are significantly more cost-effective than traditional heating methods. The systems are also eco-friendly, reducing reliance on fossil fuels and lowering emissions.",
      passage3:
        "Our designs are scalable and can be adapted for different pool sizes and types, from small backyard pools to large community or resort pools. The installation process is streamlined, causing minimal disruption to pool use.",

      image: "/img/services/swimmingpool.jpg",
    },
  ];
  const commondata = {
    image: "/img/services/solarservices11.webp",
    description:
      "Our solar services encompass comprehensive solutions for the installation, maintenance, and optimization of solar energy systems. We ensure your setup is efficient, reliable, and tailored to meet your specific energy needs. Whether it's residential solar installations or large-scale commercial projects, our certified technicians provide expert guidance and professional execution. Our focus on cutting-edge technology and sustainable practices enables us to enhance your energy independence while contributing to environmental conservation.",
    title: "Solar Services",
  };

  return <BaseComponent contentData={contentData} commondata={commondata} />;
}
