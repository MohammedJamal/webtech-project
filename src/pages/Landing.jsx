import React , { useEffect } from "react";
import Banner from "../components/Banner";
import LandingGallery from "../layouts/landing/LandingGallery";
import SuggestGallery from "../layouts/landing/SuggestGallery";
import { HiSparkles, HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { testlaAnimation } from "../utils/animation";

const Landing = () => {

  useEffect(() => {
    testlaAnimation()
  }, [])
  
  return (
    <>
      <Banner />
      <Wrapper>
        <GalleryTopic topic="รถที่คุณอาจถูกใจ" routePath="/a" />
        <LandingGallery />
        <hr className="my-4 border border-lighten-3" />
      </Wrapper>
      <TeslaSection />
      <Wrapper>
        <hr className="my-4 border border-lighten-3" />
        <GalleryTopic topic="รถยนต์นอกหายากพิเศษ" routePath="/b" />
        <SuggestGallery />
      </Wrapper>
      <Wrapper>
        <hr className="my-4 border border-lighten-3" />
        <GalleryTopic topic="รถยนต์อื่นๆ ที่เราแนะนำ" routePath="/c" />
        <SuggestGallery />
      </Wrapper>
      <div className="h-[20em]" />
    </>
  );
};

const Wrapper = ({ children }) => <div className="p-6">{children}</div>;

const GalleryTopic = ({ topic, routePath }) => (
  <Link to={routePath}>
    <div className="flex justify-between text-dark-3 mb-4">
      <div className="flex items-center">
        <h2>{topic}</h2>
        <HiChevronRight className="text-3xl" />
      </div>
      <h4 className="self-end">จำนวน: 12</h4>
    </div>
  </Link>
);

const TeslaSection = () => {
  return (
    <div id="tesla-section" className="relative mb-24">
      <h2 className="px-6 text-dark-3 mb-6 flex items-center space-x-1">
        <span>รถยนต์มาใหม่</span>
        <HiSparkles className="text-amber-500" />
      </h2>
      <div className="mt-[10em] px-6 relative">
        {/* Tesla car image */}
        <img src="/tesla.png" alt="tesla" id="tesla" className="mx-auto mb-12 relative z-10" />
        <img
          src="/tesla-bg-1.png"
          alt="testla-bg-1"
          className="hidden md:block absolute -top-1/2 left-1/3 -translate-x-20 xl:-translate-x-40"
        />
        <img
          src="/tesla-bg-2.png"
          alt="testla-bg-2"
          className="hidden xl:block absolute -top-1/4 right-1/2 translate-x-[35em]"
        />
      </div>
      <div className="flex justify-center items-center space-x-1 mt-4 px-6">
        <div className="line" />
        <h1 className="text-center text-bluegrey-dark-4 font-semibold tracking-normal md:tracking-[10px]">
          TESLA ROADSTER
        </h1>
        <div className="line" />
      </div>
      <p className="text-center text-dark-2">
        The quickest car in the world, with record-setting acceleration
      </p>
      <div className="my-4 py-12 lg:px-24 tesla-bg">
        <div className="px-10 lg:p-0 flex flex-col lg:flex-row divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray-300 max-w-[50em] mx-auto">
          <p className="w-full text-justify pb-4 lg:pb-0 lg:pr-4 text-dark-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </p>
          <p className="w-full text-justify pt-4 lg:pt-0 lg:pl-4 text-dark-2">
            a galley of type and scrambled it to make a type specimen book. It
            has survived not only five centuries, อ่านต่อ
          </p>
        </div>
        <ul className="flex-wrap mt-12 relative  bg-gradient-to-r from-lighten-3 to-white flex max-w-[50em] mx-auto">
          {[
            { head: "369 mi", subHead: "Range (EPA est.)" },
            { head: "1.99 s", subHead: "0-60 mph*" },
            { head: "200 mph", subHead: "Top Speed**" },
            { head: "1,020 hp", subHead: "Peak Power" },
          ].map((item, index) => {
            return (
              <li
                key={index}
                className="w-1/2 lg:flex-1 flex flex-col items-center py-4"
              >
                <h3 className="text-[#C62828]">{item.head}</h3>
                <p className="text-[#C18383]">{item.subHead}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <button className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#D32F2F] text-white px-6 py-2 rounded hover:bg-red-700 duration-100">
        สั่งจองเดี๋ยวนี้
      </button>
    </div>
  );
};

export default Landing;
