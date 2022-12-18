import React from 'react'
import { useState } from 'react'

function Cart({data1}) {
  const [data,setData]=useState([data1]);
  console.log("cart"+data);
  return (
    <div>
      cart
    </div>
  )
}

export default Cart
