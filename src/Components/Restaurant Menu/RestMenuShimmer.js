export default function RestMenuShimmer() {
  return (
    <div>
      <p className="absolute font-bold  left-38 bottom-145 py-6 px-50 bg-gray-200 animate-pulse"></p>
      <div className="w-[80%] mx-auto mt-40 mb-20 animate-pulse">
        <p className="w-full text-center py-4 px-2 bg-gray-200 animate-pulse">
          Search for Dishes
        </p>
      </div>
      <div className="w-[80%] mx-auto mt-15 mb-20 animate-pulse">
        <button className="text-2xl py-2 px-8 mr-2 border rounded animate-pulse">
          Veg
        </button>
        <button className="text-2xl py-2 px-4 border rounded animate-pulse">
          Non-Veg
        </button>
      </div>
      <div className="absolute left-38 bottom-55 py-6 px-50 bg-gray-200 animate-pulse"></div>
      <div className="absolute left-38 bottom-38 py-4 px-50 bg-gray-200 animate-pulse"></div>
      <div className="absolute left-38 bottom-30 py-3 px-10 bg-gray-200 animate-pulse"></div>
      <div className="absolute left-38 bottom-22 py-3 px-10 bg-gray-200 animate-pulse"></div>
      <div className="absolute left-38 bottom-14 py-3 px-60 bg-gray-200 animate-pulse"></div>
      <div className="absolute right-40 bottom-15 py-27 px-40 bg-gray-200 animate-pulse"></div>
    </div>
  );
}
