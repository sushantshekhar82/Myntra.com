import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AppContext=createContext();
function AppContextProvider({children}) {
  
    const [length,setLength]=useState(0)

    const Length=(num)=>{
      setLength(Math.abs(num+1))
    }
  console.log(length)
    return (
    <AppContext.Provider value={{length,Length}}>{children}</AppContext.Provider>
  )
}

export default AppContextProvider
