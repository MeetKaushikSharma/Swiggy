export default function HotDealsCard({ hotDealsInfo }) {
  return (
    <>
      <div className="w-60 h-60  rounded-2xl">
        <img
          className="w-50 h-50 object-cover rounded-xl drop-shadow-xl border  border-gray-100 py-4 px-2"
          src={
            "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/" +
            hotDealsInfo?.variations?.[0]?.imageIds?.[0]
          }
        ></img>
        <div className="text-nowrap overflow-hidden">
          <p>{hotDealsInfo?.displayName}</p>
          <p>{"₹" + hotDealsInfo?.variations[0]?.price?.mrp?.units}</p>
        </div>
      </div>
    </>
  );
}
