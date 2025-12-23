import { Link } from "react-router-dom";

export default function MartHome() {
  return (
    <>
      <div className="flex items-center gap-4 ml-25 py-2 px-2 mt-4 shadow-sm rounded-2xl fixed bg-gray-100">
        <div className="flex items-center gap-2 relative">
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto//InstamartAssets/DWeb%20Changes/Instamart%20log.png"
            alt="Instamart Logo"
            width="132"
          ></img>{" "}
        </div>

        <div className="h-8 border-l border-gray-300" />

        <div className="flex flex-col">
          <p className="text-md font-semibold">16 mins delivery to</p>
          <button className="text-md text-blue-600 font-semibold">
            Select your location ▾
          </button>
        </div>
        <div className="flex gap-15 ml-80 relative">
          <div>
            <input
              placeholder={`Search for "items" ..`}
              className="text-lg border rounded-2xl px-5 py-3 pr-10 bg-gray-200 text-gray-700 font-bolder tracking-tighter"
            ></input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500 absolute left-55 top-3"
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
              My Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
