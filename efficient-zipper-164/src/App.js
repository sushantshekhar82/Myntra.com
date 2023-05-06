import { useEffect, useState } from "react";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import NavbarHome from "./Components/Navbar";
import NavbarRes from "./Components/NavbarRes";


function App() {


  return (
    <div>
      {/* <NavbarHome/> */}

     
       <NavbarRes />
      <div style={{ marginTop: "68px" }}>
        <AllRoutes /> 
      </div>
    </div>
  );
}

export default App;
