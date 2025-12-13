import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function RestHeader() {
  const counter = useSelector((state) => state.cartslice.count);

  return (
    <>
      <div className="container w-[80%] mx-auto py-4 px-8 text-5xl flex justify-between items-center rounded-2xl">
        <div className="flex items-center">
          <Link to="/">
            <svg
              className="w-15 h-15 mr-10 hover:scale-105"
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 24 24"
              fill="#ea580c"
            >
              <path
                fill="#ea580c"
                d="M12.878 5.928a.297.297 0 0 1 .314.335l.003.276c.001.593-.002 1.185.002 1.777c.004.434.08.517.5.57a14.832 14.832 0 0 0 3.148-.046a4.948 4.948 0 0 0 1.573-.374a.507.507 0 0 0 .344-.603a6.831 6.831 0 0 0-5.343-5.71a6.608 6.608 0 0 0-3.648.242a6.718 6.718 0 0 0-2.694 1.752A6.272 6.272 0 0 0 5.23 8.432a11.188 11.188 0 0 0 1.526 5.517a1.342 1.342 0 0 0 1.33.748c.653-.016 1.307-.004 1.96-.004v-.003h2.084c.25 0 .447.06.445.372c-.005.726 0 1.45-.003 2.176c-.002.22-.064.432-.326.434c-.264.002-.327-.209-.33-.43c-.005-.347 0-.694 0-1.041c0-.451-.073-.557-.523-.64a7.702 7.702 0 0 0-2.348-.02a2.596 2.596 0 0 0-.8.196c-.212.1-.296.245-.193.467c.107.231.206.467.333.688a43.875 43.875 0 0 0 3.426 4.956c.154.199.273.203.431.01c.349-.426.715-.839 1.06-1.268a34.226 34.226 0 0 0 3.577-5.26a14.171 14.171 0 0 0 1.494-3.871a1.203 1.203 0 0 0-1.012-1.635a6.943 6.943 0 0 0-1.67-.162c-.909-.006-1.818-.003-2.727-.002c-.245 0-.427-.07-.427-.358c0-1.01-.002-2.022.002-3.033c0-.216.104-.349.339-.34Z"
              />
            </svg>
          </Link>
          <button className="text-xl mr-3 underline underline-offset-4 font-semibold hover:text-[#FF5200]">
            Other
          </button>
          <button className="text-3xl text-orange-400 font-extrabold cursor-pointer pd-2">
            ▼
          </button>
        </div>

        <div className="flex text-xl gap-10  tracking-tighter font-semibold">
          <a
            href="https://www.swiggy.com/corporate/"
            className="hover:text-[#FF5200]"
          >
            Swiggy Corporate
          </a>
          <Link to="/city/delhi/:id/search" className="hover:text-[#FF5200]">
            Search
          </Link>
          <a
            href="https://www.swiggy.com/offers-near-me"
            className="hover:text-[#FF5200]"
          >
            Offers
          </a>
          <a
            href="https://www.swiggy.com/support"
            className="hover:text-[#FF5200]"
          >
            Help
          </a>
          <Link to="/Checkout">
            <p className="hover:text-[#FF5200]">Cart{`(${counter})`}</p>
          </Link>
        </div>
      </div>
      <hr></hr>
      
    </>
  );
}
