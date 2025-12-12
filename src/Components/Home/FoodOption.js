import { imageGridCards } from "../../Utils/FoodData";
import FoodCard from "../FoodCard";

export default function FoodOption() {
  return (
    <div className="relative">
      <h2 className="absolute left-45 bottom-130 font-bold text-3xl ">
        Order our best food options
      </h2>
      <div className="w-[80%] container mx-auto flex flex-wrap mt-30 gap-3">
        {imageGridCards.map((foodData) => (
          <FoodCard key={foodData.id} foodData={foodData}></FoodCard>
        ))}
      </div>
    </div>
  );
}
