import * as types from "./type";
let initialState = {
  loading: false,
  errormsg: "",
  error: false,
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: payload,
      };
    }
    case types.PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        errormsg: payload,
      };
    }
    case types.FILTER_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.FILTER_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
         products: payload,
      };
    }
    case types.FILTER_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        errormsg: payload,
      };
    }
    default:
      return state;
  }
};