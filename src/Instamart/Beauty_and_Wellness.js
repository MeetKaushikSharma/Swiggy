import { useEffect, useState } from "react";
import Beauty_and_WellnessCard from "./Beauty_and_WellnessCard";

export default function Beauty_and_Wellness() {
  const [Beauty_and_Wellness, setBeauty_and_Wellness] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI =
        "https://www.swiggy.com/api/instamart/home/v2?offset=1&layoutId=4987&storeId=1402624&primaryStoreId=1402624&secondaryStoreId=&clientId=INSTAMART-APP";
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();
      setBeauty_and_Wellness(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.info
      );
      // console.log(Beauty_and_Wellness);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <p className="relative left-42 top-10 text-xl font-bold">
        Beauty & Wellness
      </p>
      <div className="flex flex-wrap mt-15 ml-42 items-center w-[80%]">
        {(Beauty_and_Wellness || []).map((Beauty_and_WellnessInfo) => (
          <Beauty_and_WellnessCard
            key={Beauty_and_WellnessInfo?.id}
            Beauty_and_WellnessInfo={Beauty_and_WellnessInfo}
          />
        ))}
      </div>
    </div>
  );
}
