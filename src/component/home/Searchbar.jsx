import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChatAir } from "@fortawesome/fontawesome-free-solid";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsChatLeftText,BsSearch } from "react-icons/bs";
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./search.css";
import Sidebar from "./Sidebar";

const Searchbar = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center p-1">
    <div className="d-flex filter-box p-0 rounded search-bar w-90 rounded" style={{height: "45px"}}>
      {/* <FontAwesomeIcon icon={faBars} className="search-icons" size="2x" /> */}
     <Sidebar />
      <input
        type="text"
        className="w-100 search-input ps-1 pe-0 outline-none"
        placeholder="Farhan"
      />
      <BsSearch
        color="#E70074"
        size="23"
        className=""
      />
    </div>
     <AiOutlineShoppingCart  size="30" color="#fff" />
     <BsChatLeftText size="28" color="#fff" />
  </div>
  );
};

export default Searchbar;