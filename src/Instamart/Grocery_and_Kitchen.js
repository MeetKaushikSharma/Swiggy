import { useEffect, useState } from "react";
import Grocery_and_KitchenCard from "./Grocery_and_KitchenCard";

export default function Grocery_and_Kitchen() {
  const [Grocery_and_Kitchen, setGrocery_and_Kitchen] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI =
        "https://www.swiggy.com/api/instamart/home/v2?offset=1&layoutId=4987&storeId=1402624&primaryStoreId=1402624&secondaryStoreId=&clientId=INSTAMART-APP";
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();
      setGrocery_and_Kitchen(
        data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      );
      // console.log(Grocery_and_Kitchen);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <p className="relative left-42 top-10 text-xl font-bold">
        Grocery & Kitchen
      </p>
      <div className="flex flex-wrap mt-15 ml-42 items-center w-[80%]">
        {(Grocery_and_Kitchen || []).map((Grocery_and_KitchenInfo) => (
          <Grocery_and_KitchenCard
            key={Grocery_and_KitchenInfo?.id}
            Grocery_and_KitchenInfo={Grocery_and_KitchenInfo}
          />
        ))}
      </div>
    </div>
  );
}
