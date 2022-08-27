import Navbar from "../components/Navbar";
import Image from "next/image";
import { useState } from "react";
import Table from "../components/Table";
import TradeNow from "../components/TradeNow";
import Converter from "../components/Converter";
import Card from "../components/Card";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { FaTabletAlt } from "react-icons/fa";
import { HiShieldCheck, HiUsers } from "react-icons/hi";
import HowItWorks from "../components/HowItWorks";
export default function Home(posts) {
  return (
    <div className="full-width">
      <div className="main-bg flex flex-col justify-center">
        <div className=" md:text-4xl text-3xl font-bold text-center text-white px-4 pt-28 md:pt-32">
          Trade<span className="text-black pl-4">Digital Currencies </span>
          <br />
          for your local Currency.
        </div>
        <div className="flex items-center justify-center pb-4 md:pb-8">
          <TradeNow />
          <button className="m-4 font-bold hover:text-gray-200">
            <a href="/About">Learn More</a>
          </button>
        </div>
        <div className="">
          {/* <Converter data={posts} />
          <Table data={posts} /> */}
        </div>
        <div className="flex justify-center"></div>

        {/* <div className="text-2xl text-black">
          Trusted by thousands of customers and business all over the world
        </div> */}
      </div>

      <div />
      <div className="mobile-res bg-green-500 w-full  p-4 flex flex-row justify-center font-sans">
        <div className="  md:grid grid-cols-2 gap-8  md:w-4/6 py-20">
          <div className="md:col-span-2 font-bold md:text-xl text-center">
            Why Ikhloexchger?
          </div>
          <div>
            <Card
              myicon={<HiShieldCheck className="text-yellow-400 text-3xl" />}
              title="Safe and Secure"
              text="Your data is safe and secured with us. None of your data is shared with a third party company"
            />
          </div>
          <div>
            <Card
              myicon={<FaTabletAlt className="text-yellow-400 text-3xl" />}
              title="Easy to Use"
              text="The platform is designed to be as simple as possible so our users can trade with ease."
            />
          </div>
          <div>
            <Card
              myicon={<HiUsers className="text-yellow-400 text-3xl" />}
              title="Customer friendly rates"
              text="You receive the best market rates whenever you buy or sell your coins to lkhloexchger."
            />
          </div>
          <div>
            <Card
              myicon={
                <BsFillChatLeftTextFill className="text-yellow-400 text-3xl" />
              }
              title="24/7 Customer service"
              text="Our customer service representatives are always available every minute
        of the day to make sure you are attended to"
            />
          </div>
        </div>
      </div>
      {/* //----------//////////------------------Message------- */}
      <div class="mobile-res bg-green-500 w-full  p-4 flex justify-center font-sans">
        <div className=" bg-gray-800 rounded-xl bg-grey-light md:w-4/6 w-5/6 p-2">
          <div className="flex  justify-center text-white font-bold py-1">
            <h3 className="text-xl pt-12 ">Digital Funds</h3>
          </div>
          <div className="text-sm  mt-2">
            <div className="text-white text-center p-2  mt-1  cursor-pointer hover:bg-grey-lighter">
              Fast, reliable and smart trades should dig deep into your problems
              and not your pockets or busy schedule.
            </div>
          </div>
          <div className="text-sm mt-2 flex items-center justify-center pb-4 md:pb-8">
            <button
              className=" bg-transparent hover:bg-white bg-green-500 text-white font-semibold m-4
            hover:text-green-500 py-2 px-4 border
              border-green-500 hover:border-white
              hover:shadow-xl rounded"
              onClick={() => {
                handlePrice(price);
              }}
            >
              <a href="https://wa.me/2349072709373?text=Helloo%20world">
                Trade Now
              </a>
            </button>
            <button className="m-4 font-bold text-white hover:text-gray-300">
              <a href="/Services">See Our Rates</a>
            </button>
          </div>
        </div>
      </div>
      <div className="mobile-res bg-white ">
        <div className="font-bold text-4xl pt-24  how-it-works text-center">
          How it works
        </div>
        <div className="mobile-res bg-white  sm:flex justify-center gap-8 pb-8 ">
          <HowItWorks />
        </div>
      </div>
    </div>
  );
}
//
export async function getStaticProps() {
  let API_KEY = process.env.API_KEY;
  const res = await fetch(API_KEY);

  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
