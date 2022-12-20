import React from 'react'
import { useContext } from 'react';
import { AppContext } from './AppContextProvider';
import { Navigate } from 'react-router-dom';
function PrivateRoute({children}) {
   const { auth,login,authUser,loginUser } = useContext(AppContext);
 
 
  if (auth===false || authUser===false ) {
    return <Navigate to="/login" />;
  }else if(auth===true || authUser===true){
    return children;
  }
 
 
}

export default PrivateRoute
