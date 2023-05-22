import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { AppContext } from './AppContextProvider';
import { Navigate, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

function PrivateRoute({children}) {
  
  const navigate=useNavigate()
   const { auth,login,authUser,loginUser } = useContext(AppContext);
 var token;
 token=(localStorage.getItem("token"))
   const toast = useToast()
  useEffect(()=>{
   token=(localStorage.getItem("token"))
    
  },[])
   console.log(token)
    if(token==null|| token==undefined){
        toast({
            title: 'Please Login First',
            
            status: 'warning',
            duration: 2000,
            isClosable: true,
          })
        return <Navigate to="/login"/>
    }else{
      return children
    }
   
 
 
}

export default PrivateRoute
