import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Cart = () => {
  const buyGoods = useSelector((state) => state.buyGoods);
  const dispatch = useDispatch();

  const incrementQuantity = (id) => {
    dispatch({ type: "incrementGood", payload: id });
    toast.success("Quantity increased!");
  };

  const decrementQuantity = (id) => {
    const item = buyGoods.find((good) => good.id === id);
    if (item.quantity > 1) {
      dispatch({ type: "decrementGood", payload: id });
      toast.info("Quantity decreased!");
    } else {
      toast.warning("Cannot decrease below 1!");
    }
  };

  const removeGood = (id) => {
    dispatch({ type: "removeGood", payload: id });
    toast.error("Item removed from cart!");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>
      <div className="grid gap-6">
        {buyGoods.length > 0 ? (
          buyGoods.map((good) => (
            <div
              key={good.id}
              className="flex items-center bg-white shadow-md rounded-lg p-4 gap-4 hover:shadow-lg transition-all"
            >
              <img
                src={good.image}
                alt={good.title.slice(0, 10)}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-grow">
                <h3 className="font-semibold text-lg text-gray-700">
                  {good.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Quantity: {good.quantity}
                </p>
                <p className="font-bold text-blue-600 mt-1">
                  ${good.price * good.quantity}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  onClick={() => incrementQuantity(good.id)}
                >
                  +
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => decrementQuantity(good.id)}
                >
                  -
                </button>
                <button
                  className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                  onClick={() => removeGood(good.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
