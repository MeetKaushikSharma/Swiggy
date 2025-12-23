import { useState } from "react";
import {
  addItems,
  IncrementItems,
  DecrementItems,
} from "../../Stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function RestInfo({ restData }) {
  const items = useSelector((state) => state.cartslice.items);

  const element = items.find((item) => item.id === restData.id);

  const count = element ? element.quantity : 0;

  const dispatch = useDispatch();

  function handleAdditems() {
    dispatch(addItems(restData));
  }

  function handleIncrementItems() {
    dispatch(IncrementItems(restData));
  }
  function handleDecrementItems() {
    dispatch(DecrementItems(restData));
  }

  return (
    <>
      <div className="flex justify-between w-ful mb-2 pb-2">
        <div className="w-[70%] ">
          <p className="text-2xl text-gray-700 font-semibold mb-1">
            {restData?.name}
          </p>
          <p className="text-xl mb-1">{"₹" + restData?.price / 100}</p>
          <span className="text-green-600">
            {restData?.ratings?.aggregatedRating?.rating + ""}
          </span>
          <span>
            {"(" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"}
          </span>
          <p>{restData?.description}</p>
        </div>
        <div className="w-[20%] relative h-42">
          <img
            className="w-[full] h-36 object-cover rounded-2xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              restData.imageId
            }
          ></img>
          {count === 0 ? (
            <button
              className="absolute bottom-0 left-12 text-green-600 px-2 py-1 bg-white shadow-md border border-white rounded-xl hover:scale-105"
              onClick={() => handleAdditems()}
            >
              ADD
            </button>
          ) : (
            <div className=" absolute bottom-1 left-12  flex gap-2 text-xl text-green-600 px-2 py-1 bg-white shadow-md border border-white rounded-xl">
              <button onClick={() => handleDecrementItems()}>-</button>
              <span>{count}</span>
              <button onClick={() => handleIncrementItems()}>+</button>
            </div>
          )}
        </div>
      </div>
      <hr className="mb-6"></hr>
    </>
  );
}
