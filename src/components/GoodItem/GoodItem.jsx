import React from "react";
import { useDispatch } from "react-redux";
import { buyGoods } from "../../redux/actions/store.action";
import { toast } from "react-toastify";

const GoodItem = ({ title, price, description, image, id }) => {
  const dispatch = useDispatch();

  const handleBuy = () => {
    const good = { id, title, price, image };
    dispatch(buyGoods(good));
    toast.success(`${title.slice(0, 10)}... added to cart!`);
  };

  return (
    <div className="w-64 h-96 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      {/* Rasmlar uchun qism */}
      <div className="h-40 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Matn qismi */}
      <div className="p-4 flex flex-col justify-between h-56">
        {/* Title qismini kesish */}
        <h3 className="text-base font-bold text-gray-800 line-clamp-2">
          {title.slice(0, 20)}...
        </h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {description.slice(0, 50)}...
        </p>
        <p className="text-lg font-semibold text-blue-600 mt-3">${price}</p>
        {/* Tugma */}
        <button
          className="mt-auto py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={handleBuy}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default GoodItem;
