import React, { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from "react-router-dom";
import "./menu.css"
import { AuthContext } from './Context';
import { useContext } from "react";


const Menu = () => {
   const { handleLogout,username } = useContext(AuthContext);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleBuyClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const logout=()=>{
     const response=handleLogout();
     console.log(response);
  }

  const firstLaterOfUsername=username[0].toUpperCase();

  const menuClass = "menu";
  const activeMenuClass = "menu selected";


  return (
    <div className="menu-container">
      <img src="logo.png" alt="" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={()=>handleMenuClick(0)}>
              <p className={selectedMenu===0?activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={()=>handleMenuClick(1)}>
              {" "}
              <p className={selectedMenu===1?activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={()=>handleMenuClick(2)}>
              {" "}
              <p className={selectedMenu===2?activeMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={()=>handleMenuClick(3)}>
              {" "}
              <p className={selectedMenu===3?activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={()=>handleMenuClick(4)}>
              <p className={selectedMenu===4?activeMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={()=>handleMenuClick(5)}>
              {" "}
              <p className={selectedMenu===5?activeMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleBuyClick}>
          <div className="avatar"
          >{firstLaterOfUsername}</div>
          <p className="username">{username.toUpperCase()}</p>
        </div>
        {/* {isProfileDropdownOpen} */}
        {isProfileDropdownOpen && (
        <div className="ProfileDropDown">
          <div onClick={logout} style={{display:"flex", gap:"10px"}}><LogoutIcon/>Logout</div>
        </div>
      )}
      </div>
    </div>
  );
};
export default Menu;
