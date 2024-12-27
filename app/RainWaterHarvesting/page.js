"use client";
import React, { useState } from "react";
import BaseComponent from "../../components/BaseComponent";

export default function Page() {
  const contentData = [
    {
      title: "New Design Installation for Rain Water Harvesting",

      passage1:
        "Our New Design Installation service for Rain Water Harvesting systems is tailored to provide sustainable water solutions for residential, commercial, and industrial applications. We specialize in designing systems that capture, divert, and store rainwater for future use, reducing dependency on municipal water supplies and lowering water bills.",
      passage2:
        "We conduct a thorough assessment of your site's hydrological and environmental conditions to determine the most efficient collection and storage solutions. Our designs incorporate modern technologies and materials that ensure long-lasting performance and minimal maintenance.",
      passage3:
        "Our expert team collaborates closely with clients to understand their specific needs, ensuring that each system is optimized for maximum water collection and effective integration with existing structures and landscapes.",

      image: "/img/services/rainwaterharvesting.jpg",
    },
    {
      title: "Rain Water Harvesting for Irrigation & Industries",

      passage1:
        "Our Rain Water Harvesting solutions for Irrigation and Industrial uses are designed to provide a reliable and sustainable water supply for large-scale agricultural and industrial operations. By harnessing the power of rainwater, we help clients significantly reduce their water expenditure and enhance their green credentials.",
      passage2:
        "We create customized systems that are capable of handling the vast water requirements of farms, gardens, and industrial processes. These systems are engineered to capture and store substantial volumes of rainwater, which can be used during dry periods to maintain productivity and reduce strain on local water resources.",
      passage3:
        "Our designs include advanced filtration and water treatment solutions to ensure that the harvested rainwater meets the quality standards required for agricultural and industrial applications.",

      image: "/img/services/irrigation.webp",
    },
    {
      title: "Domestic Rain Water Harvesting Systems",

      passage1:
        "Our Domestic Rain Water Harvesting systems are designed to help homeowners capture and utilize rainwater for daily activities such as gardening, washing, and even plumbing. These systems are an excellent way to reduce water bills and contribute to environmental sustainability.",
      passage2:
        "Each system is customized to the layout and size of the home, ensuring optimal placement of gutters, downspouts, and storage tanks to maximize water collection and storage efficiency.",
      passage3:
        "We provide robust systems built with durable materials that require minimal maintenance. Our solutions include simple filtration systems that make rainwater safe for non-potable uses, and we offer options for further treatment to broaden usage possibilities.",

      image: "/img/services/domestic.avif",
    },
  ];
  const commondata = {
    image: "/img/services/rainwaterharvestingservices.jpeg",
    description:
      "Our rainwater harvesting services provide tailored solutions for capturing, storing, and reusing rainwater in both residential and commercial settings. We ensure that your systems are designed for maximum efficiency and sustainability. From system design and installation to maintenance and upgrades, our skilled professionals equip your property with the necessary tools to reduce water usage and enhance ecological benefits. Whether it’s augmenting water supply or managing stormwater, our services help you harness rainwater effectively and responsibly.",
    title: "Rain Water Harvesting Services",
  };
  return (
    <BaseComponent contentData={contentData} commondata={commondata} />
  );
}
