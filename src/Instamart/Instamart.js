import Beauty_and_Wellness from "./Beauty_and_Wellness";
import Grocery_and_Kitchen from "./Grocery_and_Kitchen";
import HotDeals from "./HotDeals";
import Instamart_Footer from "./Instamart_Footer";
import MartHome from "./marthome";
import Snacks_and_Drinks from "./Snacks_and_Drinks";

export default function Instamart() {
  return (
    <>
      <MartHome></MartHome>
      <HotDeals></HotDeals>
      <Grocery_and_Kitchen></Grocery_and_Kitchen>
      <Snacks_and_Drinks></Snacks_and_Drinks>
      <Beauty_and_Wellness></Beauty_and_Wellness>
      <Instamart_Footer></Instamart_Footer>
    </>
  );
}
