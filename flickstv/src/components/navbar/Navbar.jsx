import { ArrowDropDown, Notifications, Search, SearchOutlined } from "@material-ui/icons";
import React from 'react'
import './Navbar.scss';
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserContext";
import { logout } from "../../context/userContext/UserActions";

const Navbar = () => {

  const [isScroll, setIsScroll] = useState(false);
  const { dispatch } = useContext(UserContext);
  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);

    return () => (window.onscroll = null);
  };

  return (

    <div className={isScroll ? "navbar scrolledst" : "navbar"}>
      <div className="container">

        <div className="leftside">
          <img
            className="logo"
            src="assets/logo.png"
            alt=""
          />
          <Link to="/" className="link"><span>Home</span> </Link>
          <Link to="/movies" className="link"><span>Movies</span></Link>

          <Link to="/series" className="link"><span>Series</span></Link>
        </div>
        
        <div className="rightside">
          <img src="assets/account_pic.png" alt="" />

          <div className="profile-options">
            <ArrowDropDown className="icons" />
            <div className="optioncls">
              <span>Profile</span>
              <span onClick={
                () => dispatch(logout())
              }
              >Logout</span>
            </div>

          </div>


        </div>
      </div>

    </div>

  )
}

export default Navbar