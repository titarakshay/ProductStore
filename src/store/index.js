import { createStore } from "redux";
import { products, pricingInfo } from "../React-products";
import { EDIT } from "./Types";
const intialState = {
  products,
  pricingInfo,
};

function reducer(state = intialState, action) {
  switch (action.type) {
    case EDIT: {
      return {
        ...state,
        products: state.products.map((product, i) => {
          if (i == action.payload.id) {
            product = action.payload;
            return product;
          }
          return product;
        }),
      };
    }
    default:
      return state;
  }
}

export let store = createStore(reducer);
