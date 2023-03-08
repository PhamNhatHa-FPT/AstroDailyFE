import React, { useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Link } from "react-router-dom";
import AppButton from "../../common/button";
import { useIsHidden } from "../../hooks/useIsHidden";
import "./header.css";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../../configs/firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { postLoginSuccess } from "../../store/actions/user.action";
import Menu from "./menu";
import MenuLearnAstrology from "./menuLearn";
function Header() {
  const dispatch = useDispatch();
  const { hidden, handleClick } = useIsHidden();
  const {user} = useSelector((state)=> state.user)
  const isActive = (path) => {
    if (window.location.pathname === path) return "current-menu-item";
    else return "";
  };
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser && localStorage.setItem("token", JSON.stringify(currentUser.accessToken));
    });
    return () => {
      unsubscribe();
    };
  // eslint-disable-next-line
  }, []);

  const handleSignOut = () => {
    signOut(auth);
    dispatch(postLoginSuccess(null));
  };

  return (
    <header
      id="main-header"
      // className="et-fixed-header"
      style={{ top: 0 }}
    >
      <div className="container clearfix et_menu_container">
        <div className="title_container">
          <h1>
            <Link
              to="/"
              style={{ color: "#fe7f5c", fontFamily: "Philosopher" }}
            >
              Astrologer Home
            </Link>
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
              <li className={isActive("/pricing")}>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className={isActive("/contact")}>
                <Link to="/contact">Contact</Link>
              </li>
              <li className={isActive("/about")}>
                <Link to="/about">About</Link>
              </li>
              <li className={isActive("/landing")}>
                <Link to="/landing">Landing</Link>
              </li>
              <li className={isActive("/blog")}>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
          <MenuLearnAstrology />
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
              htmlType="a"
              onClick={googleSignIn}
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
      <div className="et_search_outer">
        <div className="container et_search_form_container">
          <form
            role="search"
            method="get"
            className="et-search-form"
            action="https://www.elegantthemes.com/layouts/"
          >
            <input
              type="search"
              className="et-search-field"
              placeholder="Search …"
              defaultValue
              name="s"
            />
          </form>
          <span className="et_close_search_field" />
        </div>
      </div>
    </header>
  );
}

export default Header;
