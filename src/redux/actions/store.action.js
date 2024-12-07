const fetchingGoods = () => {
  return {
    type: "fetchingGoods",
  };
};

const fetchedGoods = (data) => {
  return {
    type: "fetchedGoods",
    payload: data,
  };
};

const fetchedGoodsError = () => {
  return {
    type: "fetchedGoodsError",
  };
};

const buyGoods = (good) => {
  return {
    type: "addGood",
    payload: good,
  };
};

export { fetchingGoods, fetchedGoodsError, fetchedGoods, buyGoods };
