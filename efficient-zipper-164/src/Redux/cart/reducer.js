import * as types from "./type";
let initialState = {
  loading: false,
  errormsg: "",
  error: false,
  cart: [],
  totallength:0,
  totalmoney:0
};

export const cartReducer = (state = initialState, { type, payload }) => {
    
  switch (type) {
    case types.CART_LOADING: {
      return {
        ...state,
        loading: true,
        error:false
      };
    }
    case types.CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        error:false,
        totallength:payload.length
        
        
       
      };
    }
    case types.CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        
      };
    }
    case types.FIND_CART_LOADING: {
        return {
          ...state,
          loading: true,
          error:false,
        };
      }
      case types.FIND_CART_SUCCESS: {
        var total=0
        var totalprice
        if(payload){
         totalprice=  payload.reduce((sum,el)=>sum+el.price*el.quantity,total)
         console.log("mera price",totalprice)
        }
        return {
          ...state,
          loading: false,
          error:false,
          cart:payload,
          totallength:payload.length,
          totalmoney:totalprice
         
         
        };

      }
      case types.FIND_CART_ERROR: {
        return {
          ...state,
          loading: false,
          error: true
          
        };
      }
      case types.DELETE_CART_LOADING: {
        return {
          ...state,
          loading: true,
          error:false,
        };
      }
      case types.DELETE_CART_SUCCESS: {
        return {
          ...state,
          loading: false,
          error:false,
          
         totallength:payload.length
         
        };
      }
      case types.DELETE_CART_ERROR: {
        return {
          ...state,
          loading: false,
          error: true
          
        };
      }
      case types.QUANTITY_CART_LOADING: {
        return {
          ...state,
          loading: true,
          error:false,
        };
      }
      case types.QUANTITY_CART_SUCCESS: {
        return {
          ...state,
          loading: false,
          error:false,
         totallength:payload.length
         
        };
      }
      case types.QUANTITY_CART_ERROR: {
        return {
          ...state,
          loading: false,
          error: true
          
        };
      }
    default:
      return state;
  }
};