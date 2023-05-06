import * as types from "./type"
import axios from "axios"
//http://localhost:4500/Products
//http://localhost:8080/user/login
export const loginuser = (email,password) =>async (dispatch) => {
  dispatch({ type: types.USER_LOADING });
  try {
    let res = await axios
    .post(`https://strange-crab-getup.cyclic.app/user/login`,{
      email,
      password
    }) 
    dispatch({ type: types.USER_SUCCESS, payload:(res.data.msg)})
    return res.data
  } catch (error) {
    dispatch({ type: types.USER_ERROR, payload: error.message })
  }
  

};

