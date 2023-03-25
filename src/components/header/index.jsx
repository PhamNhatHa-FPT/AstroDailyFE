/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import {
  signOut,
} from "firebase/auth";
import { FcIdea } from "react-icons/fc";
import { Link } from "react-router-dom";
import AppButton from "../../common/button";
import { useIsHidden } from "../../hooks/useIsHidden";
import "./header.css";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../../configs/firebase.configs";
import { useDispatch, useSelector } from "react-redux";
import { postLoginSuccess } from "../../store/actions/user.action";
import Menu from "./menu";
import MenuLearnAstrology from "./menuLearn";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
// import Weather from "./weather";
function Header() {
  const dispatch = useDispatch();
  const { hidden, handleClick } = useIsHidden();
  const {user} = useSelector((state)=> state.user)
  const isActive = (path) => {
    if (window.location.pathname === path) return "current-menu-item";
    else return "";
  };
   const [quote, setQuote] = useState("");
  const handleSignOut = () => {
    signOut(auth);
    dispatch(postLoginSuccess(null));
    localStorage.removeItem("token");
    localStorage.removeItem("userObject");
  };
  useEffect(() => {
     axios({
       method: "GET",
       url: `${process.env.REACT_APP_API_URL}/Quote/random`,
     })
       .then((res) => {
         setQuote(res.data.script);
       })
       .catch((err) => {
         console.error(err);
       });
  }, []);
  return (
    <header
      id="main-header"
      // className="et-fixed-header"
      style={{ top: 0 }}
    >
      <div
        className="container clearfix et_menu_container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="title_container" style={{ display: "contents" }}>
          <h1>
            <Link
              to="/"
              style={{ color: "#fe7f5c", fontFamily: "Philosopher" }}
            >
              Astrologer Home
            </Link>
          </h1>
          <h1 style={{ width: "50%", display: "flex" }}>
            <FcIdea />{" "}
            <marquee style={{ color: "#fe7f5c", fontFamily: "Philosopher" }}>
              {quote}
            </marquee>
          </h1>
        </div>

        <div id="et-top-navigation">
          <nav id="top-menu-nav" className="navigation">
            <ul id="top-menu" className="nav">
              <li className={isActive("/")}>
                <Link to="/" aria-current="page">
                  Home
                </Link>
              </li>
              <li className={isActive("/self")}>
                <Link to="/self">Self</Link>
              </li>
              {/* <li className={isActive("/landing")}>
                <Link to="/landing">Landing</Link>
              </li> */}
            </ul>
          </nav>
          <MenuLearnAstrology />
          {/* <Weather/> */}
          {user ? (
            <>
              <Menu handleLogout={handleSignOut} user={user} />
              {/* {user.displayName}
              <button
                onClick={handleSignOut}
                className="border py-2 px-5 mt-10"
              >
                Logout
              </button> */}
            </>
          ) : (
            <AppButton
              children="Login"
              btnType="button_2"
              Icon={FaGoogle}
              isSizeLarge={true}
              htmlType="link"
              url="/login"
            />
          )}

          <div iv id="et_mobile_nav_menu">
            <div className={`mobile_nav ${hidden ? "opened" : "closed"}`}>
              <span className="select_page">Select Page</span>
              <span
                className="mobile_menu_bar mobile_menu_bar_toggle"
                onClick={handleClick}
              />
              <ul
                id="mobile_menu"
                className="et_mobile_menu"
                style={{ display: `${hidden ? "block" : "none"}` }}
              >
                <li className="current-menu-item">
                  <Link to="/" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="current-menu-item">
                  <Link to="/services">Services</Link>
                </li>
                <li className="current-menu-item">
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li className="current-menu-item">
                  <Link to="contact">Contact</Link>
                </li>
                <li className="current-menu-item">
                  <Link to="about">About</Link>
                </li>
                <li className="current-menu-item">
                  <Link to="/landing">Landing</Link>
                </li>
                <li className="current-menu-item">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
