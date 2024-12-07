import { createStore } from "redux";
import storeReducer from "./reducers/store";

const store = createStore(storeReducer);

export default store;
