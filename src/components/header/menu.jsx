import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AppButton from "../../common/button";
import "./header.css";
import { useDetectOutsideClick } from "./../../hooks/useOutsideClick";
function Menu({ handleLogout, user }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div
      className="dropdown-container header-dropdown-menu"
      ref={dropdownRef}
      onClick={onClick}
    >
      <AppButton
        children={user.displayName}
        btnType="button_img"
        img={user.photoUrl}
        isSizeLarge={true}
        htmlType="a"
      />
      <nav className={`dropdown-menu ${isActive ? "open" : "closed"}`}>
        <ul>
          <li className="list-item">
            <Link className="item" to={`/profile/${user.displayName}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                />
              </svg>
              <span>Profile</span>
            </Link>
          </li>
          <li className="list-item">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfbaOoGw82eXhX1la80_NM-P9Pv0lzxE1nUF85lp89s7G7vOw/viewform?usp=sf_link"
              className="item"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z"
                />
              </svg>
              <span>Send feedback</span>
            </a>
          </li>
          <li className="list-item">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1TTrJmPFg739ttyqEhK3tr3NGH1tHUX9Usg1NnNlHdXA7SQ/viewform?usp=sf_link"
              className="item item--help"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M3.161 4.469a6.5 6.5 0 0 1 8.84-.328 6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101-7.764-7.791a6.5 6.5 0 0 1 .34-8.826zm1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.304-3.535-3.535-1.06 1.06a3 3 0 1 1-4.244-4.242l2.102-2.103a4.501 4.501 0 0 0-5.837.189l-.154.146zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078 1.768-1.768z"
                />
              </svg>
              <span>We need your help</span>
            </a>
          </li>
          <li className="list-item list-item--separator" />
          <li className="list-item">
            <button className="item" type="submit" onClick={handleLogout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"
                />
              </svg>
              <span>Log out</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
