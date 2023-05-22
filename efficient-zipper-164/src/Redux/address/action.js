import axios from 'axios'
import * as types from './type'
// Retrieve the token from localStorage
const token = localStorage.getItem('token');
var userid;
// Set the headers with the Bearer token
const headers = {
  Authorization: `Bearer ${token}`,
};
export const getId=()=>(dispatch)=>{
    axios.get(`https://strange-crab-getup.cyclic.app/user/find`, { headers })
    .then(res => {
      // Handle the response
      userid=res.data[0]._id
      console.log('Responseforuserid:', res.data);
    })
    .catch(error => {
      // Handle the error
     
      console.error('Error:', error);
    });
  
         
         
         
      
  }
  getId()
export const getAddress=(id)=>(dispatch)=>{
    dispatch({type:types.GET_ADDRESS_LOADING})
    axios.get(`https://strange-crab-getup.cyclic.app/address/${id}`, { headers })
    .then(response => {
      // Handle the response
      dispatch({type:types.GET_ADDRESS_SUCCESS,payload:response.data})
      console.log('Responseeeee:', response.data);
      return response.data
    })
    .catch(error => {
      // Handle the error
      dispatch({type:types.GET_ADDRESS_ERROR})
      console.error('Error:', error);
    });
}

export const addAddress=(data)=>(dispatch)=>{
    dispatch({type:types.ADD_ADDRESS_LOADING})
    axios.post('https://strange-crab-getup.cyclic.app/address/add', data, { headers })
    .then(response => {
      // Handle the response
      dispatch({type:types.ADD_ADDRESS_SUCCESS})
      console.log('Response:', response.data);
      return response.data
    })
    .catch(error => {
      // Handle the error
      dispatch({type:types.ADD_ADDRESS_ERROR})
      console.error('Error:', error);
    });
}

export const updateAddress=(id,data)=>(dispatch)=>{
  dispatch({type:types.UPDATE_ADDRESS_LOADING})
  axios.patch(`https://strange-crab-getup.cyclic.app/address/updateaddress/${id}`, data, { headers })
  .then(response => {
    // Handle the response
    dispatch({type:types.UPDATE_ADDRESS_SUCCESS})
    console.log('Response:', response.data);
    getId()
  getAddress(userid)
  })
  .catch(error => {
    // Handle the error
    dispatch({type:types.UPDATE_ADDRESS_ERROR})
    console.error('Error:', error);
  });
}


export const deleteAddress=(id)=>(dispatch)=>{
  dispatch({type:types.DELETE_ADDRESS_LOADING})
  axios.delete(`https://strange-crab-getup.cyclic.app/address/deleteaddress/${id}`, { headers })
  .then(response => {
    // Handle the response
    dispatch({type:types.DELETE_ADDRESS_SUCCESS})
    console.log('Response:', response.data);
    getId()
  getAddress(userid)
  })
  .catch(error => {
    // Handle the error
    dispatch({type:types.DELETE_ADDRESS_ERROR})
    console.error('Error:', error);
  });
}

