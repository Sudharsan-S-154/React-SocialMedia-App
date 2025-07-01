import React, { useContext } from "react";
import { FaMobile } from "react-icons/fa";
import { FaTablet } from "react-icons/fa6";
import { MdDesktopMac } from "react-icons/md";
import DataContext from "./Context/DataContext";

function Header() {
  const {height,width} = useContext(DataContext)
  return (
    <header className="header">
      <h2> Social-Media App </h2>
      {
        width<600 ? <FaMobile className="icons" /> : width <1000 ? <FaTablet className="icons"/> : <MdDesktopMac className="icons"/>
      }
    </header>
  );
}

export default Header;
