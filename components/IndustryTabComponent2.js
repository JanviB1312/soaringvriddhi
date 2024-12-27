"use client";
import Image from "next/image";
import IndustrySection1 from "./IndustrySection1";
import IndustrySection2 from "./IndustrySection2";
import IndustrySection3 from "./IndustrySection3";
import IndustrySection4 from "./IndustrySection4";
import { useState, useEffect } from "react";

function IndustryTabComponent2({ data }) {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleScroll = () => {
    const sections = ["tab1", "tab2", "tab3", "tab4"];
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.top <= window.innerHeight / 2;
    });
    if (currentSection) setActiveTab(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="flex bg-logo-blue justify-center space-x-4 p-4 sticky top-0 z-50">
        <button
          className={`px-6 py-2 font-semibold rounded-md ${
            activeTab === "tab1"
              ? "bg-white text-logo-blue"
              : " bg-logo-blue text-white"
          }`}
          onClick={() => scrollToSection("tab1")}
        >
          Overview
        </button>
        <button
          className={`px-6 py-2 font-semibold rounded-md ${
            activeTab === "tab2"
              ? "bg-white text-logo-blue"
              : " bg-logo-blue text-white"
          }`}
          onClick={() => scrollToSection("tab2")}
        >
          Higher Education Entrance
        </button>
        <button
          className={`px-6 py-2 font-semibold rounded-md ${
            activeTab === "tab3"
              ? "bg-white text-logo-blue"
              : " bg-logo-blue text-white"
          }`}
          onClick={() => scrollToSection("tab3")}
        >
          Educational framework
        </button>
        <button
          className={`px-6 py-2 font-semibold rounded-md ${
            activeTab === "tab4"
              ? "bg-white text-logo-blue"
              : " bg-logo-blue text-white"
          }`}
          onClick={() => scrollToSection("tab4")}
        >
          Market size
        </button>
      </div>
      <div id="tab1">
        <IndustrySection1 data={data} />
      </div>
      <div id="tab2">
        <IndustrySection2 data={data} />
      </div>
      <div id="tab3">
        <IndustrySection3 data={data} />
      </div>
      <div id="tab4">
        <IndustrySection4 data={data} />
      </div>
    </>
  );
}

export default IndustryTabComponent2;
