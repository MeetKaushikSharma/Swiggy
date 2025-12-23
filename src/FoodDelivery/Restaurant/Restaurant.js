import { useState, useEffect } from "react";
import RestCard from "./RestCard";
import RestShimmer from "./RestShimmer";

export default function Restaurant() {
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5759&lng=77.3345&is-seo-homepage-enabled=true";
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();
      setRestData(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    fetchData();
  }, []);

  if (RestData.length == 0) {
    return (
      <>
        <p className="absolute left-42 font-bold text-2xl bottom-155">
          Restaurants with online food delivery
        </p>
        <RestShimmer></RestShimmer>
      </>
    );
  }

  return (
    <>
      <p className="absolute left-42 font-bold text-2xl bottom-155">
        Restaurants with online food delivery
      </p>
      <div className="flex flex-wrap w-[80%] mt-25 ml-42 gap-5">
        {RestData.map((restInfo) => (
          <RestCard key={restInfo?.info?.id} restInfo={restInfo} />
        ))}
      </div>
    </>
  );
}
