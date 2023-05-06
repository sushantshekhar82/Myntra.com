import * as types from "./type";
let initialState = {
  loading: false,
  errormsg: "",
  error: false,
  message: "",
};

export const userloginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_LOADING: {
      return {
        loading: true,
      };
    }
    case types.USER_SUCCESS: {
      return {
        loading: false,
        message: payload,
      };
    }
    case types.USER_ERROR: {
      return {
        loading: false,
        error: true,
        errormsg: payload,
      };
    }
    default:
      return state;
  }
};