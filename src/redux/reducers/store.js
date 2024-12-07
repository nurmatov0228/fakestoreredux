const initialState = {
  goods: [],
  buyGoods: [],
  loader: "none",
  dataStatus: "",
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchingGoods":
      return {
        ...state,
        loader: "loading",
      };
    case "fetchedGoods":
      return {
        ...state,
        goods: action.payload,
        loader: "loaded",
      };
    case "fetchedGoodsError":
      return {
        ...state,
        loader: "loaded",
        dataStatus: "Error fetching",
      };
    case "addGood": {
      const isGood = state.buyGoods.findIndex(
        (el) => el.id === action.payload.id
      );
      if (isGood < 0) {
        return {
          ...state,
          buyGoods: [...state.buyGoods, { ...action.payload, quantity: 1 }],
        };
      } else {
        const newBuyGoods = state.buyGoods.map((el) => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              quantity: el.quantity + 1,
            };
          } else {
            return el;
          }
        });

        return {
          ...state,
          buyGoods: newBuyGoods,
        };
      }
    }
    case "removeGood":
      return {
        ...state,
        buyGoods: state.buyGoods.filter((good) => good.id !== action.payload),
      };
    case "incrementGood":
      return {
        ...state,
        buyGoods: state.buyGoods.map((good) =>
          good.id === action.payload
            ? { ...good, quantity: good.quantity + 1 }
            : good
        ),
      };
    case "decrementGood":
      return {
        ...state,
        buyGoods: state.buyGoods.map((good) =>
          good.id === action.payload
            ? { ...good, quantity: good.quantity - 1 }
            : good
        ),
      };
    default:
      return state;
  }
};

export default storeReducer;
