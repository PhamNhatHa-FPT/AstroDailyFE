import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./header.css";
import { useDetectOutsideClick } from "./../../hooks/useOutsideClick";
function MenuLearnAstrology() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div
      className="dropdown-container header-dropdown-menu"
      ref={dropdownRef}
      onClick={onClick}
    >
      <Link
        to="#"
        style={{ color: "rgba(0, 0, 0, 0.6)", paddingRight: "22px" }}
      >
        Learn Astrology
      </Link>
      <nav
        className={`dropdown-menu ${isActive ? "open" : "closed"}`}
        style={{ top: "35px" }}
      >
        <ul>
          <li className="list-item">
            <Link to="/what-is-astrology" className="item">
              <FaLongArrowAltRight />
              <span>What is astrology?</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/natal-char" className="item">
              <FaLongArrowAltRight />
              <span>Natal chart</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/zodiac-sun-signs" className="item">
              <FaLongArrowAltRight />
              <span>Zodiac sun signs</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/rising-sign" className="item">
              <FaLongArrowAltRight />
              <span>Rising sign</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/houses" className="item">
              <FaLongArrowAltRight />
              <span>Houses</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/house-systems" className="item">
              <FaLongArrowAltRight />
              <span>House systems</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/aspects" className="item">
              <FaLongArrowAltRight />
              <span>Aspects</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/transits-orbs" className="item">
              <FaLongArrowAltRight />
              <span>Transits & orbs</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuLearnAstrology;
