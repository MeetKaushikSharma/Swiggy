import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./FoodDelivery/Home/Home";
import Restaurant from "./FoodDelivery/Restaurant/Restaurant";
import RestaurantMenu from "./FoodDelivery/Restaurant Menu/RestaurantMenu";
import SearchFood from "./FoodDelivery/SearchFood";
import SecondaryHome from "./FoodDelivery/SecondaryHome";
import Checkout from "./FoodDelivery/Checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./Stored/stores";
import { Provider } from "react-redux";
import Instamart from "./Instamart/Instamart";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route element={<SecondaryHome></SecondaryHome>}>
              <Route
                path="/restaurant"
                element={<Restaurant></Restaurant>}
              ></Route>
              <Route
                path="/city/delhi/:id"
                element={<RestaurantMenu></RestaurantMenu>}
              ></Route>
              <Route
                path="/city/delhi/:id/search"
                element={<SearchFood></SearchFood>}
              ></Route>
            </Route>

            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
            <Route path="/instamart" element={<Instamart></Instamart>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
