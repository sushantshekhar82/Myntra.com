import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Home'
import Men from './Men'
import Profile from './Profile'
import Wishlist from './Wishlist'
import Cart from './Cart'
import Admin from './Admin'
import SingleProductPage from './SingleProductPage'
import CheckOut from './CheckOut'
import Payment from './Payment'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import EmptyCartPage from './EmptyCartPage'
function AllRoutes() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<EmptyCartPage/>}/>
        <Route path='/kids' element={<EmptyCartPage/>}/>
        <Route path='/home&living' element={<EmptyCartPage/>}/>
        <Route path='/beauty' element={<EmptyCartPage/>}/>
        <Route path='/studio' element={<EmptyCartPage/>}/>
        <Route path='/admin' element={<PrivateRoute><Admin/></PrivateRoute>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/products/:id" element={<SingleProductPage/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/login' element={<Login/>}/>
     </Routes>
  )
}

export default AllRoutes
