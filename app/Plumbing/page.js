"use client";
import React, { useState } from "react";
import BaseComponent from "../../components/BaseComponent";

export default function Page() {
  const contentData = [
    {
      title: "New System Design & Installation",
      passage1:
        "Our New System Design & Installation service provides state-of-the-art solutions tailored to meet the unique requirements of each client. We specialize in creating highly efficient systems that integrate seamlessly into existing architectures, enhancing both functionality and operational efficiency.",
      passage2:
        "Utilizing the latest advancements in technology and engineering, our team designs systems that are not only reliable but also scalable to future needs. This foresight ensures longevity and adaptability, allowing for technological upgrades without extensive modifications.",
      passage3:
        "From the initial concept to final execution, our expert team offers continuous support and insight, ensuring all installations are completed on time and within budget. We handle all aspects of the project management process, including coordination with other construction and engineering teams.",
      passage4:
        "Our commitment to sustainability drives us to implement systems that minimize environmental impact while maximizing energy efficiency. This approach not only helps reduce operating costs but also aligns with global standards for environmental stewardship.",
      image: "/img/services/plumbing.png",
    },
    {
      title: "Hot & Cold Water Capacity Calculations",
      passage1:
        "Our Hot & Cold Water Capacity Calculations service offers a comprehensive assessment to ensure your water systems are optimally sized for efficiency and effectiveness. We take into account current usage patterns, anticipated future needs, and potential for peak demand periods to recommend the best solutions for your infrastructure.",
      passage2:
        "Utilizing advanced simulation software, our engineers calculate the precise water requirements of your facilities, considering factors such as occupant numbers, equipment needs, and environmental conditions. This meticulous approach helps in preventing both underestimation and costly overestimation that can impact operational budgets.",
      passage3:
        "Our calculations also help in identifying potential bottlenecks and inefficiencies in existing systems, providing a roadmap for enhancements that ensure water availability during critical times without wastage.",
      image: "/img/services/hotcoldwater.jpg",
    },
    {
      title: "Sizing & Selections of Pumps, Water Storage",
      passage1:
        "Our Sizing & Selections of Pumps and Water Storage service ensures that clients receive the most efficient and cost-effective water management systems tailored to their specific needs. We utilize the latest in hydraulic modeling to accurately predict and plan for your facility’s water flow requirements, ensuring optimal performance.",
      passage2:
        "Our experts consider all critical factors such as operational demand cycles, water source characteristics, and system integration challenges to select the most suitable pumps and storage solutions. This holistic approach helps in maximizing efficiency while minimizing operational costs.",
      passage3:
        "We also focus on sustainability, recommending systems that reduce energy consumption and water waste. Our team ensures that all installations are future-proof, capable of handling expected increases in demand without the need for significant reconfiguration.",
      image: "/img/services/waterstorage.jpg",
    },
    {
      title: "Piping Size for Water Services",
      passage1:
        "Our Piping Size for Water Services is designed to optimize the hydraulic performance of your systems, ensuring maximum efficiency and minimizing operational costs. By carefully calculating the flow rates and pressure drops, we configure your piping network to operate within optimal parameters.",
      passage2:
        "Through meticulous planning and state-of-the-art simulation tools, we ensure that each section of your piping is sized and constructed to handle expected loads while maintaining resilience and reliability under varying operational conditions.",
      passage3:
        "Our experts take into account all relevant factors including water quality, temperature variations, and potential future expansions when designing your piping systems. This proactive approach helps in avoiding costly retrofits and modifications down the line.",
      image: "/img/services/pipingsize.jpg",
    },
    {
      title: "Water Services Layouts (Plans & Details)",
      passage1:
        "Our Water Services Layouts service provides meticulous planning and intricate detailing for water systems, ensuring optimal operation and strategic placement of each component. From municipal water supply networks to intricate plumbing systems in large-scale developments, our designs cater to specific site requirements and regulatory frameworks.",
      passage2:
        "We utilize advanced CAD software to create precise and clear water service plans, detailing all components from intake to discharge, including valves, junctions, and access points. This allows for efficient installation and future maintenance.",
      passage3:
        "Our designs take into account potential future expansions or modifications, providing scalable solutions that can adapt to changing needs. We work closely with environmental consultants to ensure our layouts meet sustainability goals and reduce water wastage.",
      image: "/img/services/waterservicelayout.jpg",
    },
    {
      title: "Fuel & Gas Piping Design",
      passage1:
        "Our Fuel & Gas Piping Design service provides comprehensive solutions for the safe and efficient transport of gases and fuels within both industrial and residential settings. We specialize in creating systems that cater to the unique requirements of each environment, ensuring maximum safety and efficiency.",
      passage2:
        "Leveraging advanced engineering practices, we meticulously design and implement piping systems that meet the strictest industry safety standards and regulatory requirements. Our designs consider the physical and chemical properties of the transported materials to ensure compatibility and safety.",
      passage3:
        "We offer bespoke solutions for a wide range of gases and fuels, including natural gas, propane, and industrial gases, tailored to the specific needs and safety requirements of each project. Our approach involves detailed risk assessments and scenario planning to mitigate potential issues.",
      image: "/img/services/FuelGasPipingDesign.jpg",
    },
    {
      title: "Plant Room Layout",
      passage1:
        "Our Plant Room Layout service is meticulously tailored to optimize the organization and efficiency of mechanical, electrical, and plumbing systems within facility spaces. By focusing on the strategic placement of equipment, we ensure optimal performance and ease of maintenance.",
      passage2:
        "We deliver precise and functional layouts that not only facilitate straightforward maintenance but also enhance the operational efficiency of the systems. Our designs consider all aspects, from airflow management to accessibility for routine checks.",
      passage3:
        "Our expertise allows us to tailor each layout to the unique demands of the facility, incorporating factors such as energy efficiency, system integration, and noise control to create an environment that is both functional and compliant with the latest standards.",
      image: "/img/services/plant-room.jpg",
    },
    {
      title: "Annual Maintenance Contract",
      passage1:
        "Our Annual Maintenance Contract (AMC) provides comprehensive year-round maintenance and support to ensure your systems operate at peak efficiency without interruptions. This proactive service is designed to extend the lifespan of your equipment and prevent costly breakdowns.",
      passage2:
        "Our expert technicians perform regular and thorough inspections, conduct preventive maintenance, and manage all necessary repairs. This routine care is crucial in identifying potential issues before they become major problems, thus saving time and reducing operational costs.",
      passage3:
        "Tailored specifically to your business needs, our AMC ensures that maintenance schedules are aligned with your operational demands to minimize downtime. We focus on maximizing system availability and reliability through strategic planning and execution.",
      image: "/img/services/annualmaintenance.webp",
    },
  ];
  const commondata = 
    {
      image: "/img/services/plumbingservices.jpg",
      description:
      "Our expert plumbing services cover everything from routine installations and maintenance to urgent leak repairs and system upgrades. We ensure your plumbing meets high standards of reliability and efficiency. Whether it's a residential fix or a commercial project, our certified plumbers are equipped to handle all your needs professionally and promptly.",
      title: "Plumbing Services",
    };

  return (
    <BaseComponent contentData={contentData} commondata={commondata}/>
  );
}
