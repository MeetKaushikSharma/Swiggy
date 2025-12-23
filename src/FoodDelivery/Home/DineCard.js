export default function DineCard({ RestData }) {
  return (
    <div className="max-w-sm flex-none">
      <a target="blank" href={RestData.cta.link}>
        <div className="relative">
          <img
            className="w-80 h-50 object-cover rounded-t-2xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
              RestData?.info?.mediaFiles[0]?.url
            }
          ></img>
          <div className="absolute bg-linear-to-t from-black h-15 bottom-0 left-0 right-0"></div>
          <p className="absolute bottom-2 left-4 text-1xl text-white font-bold">
            {RestData.info.name}
          </p>
          <p className="absolute bottom-2 right-4 text-1xl text-white font-bold">
            {RestData.info.rating.value}
          </p>
        </div>
      </a>
    </div>
  );
}
