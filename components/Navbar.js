import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import TradeNow from "../components/TradeNow";
import Brand from "../components/Brand";
import Link from "next/link"

function Navbar() {
  let ShowNavbar = () => {
    let element = document.getElementById("Show");
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
      element.classList.add("block");
      // I have the 'hidden' class
    } else if (element.classList.contains("block")) {
      element.classList.remove("block");
      element.classList.add("hidden");

      // I have the 'showbar' class
    }
  };
  return (
    <nav className=" flex justify-between md:px-28   items-center stickNav ">
      <div>
        <Link href="/">
          <Brand />
        </Link>
      </div>

      <div className=" flex justify-center items-center ">
        <div
          id="Show"
          className=" bg-gray-100 md:bg-transparent flex flex-col justify-center hidden md:block text-gray-900  text-md fixed top-12 pt-4 md:px-10 rounded-md md:right-5 md:static w-full md:auto"
        >
          <span className="px-6 hover:cursor-pointer py-2 font-bold md:hover:text-white hover:text-gray-400">
            <Link href="/About">
              About
            </Link>
          </span>
          <span className="px-6 hover:cursor-pointer py-2 font-bold md:hover:text-white hover:text-gray-400">
            <Link href="/Services">
              Services
            </Link>
          </span>
          <span className="pl-6 pr-2 hover:cursor-pointer py-2 font-bold md:hover:text-white hover:text-gray-400">
            <Link href="/Contact">
              Contact
            </Link>
          </span>
        </div>
        <div className="flex items-center">
          <TradeNow />
          <div className="md:hidden" onClick={ShowNavbar}>
            <FontAwesomeIcon
              className="md:hidden text-white md:text-4xl text-4xl hover:text-green-200  rounded-3xl py-2 px-4 md:pl-8 hover:cursor-pointer  font-bold "
              icon={faBars}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
