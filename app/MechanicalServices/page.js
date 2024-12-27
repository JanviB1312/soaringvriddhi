"use client";
import React, { useState } from "react";
import BaseComponent from "../../components/BaseComponent";

export default function Page() {
  const contentData = [
    {
      title: "New Fire System Design & Installation",

      passage1:
        "Our New Fire System Design & Installation service offers cutting-edge solutions tailored to meet the specific fire safety needs of your facility. We leverage our expertise and industry-leading technologies to design and implement robust fire protection systems that ensure the safety of occupants and assets.",
      passage2:
        "We begin with a comprehensive assessment of your facility, analyzing factors such as building layout, occupancy type, fire risks, and regulatory requirements. Based on this analysis, we develop customized fire protection strategies that integrate detection, suppression, and evacuation measures.",
      passage3:
        "Our team of experienced engineers and technicians then work meticulously to install the designed fire safety systems, adhering to industry standards and best practices. We employ state-of-the-art equipment and materials to ensure the reliability and effectiveness of our installations.",

      image: "/img/services/firefighting.webp",
    },
    {
      title: "Smoke Detection, Sprinkler & Gas System Installation",

      passage1:
        "Our Smoke Detection, Sprinkler & Gas System installations provide comprehensive fire protection solutions for various environments, ensuring early detection and rapid response to potential hazards. We integrate cutting-edge technologies to create robust systems that safeguard lives and property.",
      passage2:
        "With advanced smoke detection systems, we enable early warning capabilities, triggering immediate alerts and activating sprinkler systems to suppress fires before they escalate. Our gas detection systems ensure the detection of hazardous gases, preventing potential explosions or health risks.",
      passage3:
        "We design our sprinkler systems to deliver targeted water distribution, effectively extinguishing fires while minimizing water damage to surrounding areas. Our gas suppression systems utilize inert gases or chemical agents to extinguish fires without leaving residue or causing harm to sensitive equipment.",

      image: "/img/services/smokedetection.jpg",
    },
    {
      title: "Fire Protection System Design & Installation",

      passage1:
        "Our Fire Protection System installations are tailored to address the unique fire risks and safety requirements of diverse environments, from commercial buildings to industrial facilities. We specialize in designing and installing fire suppression systems that prioritize safety, reliability, and compliance.",
      passage2:
        "We utilize a combination of active and passive fire protection measures, including fire alarms, fire extinguishers, fire doors, and fire-resistant materials, to create comprehensive fire safety solutions. Our systems are engineered to detect and suppress fires swiftly, minimizing damage and downtime.",
      passage3:
        "We conduct thorough risk assessments and site surveys to identify potential fire hazards and develop customized fire protection strategies. Our team works closely with clients to ensure that our installations meet regulatory standards and integrate seamlessly with existing infrastructure.",

      image: "/img/services/fireprotection.jpg",
    },
    {
      title: "Annual Fire Safety Maintenance Contracts",

      passage1:
        "Our Annual Maintenance Contracts for fire safety systems ensure the ongoing reliability and compliance of your fire protection infrastructure. With regular inspections, testing, and maintenance, we help prevent equipment failures and ensure swift response in case of emergencies.",
      passage2:
        "Our certified technicians conduct thorough inspections of fire detection and suppression systems, identifying potential issues and performing necessary repairs or upgrades. We adhere to industry standards and manufacturer recommendations to maintain system integrity and performance.",
      passage3:
        "Through proactive maintenance, we extend the lifespan of your fire safety equipment and minimize the risk of costly downtime or regulatory fines. Our annual contracts provide peace of mind, knowing that your fire protection systems are in optimal condition and ready to respond to any emergency.",

      image: "/img/services/annualmaintenancesmoke.webp",
    },
    {
      title: "HVAC New System Design & Installation",

      passage1:
        "Our HVAC New System Design & Installation service provides customized heating, ventilation, and air conditioning solutions tailored to meet the unique comfort and efficiency needs of your space. We specialize in designing and installing HVAC systems that optimize indoor air quality, energy efficiency, and occupant comfort.",
      passage2:
        "Beginning with a detailed assessment of your building layout, occupancy requirements, and environmental factors, we develop comprehensive HVAC designs that maximize heating and cooling performance while minimizing energy consumption. Our designs integrate state-of-the-art equipment and advanced control systems to achieve optimal comfort and efficiency.",
      passage3:
        "Our team of skilled technicians and engineers then execute the installation process with precision and attention to detail. We ensure that all components are installed according to manufacturer specifications and industry standards, and we conduct thorough testing and commissioning to verify system performance.",

      image: "/img/services/hvacnewinstall.jpg",
    },
    {
      title: "HVAC Equipment Selection",

      passage1:
        "Our HVAC Equipment Selection service assists clients in choosing the most suitable heating, ventilation, and air conditioning equipment for their specific needs and requirements. We leverage our expertise and industry knowledge to recommend high-quality, energy-efficient equipment that ensures optimal comfort and performance.",
      passage2:
        "We begin by conducting a thorough assessment of your space, considering factors such as size, layout, usage patterns, and environmental conditions. Based on this assessment, we provide detailed equipment recommendations, taking into account efficiency ratings, capacity requirements, and budget constraints.",
      passage3:
        "Our recommendations prioritize equipment that offers a balance of performance, reliability, and energy efficiency, helping clients achieve their comfort goals while minimizing operating costs and environmental impact. We also provide guidance on maintenance requirements and warranty considerations to ensure long-term satisfaction and peace of mind.",

      image: "/img/services/equipment.webp",
    },
    {
      title: "AC Installation, Repair & Services",

      passage1:
        "Our AC Installation, Repair & Services cover all aspects of air conditioning systems, from initial installation to ongoing maintenance and repairs. We specialize in providing reliable, efficient cooling solutions for residential, commercial, and industrial applications.",
      passage2:
        "Our installation services begin with a thorough assessment of your cooling needs and space requirements. We then recommend the most suitable air conditioning units and install them with precision and care to ensure optimal performance and energy efficiency.",
      passage3:
        "In addition to installation, we offer comprehensive repair and maintenance services to keep your air conditioning systems operating smoothly. Our skilled technicians are trained to diagnose and address a wide range of issues, restoring comfort and efficiency to your space.",

      image: "/img/services/acrepair.webp",
    },
    {
      title: "Heat Load Calculations",

      passage1:
        "Our Heat Load Calculations service helps clients accurately assess the heating and cooling requirements of their spaces, ensuring the selection of appropriately sized HVAC equipment and optimal energy efficiency. We utilize advanced software and industry-standard methodologies to perform detailed heat load calculations.",
      passage2:
        "By considering factors such as building size, orientation, insulation, occupancy, and equipment heat gain, we determine the precise thermal loads that HVAC systems must accommodate. This information enables us to recommend equipment that effectively meets heating and cooling demands without unnecessary energy consumption.",
      passage3:
        "Our heat load calculations are essential for designing HVAC systems that deliver consistent comfort while minimizing operating costs and environmental impact. Whether for new construction or retrofit projects, accurate load calculations are crucial for achieving optimal system performance and occupant comfort.",

      image: "/img/services/heatload.jpg",
    },
    {
      title: "Heating & Cooling Systems",

      passage1:
        "Our Heating & Cooling Systems service provides comprehensive solutions for maintaining comfortable indoor temperatures year-round. We specialize in designing, installing, and servicing heating and cooling systems that maximize comfort, energy efficiency, and reliability.",
      passage2:
        "Whether you need a new heating system for winter warmth or a cooling solution for hot summer days, we have you covered. Our team works closely with clients to assess their needs and recommend the most suitable heating and cooling systems for their spaces and budget.",
      passage3:
        "From traditional furnaces and boilers to modern heat pumps and ductless mini-split systems, we offer a wide range of options to meet diverse heating and cooling requirements. Our installations are performed with precision and attention to detail to ensure optimal performance and longevity.",

      image: "/img/services/heating.webp",
    },
    {
      title: "Underfloor Heating Systems",

      passage1:
        "Our Underfloor Heating Systems offer efficient and comfortable heating solutions for residential and commercial spaces. By utilizing radiant heat transfer, these systems evenly distribute warmth throughout the floor, providing cozy comfort without the need for bulky radiators or ductwork.",
      passage2:
        "We design underfloor heating systems tailored to the specific requirements of each space, considering factors such as floor construction, insulation, and heat loss. Whether for new construction or retrofit projects, our systems offer energy-efficient heating that enhances comfort and reduces energy costs.",
      passage3:
        "Our skilled technicians install underfloor heating systems with precision and attention to detail, ensuring optimal performance and reliability. We use high-quality materials and advanced control systems to deliver efficient and consistent heating while minimizing environmental impact.",

      image: "/img/services/underfloor.jpeg",
    },
    {
      title: "Tunnel Ventilation Systems",

      passage1:
        "Our Tunnel Ventilation Systems provide safe and efficient air circulation in tunnels, ensuring optimal air quality and temperature control for both vehicular and pedestrian traffic. We specialize in designing and installing tunnel ventilation systems that meet stringent safety standards and regulatory requirements.",
      passage2:
        "Using computational fluid dynamics (CFD) modeling and advanced airflow simulation techniques, we optimize ventilation system designs to maximize air exchange rates and minimize the risk of pollutants, such as carbon monoxide, accumulating in the tunnel environment.",
      passage3:
        "Our experienced engineers and technicians execute tunnel ventilation system installations with precision and attention to detail, ensuring reliable operation and compliance with safety regulations. We utilize high-performance fans, ductwork, and control systems to deliver efficient and effective air circulation throughout the tunnel.",

      image: "/img/services/tunnel.jpg",
    },
    {
      title: "Basement Ventilation & CFD Analysis",

      passage1:
        "Our Basement Ventilation & CFD Analysis service offers comprehensive solutions for optimizing air quality and circulation in underground spaces. Using computational fluid dynamics (CFD) analysis, we evaluate airflow patterns and identify potential ventilation challenges in basements and below-grade areas.",
      passage2:
        "Based on CFD analysis findings, we develop customized ventilation strategies to ensure adequate air exchange rates and prevent the buildup of moisture, odors, and pollutants. Our solutions are designed to enhance indoor air quality, mitigate humidity issues, and promote a healthy and comfortable environment.",
      passage3:
        "Our experienced team implements basement ventilation systems with precision, incorporating high-efficiency fans, ductwork, and control systems to achieve optimal air distribution and circulation. We also provide ongoing monitoring and adjustment to ensure continued effectiveness and compliance with regulatory standards.",

      image: "/img/services/cfd.webp",
    },
    {
      title: "Plant Room Layout Design",

      passage1:
        "Our Plant Room Layout Design service offers efficient and functional designs for mechanical and electrical plant rooms, ensuring optimal utilization of space and equipment. We specialize in creating layouts that facilitate easy access, maintenance, and operation of HVAC, plumbing, and electrical systems.",
      passage2:
        "With a focus on space optimization and workflow efficiency, we design plant room layouts that accommodate all necessary equipment and infrastructure while maximizing available space. Our designs consider factors such as equipment sizing, ventilation requirements, and safety regulations.",
      passage3:
        "Our experienced engineers and designers collaborate closely with clients to develop plant room layouts that meet their specific needs and preferences. We utilize advanced software tools and industry best practices to create detailed designs that optimize functionality, reliability, and safety.",

      image: "/img/services/plantroom.webp",
    },
    {
      title: "Duct Layout Design & Installation",

      passage1:
        "Our Duct Layout Design & Installation service provides efficient and effective ductwork solutions for HVAC systems, ensuring optimal airflow distribution and energy efficiency. We specialize in designing and installing duct layouts that minimize pressure drop, reduce energy consumption, and maximize comfort.",
      passage2:
        "Beginning with a thorough assessment of your space and HVAC requirements, we develop customized duct layouts that optimize airflow distribution while minimizing ductwork size and material usage. Our designs consider factors such as air velocity, pressure losses, and noise levels to achieve optimal performance.",
      passage3:
        "Our skilled technicians then execute ductwork installations with precision and attention to detail, ensuring proper sizing, sealing, and insulation for maximum efficiency and reliability. We utilize high-quality materials and advanced fabrication techniques to deliver duct systems that exceed industry standards.",

      image: "/img/services/ductlayout.jpg",
    },
    {
      title: "Panel Room & STP Room Ventilation",

      passage1:
        "Our Panel Room & STP Room Ventilation service offers specialized solutions for ensuring safe and efficient ventilation in electrical panel rooms and sewage treatment plant (STP) rooms. We design and install ventilation systems that prevent the buildup of heat, moisture, and noxious gases, protecting equipment and personnel.",
      passage2:
        "For electrical panel rooms, our ventilation systems help dissipate heat generated by electrical equipment, preventing overheating and extending the lifespan of components. We design airflow patterns to ensure uniform cooling and minimize hot spots, enhancing equipment reliability and safety.",
      passage3:
        "In STP rooms, our ventilation systems exhaust odors and noxious gases produced during the treatment process, maintaining a safe and odor-free environment for operators and nearby residents. We incorporate filtration and odor control technologies to mitigate environmental impacts and ensure compliance with regulatory standards.",

      image: "/img/services/panelroom.webp",
    },
    {
      title: "Annual Maintenance Contract",

      passage1:
        "Our Annual Maintenance Contract offers comprehensive maintenance services for HVAC systems, ensuring their continued performance, reliability, and energy efficiency. With regular inspections, cleaning, and tune-ups, we help prevent equipment failures and costly downtime while extending the lifespan of HVAC components.",
      passage2:
        "Our certified technicians conduct thorough inspections of HVAC systems, identifying potential issues and performing necessary repairs or adjustments to optimize performance. We also clean and lubricate components, replace worn parts, and calibrate controls to ensure peak efficiency and comfort.",
      passage3:
        "Through proactive maintenance, we address minor issues before they escalate into major problems, reducing the risk of expensive repairs and emergency breakdowns. Our annual maintenance contracts provide peace of mind, knowing that your HVAC systems are in capable hands.",

      image: "/img/services/annual3.jpg",
    },
  ];
  const commondata = {
    image: "/img/services/mechanicalservices.jpg",
    description:
      "Our mechanical services offer comprehensive solutions ranging from HVAC installation and maintenance to complex machinery repairs and operational upgrades. We ensure that your mechanical systems operate with peak efficiency and reliability. Whether it’s industrial equipment or commercial HVAC systems, our team of certified mechanical engineers and technicians are equipped to handle all aspects of your mechanical needs, ensuring smooth operation and longevity of your equipment.",
    title: "Mechanical Services",
  };
  return <BaseComponent contentData={contentData} commondata={commondata} />;
}
