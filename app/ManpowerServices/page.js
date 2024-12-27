"use client";
import React, { useState } from "react";
import BaseComponent from "../../components/BaseComponent";

export default function Page() {
  const contentData = [
    {
      title: "Temporary Staffing",

      passage1:
        "Our Temporary Staffing services provide flexible workforce solutions to meet the dynamic needs of your business, enabling you to adjust your staffing levels according to project demands and seasonal peaks.",
      passage2:
        "We supply qualified and vetted personnel across various industries, ensuring they integrate seamlessly into your operations without the overheads associated with permanent employment.",
      passage3:
        "Our rigorous selection process guarantees that all temporary staff meet your specific requirements, whether for short-term assignments, special projects, or seasonal work.",
      passage4:
        "We handle all administrative aspects of employment, including payroll, taxes, and worker's compensation, allowing you to focus on your core business activities.",

      image: "/img/services/Temporary.jpg",
    },
    {
      title: "Permanent Staffing Services",

      passage1:
        "Our Permanent Staffing services are designed to help you find the right talent to fill long-term roles within your organization, contributing to stability and growth.",
      passage2:
        "We utilize a thorough screening and recruitment process to ensure candidates not only have the required skills but also align with your company culture and values.",
      passage3:
        "Our extensive network and industry expertise enable us to source top candidates for various roles, from entry-level positions to executive appointments.",
      passage4:
        "We provide ongoing support after placement to ensure a smooth integration for both the employee and your organization, maximizing retention and satisfaction.",

      image: "/img/services/permanent.jpg",
    },
    {
      title: "Contract Staffing Services",

      passage1:
        "Our Contract Staffing services offer a strategic approach to manage workforce requirements with flexibility, providing skilled professionals on a contract basis.",
      passage2:
        "This service is ideal for project-based work that requires specialized skills for a specific duration, helping you maintain project timelines and budget constraints.",
      passage3:
        "We ensure all contract staff are highly skilled and meet the specific requirements of the role, providing training and orientation to align with project objectives.",
      passage4:
        "Our contract staffing solutions also include comprehensive HR support, contract management, and performance monitoring to ensure optimal productivity.",

      image: "/img/services/contract.jpg",
    },
    {
      title: "Skilled Labor Supply Services",

      passage1:
        "Our Skilled Labor Supply service provides highly trained and experienced workers to meet the needs of specialized industries requiring specific skill sets.",
      passage2:
        "We work closely with clients to understand their project requirements and supply skilled labor that enhances productivity and operational efficiency.",
      passage3:
        "Our workers are equipped with the necessary certifications and training to ensure they perform at the highest level, adhering to industry standards and safety regulations.",
      passage4:
        "We offer flexible labor solutions that allow businesses to adjust their workforce based on project demands and market conditions, ensuring that skilled labor is available when and where it is needed.",

      image: "/img/services/skilledlabour.webp",
    },
    {
      title: "Project-Based Staffing Solutions",

      passage1:
        "Our Project-Based Staffing services are tailored to support specific projects with precise talent requirements, ensuring the right skills are available to meet project goals effectively.",
      passage2:
        "We provide a rapid response to staffing needs, enabling projects to proceed without delay and with the right manpower to handle specialized tasks.",
      passage3:
        "Our project-based staffing solutions are ideal for industries such as construction, IT, and events, where flexibility and expertise are crucial.",
      passage4:
        "We manage all HR aspects, including recruitment, onboarding, payroll, and compliance, allowing project managers to focus on core project deliverables.",

      image: "/img/services/projectbased.jpg",
    },
    {
      title: "Comprehensive Security Services",

      passage1:
        "Our Security Services provide robust protection for businesses, events, and residential areas, ensuring safety and peace of mind.",
      passage2:
        "We offer a range of security solutions, from manned guarding and mobile patrols to surveillance and alarm response, tailored to the specific security needs of our clients.",
      passage3:
        "Our security personnel are highly trained and experienced, equipped with the latest technology to prevent, detect, and respond to security threats.",
      passage4:
        "We also provide risk assessment and security consulting to help clients develop effective security strategies and practices.",

      image: "/img/services/security.jpg",
    },
    {
      title: "On-Demand Staffing Solutions",

      passage1:
        "Our On-Demand Staffing service provides immediate staffing solutions, helping businesses quickly fill short-term, seasonal, or unexpected staffing gaps.",
      passage2:
        "This flexible service is designed to help companies manage workforce fluctuations efficiently without the burden of long-term employment commitments.",
      passage3:
        "We supply pre-vetted, ready-to-work professionals across various industries, ensuring rapid deployment and operational continuity.",
      passage4:
        "Our on-demand staffing solutions are particularly useful for industries facing sudden increases in workload, such as retail, hospitality, and events.",

      image: "/img/services/ondemand.jpg",
    },
  ];

  const commondata = 
  {
    image: "/img/services/manpower.jpg",
    description:
    "Our manpower services provide skilled and unskilled labor to meet the diverse needs of various industries. We offer reliable staffing solutions that include everything from temporary hires for project-based needs to permanent staff placements. Whether it’s industrial, administrative, or specialized labor, our expert recruitment process ensures that you get the most qualified professionals to enhance your workforce and drive your operations effectively.",
    title: "Man Power Services",
  };
  return <BaseComponent contentData={contentData} commondata={commondata} />;
}
