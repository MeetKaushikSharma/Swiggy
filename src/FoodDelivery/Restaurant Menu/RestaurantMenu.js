import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import { Link } from "react-router-dom";
import RestMenuShimmer from "./RestMenuShimmer";

export default function RestaurantMenu() {
  let { id } = useParams();
  const [selected, setSelected] = useState(null);

  const [RestData, setRestData] = useState([]);
  const [restname, setRestname] = useState("");

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();
      const tempData =
        data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      setRestname(data?.data?.cards[0]?.card?.card?.text);
      const filterData = tempData.filter(
        (items) => "title" in items?.card?.card
      );
      setRestData(filterData);
    }

    fetchData();
  }, []);

  if (RestData.length == 0) {
    return (
      <>
        <RestMenuShimmer></RestMenuShimmer>
      </>
    );
  }

  return (
    <div>
      <p className="absolute text-5xl font-bold ml-40 tracking-tight bottom-145">
        {restname}
      </p>
      <div className="w-[80%] mx-auto mt-40 mb-20">
        <Link to={`/city/delhi/${id}/search`}>
          <p className="w-full text-center py-4 bg-gray-200">
            Search for Dishes
          </p>
        </Link>
      </div>
      <div className="w-[80%] mx-auto mt-15 mb-20">
        <button
          className={`text-2xl py-2 px-8 mr-2 border rounded ${
            selected === "veg" ? "bg-green-500" : "bg-gray-300"
          }`}
          onClick={() => setSelected(selected === "veg" ? null : "veg")}
        >
          Veg
        </button>
        <button
          className={`text-2xl py-2 px-4 border rounded ${
            selected === "nonveg" ? "bg-red-500" : "bg-gray-300"
          }`}
          onClick={() => setSelected(selected === "nonveg" ? null : "nonveg")}
        >
          Non-Veg
        </button>
      </div>
      <div className="w-[80%] mx-auto mt-20">
        {RestData.map((menuItems) => (
          <MenuCard
            key={menuItems?.card?.card?.title}
            menuItems={menuItems?.card?.card}
            foodselected={selected}
          ></MenuCard>
        ))}
      </div>
    </div>
  );
}
