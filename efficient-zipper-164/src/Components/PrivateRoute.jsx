import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { AppContext } from './AppContextProvider';
import { Navigate, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
let token=localStorage.getItem("token")
function PrivateRoute({children}) {
  
  const navigate=useNavigate()
   const { auth,login,authUser,loginUser } = useContext(AppContext);
 
 
   const toast = useToast()
  
   
    if(token==null){
        toast({
            title: 'Please Login First',
            
            status: 'warning',
            duration: 2000,
            isClosable: true,
          })
        return <Navigate to="/login"/>
    }
    return children
 
 
}

export default PrivateRoute
