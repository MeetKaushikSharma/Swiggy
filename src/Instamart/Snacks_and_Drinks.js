import { useEffect, useState } from "react";
import Snacks_and_DrinksCard from "./Snacks_and_DrinksCard";

export default function Snacks_and_Drinks() {
  const [Snacks_and_Drinks, setSnacks_and_Drinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI =
        "https://www.swiggy.com/api/instamart/home/v2?offset=1&layoutId=4987&storeId=1402624&primaryStoreId=1402624&secondaryStoreId=&clientId=INSTAMART-APP";
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();
      setSnacks_and_Drinks(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
      );
      // console.log(Snacks_and_Drinks);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <p className="relative left-42 top-10 text-xl font-bold">
        Snacks & Drinks
      </p>
      <div className="flex flex-wrap mt-15 ml-42 items-center w-[80%]">
        {(Snacks_and_Drinks || []).map((Snacks_and_DrinksInfo) => (
          <Snacks_and_DrinksCard
            key={Snacks_and_DrinksInfo?.id}
            Snacks_and_DrinksInfo={Snacks_and_DrinksInfo}
          />
        ))}
      </div>
    </div>
  );
}
