import DineData, { dineoutRestaurants } from "../Utils/DineData";
import DineCard from "./DineCard";

export default function DineOption() {
  return (
    <div className=" absolute w-[90%] mx-auto top-150 left-18">
      <p className="text-2xl font-bold">Discover best restaurants on Dineout</p>
      <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4">
        {dineoutRestaurants.map((RestData) => (
          <DineCard key={RestData?.info?.id} RestData={RestData}></DineCard>
        ))}
      </div>
    </div>
  );
}
