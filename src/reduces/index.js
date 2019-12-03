import products from "./products";
import basketItems from "./basketItems";

import { combineReducers } from "redux";
const reduces = combineReducers({
    products, basketItems
})

export default reduces;