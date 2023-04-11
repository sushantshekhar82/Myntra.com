import * as types from "./types";
import axios from "axios";

export const getMensData = () => (dispatch) => {
  dispatch({ type: types.PRODUCT_LOADING });
  axios
    .get(`https://shopkaro-backend.onrender.com/mens`, getProductParam)
    .then((res) => dispatch({ type: types.PRODUCT_SUCCESS, payload: res.data }))
    .catch((e) => dispatch({ type: types.PRODUCT_ERROR, payload: e }));
};
