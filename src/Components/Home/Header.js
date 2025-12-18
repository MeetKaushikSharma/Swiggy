// first div : swiggy logo + buttons

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#FF5200] font-[Montserrat]">
      <div className="flex justify-between container mx-auto py-8">
        <img
          className="w-40 h-12"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
        ></img>
        <div className="text-white text-base font-bold flex gap-10 items-center">
          <a target="blank" href="https://www.swiggy.com/corporate/">
            Swiggy Corporate
          </a>
          <a target="blank" href="https://partner.swiggy.com/login#/swiggy">
            Partner with us
          </a>
          <a
            className="border-2 border-white py-3 px-4 rounded-2xl"
            target="blank"
            href="https://www.swiggy.com/corporate/"
          >
            Get the App ⇗
          </a>
          <a
            className=" bg-black py-4 px-7 rounded-2xl"
            target="blank"
            href="https://www.swiggy.com/corporate/"
          >
            Sign in
          </a>
        </div>
      </div>

      <div className="pt-16 pb-8 relative">
        <img
          className="h-110 w-60 absolute top-0 left-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
        ></img>
        <img
          className="h-110 w-60 absolute top-0 right-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
        ></img>
        <div className="container mx-auto text-center max-w-[60%] text-5xl text-white font-bold">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>
        <div className=" relative max-w-[70%] container mx-auto flex gap-5 mt-10 ">
          <svg
            className="absolute left-4 bottom-1/8 -translate-y-1/2 w-6 h-6 text-orange-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <input
            className="bg-white w-[40%] text-lg px-15 py-4 rounded-2xl tracking-tighter font-semibold text-gray-600"
            placeholder="Enter your delivery location"
          ></input>
          <div className="absolute left-90 top-1/2 -translate-y-1/2">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <input
            className="bg-white w-[55%] text-xl font-semibold px-10 py-4 rounded-2xl tracking-tighter"
            placeholder="Search for restaurants, items for more"
          ></input>
          <svg
            className="w-6 h-6 absolute right-16 bottom-1/3 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="max-w-[80%] container mx-auto flex">
        <Link to="/restaurant">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
        </Link>
        <a href="https://www.swiggy.com/instamart">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
        </a>
        <a href="https://www.swiggy.com/dineout">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
        </a>
      </div>
    </header>
  );
}
