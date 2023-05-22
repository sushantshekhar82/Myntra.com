import * as types from "./type"
import axios from "axios"

//http://localhost:8080/Product
const url="https://strange-crab-getup.cyclic.app/"
export const getMensData = () => (dispatch) => {
  dispatch({ type: types.PRODUCT_LOADING });
  axios
    .get(`https://strange-crab-getup.cyclic.app/Product`)
    .then((res) => dispatch({ type: types.PRODUCT_SUCCESS, payload: res.data.product }))
    .catch((e) => dispatch({ type: types.PRODUCT_ERROR, payload: e }));
};

