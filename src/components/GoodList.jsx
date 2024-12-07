import React from "react";
import { useSelector } from "react-redux";
import GoodItem from "./GoodItem/GoodItem";

const GoodList = () => {
  const store = useSelector((state) => state);
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
      {store.goods.map((good) => (
        <GoodItem key={good.id} {...good} />
      ))}
    </div>
  );
};

export default GoodList;
