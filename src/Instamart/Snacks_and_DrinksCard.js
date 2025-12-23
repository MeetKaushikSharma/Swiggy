export default function Snacks_and_DrinksCard({ Snacks_and_DrinksInfo }) {
  return (
    <>
      <img
        className="w-40 h-40 object-cover rounded-xl drop-shadow-xl border  border-gray-100 py-4 px-2"
        src={
          "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/" +
          Snacks_and_DrinksInfo?.imageId
        }
      ></img>
    </>
  );
}
