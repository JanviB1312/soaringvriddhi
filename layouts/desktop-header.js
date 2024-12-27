"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { NavMenuBar } from "./NavMenuBar";
import Logo from "@/public/img/logoas.png";

export default function DesktopHeader() {
  const [isActive, setActive] = useState(false);
  const activeTrueFalse = () => setActive(!isActive);

  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);


  return (
    <>
      <div className="industify_fn_header">
       
        <div className="header_inner flex place-items-center">
          <div className="menu_logo">
            <Link
              className="flex gap-4 place-items-center text-3xl font-bold p-4  text-white"
              href="/"
            >
              {/* <img src="/img/logo-light.png" alt="" /> */}
              <Image 
                src={Logo} width={250} height={250}  />  
             <h3>  </h3>
            </Link>
          </div>
          <NavMenuBar />
          
        </div>
      </div>
      <div className="my-class"></div>
    </>
  );
}
