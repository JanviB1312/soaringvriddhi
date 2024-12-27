"use client";
// import 'mmenujs/style';
import Link from "next/link";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Vk,
} from "../public/svg/social/IconSocial";
import Image from "next/image";
import Logo from "@/public/img/logo-as.png";
import { businessesArray, projectsArray } from "@/lib/data";

export default function MobileHeader() {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu);

  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  const linkStyle = {
    color: 'black !important',
  };

  return (
    <>
      <div className="industify_fn_mobilemenu_wrap fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="logo_hamb flex justify-between items-center p-4">
          <div className="in flex items-center">
            <div className="menu_logo flex place-items-center gap-3">
              <Link href="/">               
                <Image src={Logo} width={70} height={70} alt="Logo"/>
              </Link>
            </div>
            <div
              onClick={MobileMenuTrueFalse}
              className={
                !isMobileMenu
                  ? "hamburger hamburger--collapse-r"
                  : "hamburger hamburger--collapse-r is-active"
              }
            >
              <div className="hamburger-box">
                <div className="hamburger-inner bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      
        <div
          className={`${
            !isMobileMenu ? "mobilemenu" : "mobilemenu opened d-block"
          } bg-white w-full`}
        >
          <div>
            <nav>
              <ul className="mmenu">
                <li>
                  <Link href="/#" style={linkStyle}>Home</Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`has-arrow ${isActive.key == 1 ? "mm-active" : ""} `}
                    onClick={() => handleToggle(1)}
                    style={linkStyle}
                  >
                    Our Services
                  </Link>
                  <ul
                    className={`mm-collapse ${isActive.key == 1 ? "mm-show" : ""}`}
                  >
                    {businessesArray.map((business) => (
                      <li key={business.id}>
                        <Link href={business.href} style={linkStyle}>{business.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <Link href="/gallery" style={linkStyle}>Gallery</Link>
                </li>
                <li>
                  <Link href="/contact-2" style={linkStyle}>Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <!-- /MOBILE DROPDOWN MENU --> */}
      </div>
      <div className="pt-16"> {/* Add padding-top to content to prevent it from going behind the fixed header */}
        {/* The rest of your content goes here */}
      </div>
    </>
  );
}
