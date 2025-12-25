import { useEffect, useState } from "react";
import HotDealsCard from "./HotDealsCard";

export default function HotDeals() {
  const [hotdeals, setHotDeals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI =
        "https://www.swiggy.com/api/instamart/home/v2?offset=0&storeId=&primaryStoreId=&secondaryStoreId=&clientId=INSTAMART-APP#";
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();
      setHotDeals(
        data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.items
      );
      // console.log(hotdeals);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <p className="relative left-42 top-30 text-xl font-bold">Hot Deals</p>
      <div className="flex h-120 gap-10 flex-row overflow-scroll mt-7 ml-42 items-center w-[80%]">
        {(hotdeals || []).map((hotDealsInfo) => (
          <HotDealsCard
            key={hotDealsInfo.variations[0].skuId}
            hotDealsInfo={hotDealsInfo}
          />
        ))}
      </div>
    </div>
  );
}
