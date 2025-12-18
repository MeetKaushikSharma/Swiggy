import { useState, useEffect } from "react";
import { useParams } from "react-router";
import RestInfo from "../Components/Restaurant Menu/RestInfo";

export default function SearchFood() {
  const { id } = useParams();
  const [food, setFood] = useState("");
  const [restData, setRestData] = useState([]); // all categories
  const [results, setResults] = useState([]); // filtered items

  // 1) fetch menu once
  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();

      const tempData =
        data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const filterData = tempData.filter(
        (items) => "title" in items?.card?.card
      );

      setRestData(filterData);
    }

    fetchData();
  }, [id]);

  // 2) whenever user types, filter all itemCards
  useEffect(() => {
    if (food.length < 2) {
      setResults([]);
      return;
    }

    // flatten all itemCards from all categories
    const allItems = restData
      .flatMap((block) => block?.card?.card?.itemCards || [])
      .map((it) => it?.card?.info)
      .filter(Boolean);

    const query = food.toLowerCase();

    const matched = allItems.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    setResults(matched);
  }, [food, restData]);

  return (
    <div className="w-4/5 max-w-3xl mx-auto mt-10 mb-20">
      {/* search input */}
      <input
        className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-xl border placeholder:text-gray-500"
        placeholder="Search here ..."
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      {/* results */}
      <div className="mt-10 flex flex-col gap-6">
        {results.map((item) => (
          <RestInfo key={item.id} restData={item} />
        ))}

        {food.length >= 2 && results.length === 0 && (
          <p className="mt-6 text-lg text-gray-500">
            No dishes found matching “{food}”.
          </p>
        )}
      </div>
    </div>
  );
}
