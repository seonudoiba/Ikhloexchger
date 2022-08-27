import React from "react";
import Link from "next/link";
import TradeNow from "./TradeNow";
import Brand from "./Brand";
import {FaInstagram, FaTwitter, FaWhatsapp} from "react-icons/fa";

function Footer() {
  return (
    <footer className="mobile-res  text-white border-t-4 border-gray-300 border=t relative bg-green-500 z-0">
      <div className="mobile-res px-6 pt-6">
        <div className="mobile-res md:pl-16 p-4 pb-16 md:grid grid-cols-6 font-sans">
          <div className=" col-span-4  ">
            <div className="font-bold pb-2 text-2xl mb-2">
              True love feels like Ikhloexchger
            </div>

            <p>
              Ikhloexchger is a leading Nigerian Bitcoin exchange where you can
              buy and sell Bitcoin, Litecoin, Bitcoin Cash, Ethereum and Perfect
              Money with Naira at best
            </p>
          </div>
          <div className=" col-span-2 flex md:justify-end  ">
            <TradeNow />
          </div>
        </div>

        <div className="mobile-res grid lg:grid-cols-4 md:grid-cols-2">
          <div className="mb-6">
            <a href="/" className="text-white">
              <Brand />
            </a>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">Services</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="/Services" className="text-white">
                  Buying Crypto Assets
                </a>
              </li>
              <li>
                <a href="/Services" className="text-white">
                  Selling Crypto Assets
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">Company</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="/About" className="text-white">
                About Us
                </a>
              </li>
              <li>
                <a href="/Policy" className="text-white">
                Privacy Policy
                </a>
              </li>
              <li>
                <a href="/Terms" className="text-white">
                Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/Contact" className="text-white">
                Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5 ">Socials</h5>

            <ul className="list-none md:w-1/2 w-2/6 mb-0 flex justify-between items-center">
              <li>
                <a href="/" className="text-white">
                  <FaInstagram className="text-3xl"/>
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  <FaTwitter className="text-3xl"/>
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  <FaWhatsapp className="text-3xl"/>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className="mobile-res text-black pb-12 text-center p-4">
       
        © 2022 Copyright:   <span> <a className="" href="/">
             Ikhloexchger
        </a></span> 
      </div>
    </footer>
  );
}

export default Footer;
