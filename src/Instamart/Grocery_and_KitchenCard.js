export default function Grocery_and_KitchenCard({ Grocery_and_KitchenInfo }) {
  return (
    <>
      <img
        className="w-40 h-40 object-cover rounded-xl drop-shadow-xl border  border-gray-100 py-4 px-2"
        src={
          "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/" +
          Grocery_and_KitchenInfo?.imageId
        }
      ></img>
      <p></p>
    </>
  );
}
