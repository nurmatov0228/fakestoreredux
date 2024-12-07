import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  fetchedGoods,
  fetchedGoodsError,
  fetchingGoods,
} from "./redux/actions/store.action";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Cart from "./components/Cart/Cart";
import GoodList from "./components/GoodList";

const App = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingGoods());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetchedGoods(res.data));
        }
      })
      .catch((e) => {
        console.log(e);
        dispatch(fetchedGoodsError());
      });
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Toastify konteyneri */}
      <ToastContainer />
      {/* Savat ikonkasi */}
      <i
        className="fa-solid fa-cart-shopping fixed top-5 right-5 text-3xl text-gray-800 cursor-pointer hover:text-gray-600"
        onClick={() => setCartOpen(!isCartOpen)}
      ></i>

      {/* Modal oynada savat */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center">
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-96 overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setCartOpen(false)}
            >
              &times;
            </button>
            <Cart />
          </div>
        </div>
      )}

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Products
        </h1>
        <GoodList />
      </div>
    </div>
  );
};

export default App;
