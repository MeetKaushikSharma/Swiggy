import { useState } from "react";
import { addItems, IncrementItems, DecrementItems } from "../Stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function HotDealsCard({ hotDealsInfo }) {
  const items = useSelector((state) => state.cartslice.items);

  const productId = hotDealsInfo.variations[0].skuId;
  const element = items.find((item) => item?.id === productId);

  const count = element ? element.quantity : 0;

  const dispatch = useDispatch();

  function handleAdditems() {
    dispatch(addItems({ ...hotDealsInfo, id: productId }));
  }
  function handleIncrementItems() {
    dispatch(IncrementItems({ id: productId }));
  }
  function handleDecrementItems() {
    dispatch(DecrementItems({ id: productId }));
  }

  return (
    <>
      <div className="w-60 h-60  rounded-2xl">
        <div className="relative mb-0.5 flex flex-col items-center gap-1">
          <img
            className="w-50 h-50 object-cover rounded-xl drop-shadow-xl border  border-gray-100 py-4 px-2"
            src={
              "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/" +
              hotDealsInfo?.variations?.[0]?.imageIds?.[0]
            }
          ></img>
          {count === 0 ? (
            <button
              className="w-15 h-8 text-green-600 px-2 py-1 bg-white shadow-md border border-white rounded-xl hover:scale-105"
              onClick={() => handleAdditems()}
            >
              ADD
            </button>
          ) : (
            <div className=" flex gap-2 w-[60px] text-xl text-green-600 px-2 py-1 bg-white shadow-md border border-white rounded-xl">
              <button onClick={() => handleDecrementItems()}>-</button>
              <span>{count}</span>
              <button onClick={() => handleIncrementItems()}>+</button>
            </div>
          )}
        </div>
        <div className="text-nowrap overflow-hidden space-y-1 ">
          <p>{hotDealsInfo?.displayName}</p>
          <p className="text-gray-500 text-sm font-medium tracking-tighter [word-spacing:-2px]">
            {hotDealsInfo?.variations[0]?.quantityDescription}
          </p>
          <p className="text-md tracking-tighter  text-green-600 font-bold mt-2">
            {
              hotDealsInfo?.variations[0]?.price?.offerApplied
                ?.listingDescription
            }
          </p>

          <div className="flex text-md font-semibold gap-1">
            <p>{"₹" + hotDealsInfo?.variations[0]?.price?.offerPrice?.units}</p>
            <p className="line-through text-gray-400">
              {hotDealsInfo?.variations[0]?.price?.mrp?.units}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
