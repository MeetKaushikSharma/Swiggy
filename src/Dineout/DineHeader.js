import { Link } from "react-router-dom";
export default function DineHeader() {
  return (
    <>
      <div className="flex items-center gap-4 ml-25 py-2 px-2 mt-4 shadow-sm rounded-2xl fixed bg-gray-100 z-10">
        <div className="flex items-center gap-2 relative">
          <Link to="/">
            <img
              className="cursor-pointer"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png"
              alt="Instamart Logo"
              width="132"
            ></img>{" "}
          </Link>
        </div>

        <div className="h-8 border-l border-gray-300" />

        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="#ff5a00"
          >
            <path d="M3 11.5L19.5 3.5c.6-.3 1.3.3 1.1.9L15.5 20c-.2.6-1 .7-1.3.2l-3-4.6-4.7-3c-.6-.4-.5-1.2.1-1.5Z" />
          </svg>
          <button className="text-lg font-bold tracking-tight">
            Setup your precise location
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            stroke="#ff5a00"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        <div className="flex gap-15 ml-80">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="6" strokeWidth="1.8" />
              <line x1="15.5" y1="15.5" x2="20" y2="20" strokeWidth="1.8" />
            </svg>
            <input
              placeholder={`Search for "Dineout"`}
              className="text-lg border rounded-2xl px-40 pl-5 py-3 bg-gray-200 text-gray-700 font-semibold tracking-tighter"
            />
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-12 h-12 text-white bg-gray-600 rounded-4xl"
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
          </div>
        </div>
      </div>
      <div>
        <img
          className="absolute top-30 right-16"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png"
        ></img>

        <p className="text-white text-5xl font-extrabold absolute top-110 left-30">
          Explore Top Dining Out{" "}
          <span className=" flex mt-2">Restaurants in your city</span>
        </p>
      </div>
    </>
  );
}
