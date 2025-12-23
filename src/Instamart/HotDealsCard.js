export default function HotDealsCard({ hotDealsInfo }) {
  return (
    <>
      <div className="w-50 h-50">
        <img
          className="flex object-cover rounded-xl drop-shadow-xl"
          src={
            "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/" +
            hotDealsInfo?.variations?.[0]?.imageIds?.[0]
          }
        ></img>
        <div>
          <p>{hotDealsInfo?.displayName}</p>
        </div>
      </div>
    </>
  );
}
