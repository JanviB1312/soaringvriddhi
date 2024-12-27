"use client";
import React, { useState } from "react";
import BaseComponent from "../../components/BaseComponent";

export default function Page() {

  const contentData = [
    {
      title: "New Building Construction",
      passage1:
        "Our New Building Construction service caters to clients looking to bring their architectural dreams to life. From the initial design to the final touches, our team ensures every aspect of the construction process is executed flawlessly, with a focus on sustainability and compliance with all local building codes.",
      passage2:
        "Utilizing state-of-the-art technology and innovative construction methods, we guarantee structures that are not only aesthetically pleasing but also robust and durable. Our commitment to quality materials and craftsmanship means that every project is built to last.",
      passage3:
        "We specialize in both residential and commercial buildings, providing customized solutions that meet our clients' needs while adhering to budget and time constraints. Our project management is top-notch, ensuring smooth execution and timely completion of all projects.",
      image: "/img/services/newbuilding.jpg",
    },
    {
      title: "Masonry & Painting",
      passage1:
        "Our Masonry & Painting services provide a complete solution for both new constructions and renovations. We offer expert craftsmanship in bricklaying, stonework, and plastering, ensuring structures are not only strong but also beautifully finished. Our team handles every aspect of masonry with precision, from the initial layout to the final joint, ensuring lasting durability and visual appeal.",
      passage2:
        "We use high-quality, durable paints and finishes that stand the test of time, resisting weather and wear to maintain their aesthetic appeal. Our skilled painters are adept at various techniques, from basic coating to intricate decorative work. We ensure that each painting job is performed with meticulous care to enhance the overall beauty and longevity of the structure.",
      passage3:
        "We prioritize the use of environmentally friendly and non-toxic paints and materials, ensuring safety for both our clients and the environment. Our commitment to sustainability is reflected in our choices of supplies and our methods, which are designed to minimize environmental impact while providing superior results.",
      image: "/img/services/masonry.jpg",
    },
    {
      title: "Repair & Renovation",
      passage1:
        "Our Repair & Renovation services breathe new life into existing structures, ensuring they are safe, functional, and up-to-date. We tackle everything from minor repairs to major overhauls, focusing on enhancing both the utility and value of the property. Our experienced team is skilled at identifying and resolving underlying issues that affect building integrity and aesthetics.",
      passage2:
        "We assess and rectify issues such as structural integrity, insulation, plumbing, and electrical systems, using only the best materials and techniques. Our approach involves a detailed inspection process that identifies all areas needing attention, ensuring that no detail is overlooked.",
      passage3:
        "Our renovation projects are tailored to meet the specific needs and preferences of our clients, ensuring complete satisfaction with the transformed spaces. We work closely with our clients to understand their vision and requirements, turning outdated spaces into modern, functional environments.",
      image: "/img/services/repair.jpg",
    },
    {
      title: "Architectural Works",
      passage1:
        "Our Architectural Works encompass a full spectrum of design and planning services for both residential and commercial projects. We create spaces that combine form, function, and aesthetics to meet the specific needs and preferences of our clients. Our approach is deeply rooted in understanding our client’s vision, ensuring every design reflects their lifestyle or business ethos.",
      passage2:
        "With a focus on sustainable design, our approach integrates innovative architectural techniques with environmentally responsible practices. From initial concept to final implementation, we ensure every project is compliant with all relevant regulations and quality standards. We incorporate energy-efficient technologies and sustainable materials to reduce the environmental impact while enhancing building performance.",
      passage3:
        "Our team of experienced architects and designers uses the latest software and technology to render precise and creative solutions, tailoring each project to reflect the unique character and objectives of the client. This collaborative process ensures that all aspects of the design are thoughtfully considered, resulting in highly functional and visually appealing spaces.",
      image: "/img/services/architectural.jpg",
    },
    {
      title: "Waterproofing and Insulation",
      passage1:
        "Our Waterproofing and Insulation services are designed to protect buildings from the elements and improve energy efficiency. We provide solutions that prevent water penetration and reduce heat loss, enhancing the durability and comfort of structures. Our expert teams assess each building's unique challenges to recommend the most effective waterproofing and insulation strategies.",
      passage2:
        "Utilizing high-quality materials and advanced application techniques, we offer waterproofing for basements, roofs, walls, and other critical areas susceptible to moisture and water damage. We address common issues such as cracks, leaks, and the effects of hydrostatic pressure, ensuring thorough coverage and long-lasting protection.",
      passage3:
        "Our insulation services are tailored to meet the specific climatic challenges faced by the property, using materials that meet the highest standards of thermal resistance. This not only provides comfort but also significantly reduces heating and cooling costs. We focus on areas that are critical for thermal loss, including attics, walls, and floors, employing techniques that ensure seamless integration without disrupting existing structures.",
      image: "/img/services/waterproofing.webp",
    },
    {
      title: "Electric ARC Furnace",
      passage1:
        "Our Electric ARC Furnace maintenance service provides comprehensive support, ensuring operational efficiency and extended lifespan of furnace components. This specialized service focuses on minimizing downtime and maximizing productivity by maintaining the furnace's peak condition through routine and emergent interventions.",
      passage2:
        "We conduct regular check-ups and scheduled maintenance tasks, which include thorough cleaning, precise repairs, necessary replacements, and strategic upgrades. Our team handles a broad spectrum of systems related to the furnace operation, including electrical, plumbing, HVAC, and critical structural elements integral to furnace safety and functionality.",
      passage3:
        "Our proactive maintenance contracts are designed to ensure all furnace-related facilities operate at optimum efficiency, reducing the likelihood of unexpected breakdowns that can lead to costly emergency repairs and production downtime. We customize these contracts to align with our clients' specific operational needs and budgetary constraints, covering all essential maintenance requirements.",
      image: "/img/services/electricarc.jpg",
    },
  ];
  const commondata = 
  {
    image: "/img/services/civilservices.jpg",
    description:
    "Our expert civil services encompass comprehensive solutions ranging from foundational work and construction management to infrastructural development and renovations. We ensure each project is executed with high standards of quality and precision. Whether it involves urban planning, road construction, or large-scale building projects, our team of certified civil engineers and construction specialists is equipped to handle every aspect efficiently and effectively.",
    title: "Civil Services",
  };

  return (
    <BaseComponent contentData={contentData} commondata={commondata}/>
  );
}
