import { useContext } from "react"
import * as types from "./type"
import axios from "axios"
var userid;
const token = localStorage.getItem('token');
const headers = {
  Authorization: `Bearer ${token}`,
};
// https://backend-myntra.onrender.com
const url="https://strange-crab-getup.cyclic.app"

export const getId=()=>(dispatch)=>{
  fetch("https://strange-crab-getup.cyclic.app/user/find", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
       
        userid=res[0]._id
       
      })
      .catch((err) => console.log(err));
}
getId()

export const getCart=(id)=>(dispatch)=>{
    dispatch({type:types.FIND_CART_LOADING})

    axios.get(`https://strange-crab-getup.cyclic.app/cart/${id}`,  { headers })
    .then(res => {
      // Handle the response
     dispatch({type:types.FIND_CART_SUCCESS,payload:res.data})
      console.log('Response:', res.data);
    })
    .catch(error => {
      // Handle the error
      dispatch({type:types.FIND_CART_ERROR})
      console.error('Error:', error);
    });

//     fetch(`https://strange-crab-getup.cyclic.app/cart/${id}`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         console.log("reducer cart",res);
//         dispatch({type:types.FIND_CART_SUCCESS,payload:res})
//  })
//       .catch((err) => dispatch({type:types.FIND_CART_ERROR}));
}

export const addCart=(data)=>async(dispatch)=>{
  getId()
    dispatch({type:types.CART_LOADING})


    axios.post('https://strange-crab-getup.cyclic.app/cart/addcart', data, { headers })
  .then(res => {
    // Handle the response
    dispatch({type:types.CART_SUCCESS,payload:res.data})
    console.log('Response:', res.data);
    getCart(userid)
  })
  .catch(error => {
    // Handle the error
    dispatch({type:types.CART_ERROR})
    console.error('Error:', error);
  });
//     axios.post("https://strange-crab-getup.cyclic.app/cart/addcart",{
//         headers: {
//             'content-type': 'application/json',
//               'Authorization': `Bearer ${localStorage.getItem("token")}`
//             },
//         Credential:true,
//         data
//     })
//     .then((res)=> dispatch({type:types.CART_SUCCESS}))
//     .catch((err)=> dispatch({type:types.CART_ERROR}))
//  console.log("action",data)

  // await  fetch("https://strange-crab-getup.cyclic.app/cart/addcart", {
  //       method:"POST",
  //       body:JSON.stringify(data) ,
  //       headers: {
  //           'Content-Type': 'application/json',
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       }
  //     })
  //       .then((res) =>  dispatch({type:types.CART_SUCCESS}))
        
  //       .catch((err) => dispatch({type:types.CART_ERROR}));

        getId()
    getCart(userid)

}

export const deleteCart=(id)=>(dispatch)=>{
  getId()
 
  dispatch({type:types.DELETE_CART_LOADING})

  axios.delete(`https://strange-crab-getup.cyclic.app/cart/deletecart/${id}`, { headers })
  .then(response => {
    // Handle the response
    dispatch({type:types.DELETE_CART_SUCCESS})
    console.log('Response delete:', response.data);
    getId()
    getCart(userid)
  })
  .catch(error => {
    // Handle the error
    dispatch({type:types.DELETE_CART_ERROR})
    console.error('Error:', error);
  });
  // fetch(`https://strange-crab-getup.cyclic.app/cart/deletecart/${id}`, {
  //   method:"DELETE",
  //  headers: {
  //       'Content-Type': 'application/json',
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //   }
  // })
  //   .then((res) => { dispatch({type:types.DELETE_CART_SUCCESS})
  //    console.log(res)
  // } )
    
  //   .catch((err) => dispatch({type:types.DELETE_CART_ERROR}));
  

}
export const deleteall=(id)=>(dispatch)=>{
  getId()
 
  dispatch({type:types.DELETE_ALL_CART_LOADING})

  axios.delete(`https://strange-crab-getup.cyclic.app/cart/deleteall/${id}`, { headers })
  .then(response => {
    // Handle the response
    dispatch({type:types.DELETE_ALL_CART_SUCCESS})
    console.log('Response delete:', response.data);
    getId()
    getCart(userid)
  })
  .catch(error => {
    // Handle the error
    dispatch({type:types.DELETE_ALL_CART_ERROR})
    console.error('Error:', error);
  });
}
export const quantityinc=(id,updateqty)=>(dispatch)=>{
  getId()
  dispatch({type:types.QUANTITY_CART_LOADING})
  fetch(`https://strange-crab-getup.cyclic.app/cart/updateqty/${id}`, {
    method:"PATCH",
    body:JSON.stringify({quantity:updateqty}),
   headers: {
        'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
  })
    .then((res) => { dispatch({type:types.QUANTITY_CART_SUCCESS})
     console.log("deletewala",res)
    
     getId()
    getCart(userid)
  } )
    
    .catch((err) => dispatch({type:types.QUANTITY_CART_ERROR}));
    
    

}