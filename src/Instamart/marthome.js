import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

let time = Math.floor(8 + Math.random() * 4);
export default function MartHome() {
  const items = [
    "Shampoo",
    "Grapes",
    "Towel",
    "Cooker",
    "Yogurt",
    "Conditioner",
    "Flowers",
  ];

  const [item, setItem] = useState(items[0]);
  const counter = useSelector((state) => state.cartslice.count);

  useEffect(() => {
    const id = setInterval(() => {
      setItem(items[Math.floor(Math.random() * items.length)]);
    }, 2500);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="flex items-center gap-4 ml-10 py-2 px-2 mt-4 shadow-sm rounded-2xl fixed bg-gray-100 z-10">
        <div className="flex items-center gap-2 relative">
          <Link to="/">
            <img
              src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto//InstamartAssets/DWeb%20Changes/Instamart%20log.png"
              alt="Instamart Logo"
              width="132"
            ></img>{" "}
          </Link>
        </div>

        <div className="h-8 border-l border-gray-300" />

        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              aria-hidden="true"
              stroke="#0050FF"
              fill="none"
            >
              <path
                d="M9.32 4.688v1.73c0 .603 0 .904.187 1.091.188.187.49.186 1.093.185l.566-.002c1.14-.003 1.711-.005 1.887.354.176.358-.175.808-.876 1.707l-3.52 4.516c-.947 1.216-1.421 1.824-1.852 1.676s-.431-.919-.431-2.46v-1.47c0-.602 0-.903-.187-1.09s-.488-.187-1.09-.187h-.36c-1.07 0-1.605 0-1.784-.342s.125-.782.735-1.662l3.306-4.773c.953-1.376 1.43-2.065 1.878-1.925s.448.978.448 2.652"
                fill="#0050FF"
              ></path>
            </svg>

            <p className="text-lg text-blue-600 font-semibold">
              {time} mins delivery to
            </p>
          </div>
          <button className="text-md text-blue-600 font-semibold">
            Select your location ▾
          </button>
        </div>
        <div className="flex gap-15 ml-80 relative">
          <div>
            <div className="relative">
              <input
                className="w-[350px] text-lg border rounded-2xl pl-5 pr-14 py-3 bg-gray-200 text-gray-700"
                placeholder=""
              />

              <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none flex gap-1">
                <span>Search for</span>
                <span>"{item}"</span>
              </div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500 absolute left-75 top-3"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="6" strokeWidth="1.8" />
              <line x1="15.5" y1="15.5" x2="20" y2="20" strokeWidth="1.8" />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-white bg-gray-600 rounded-4xl"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="9" r="3" strokeWidth="1.8" />
              <path
                d="M6 18c0-2.2 2.7-4 6-4s6 1.8 6 4"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <p className="font-semibold text-lg tracking-tighter text-gray-600">
              Sign in
            </p>
          </div>
          <div className="flex relative items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500 absolute left-3 "
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M7 7h10l-1 11H8L7 7Z"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 9a3 3 0 0 1 6 0"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <button className="font-semibold text-lg tracking-tight px-6 py-3 pl-12 bg-gray-300 rounded-2xl">
              {counter == 0 ? "MyCart" : `MyCart (${counter})`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
