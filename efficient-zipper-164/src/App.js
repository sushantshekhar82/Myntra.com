import { useEffect } from "react";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import NavbarHome from "./Components/Navbar";
import NavbarRes from "./Components/NavbarRes";

function App() {
  return (
    <div>
      {/* <NavbarHome/> */}
      <NavbarRes />
      <AllRoutes />
    </div>
  );
}

export default App;
