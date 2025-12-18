import { useSelector } from "react-redux";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutCard from "./CheckoutCard";
import { Link } from "react-router-dom";

export default function Checkout() {
  const items = useSelector((state) => state.cartslice.items);
  const count = useSelector((state) => state.cartslice.count);
  const DeliveryFee = 40;

  const totalprice = items.reduce((sum, items) => {
    const price = items?.price;
    return sum + price * items?.quantity;
  }, 0);

  const totalBill = totalprice / 100;

  if (count == 0) {
    return (
      <>
        <CheckoutHeader></CheckoutHeader>
        <div className="flex flex-col items-center mt-20 gap-3">
          <img
            className="w-100 h-80"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          ></img>
          <p className="text-2xl font-bold mt-2">Your cart is empty</p>
          <p>You can go to home page to view more restaurants</p>
          <Link to="/restaurant">
            <button className="bg-[#FF5200] tex-white px-4 py-2 text-white font-bold hover:drop-shadow-xl cursor-pointer">
              SEE RESTAURANTS NEAR ME
            </button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="mb-10">
      <CheckoutHeader></CheckoutHeader>
      <p className="ml-50 mt-10 text-4xl font-bold">Your Cart Items:</p>
      <div>
        {items.map((value) => (
          <CheckoutCard key={value?.id} value={value}></CheckoutCard>
        ))}
      </div>
      <div className="relative mb-20">
        <hr className=" mt-15"></hr>
        <p className="text-2xl font-semibold absolute left-50 top-5">
          Bill Details:
        </p>

        <p className="text-2xl font-semibold absolute left-50 top-20">
          Item Total:
        </p>
        <p className="text-xl font-semibold absolute left-296 top-20">
          ₹{totalBill}
        </p>
        <p className="text-2xl font-semibold absolute left-50 top-30">
          Delivery Fee:
        </p>
        <p className="text-xl font-semibold absolute left-296 top-30">
          ₹{DeliveryFee}
        </p>
        <p className="text-2xl font-bold absolute left-50 top-48">To Pay:</p>
        <p className="text-xl font-bold absolute left-296 top-48">
          ₹{DeliveryFee + totalBill}
        </p>
        <hr className="mt-43"></hr>
      </div>
    </div>
  );
}
