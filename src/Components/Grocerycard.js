export default function Grocerycard({ foodData }) {
  return (
    <div className="flex-none">
      <a href={foodData?.action?.link}>
        <img
          className="w-40 h-40 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
            foodData?.imageId
          }
        ></img>
      </a>
      <h2 className="text-center font-bold">{foodData?.action?.text}</h2>
    </div>
  );
}
