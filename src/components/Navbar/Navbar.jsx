import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faBell,
  faCartShopping,
  faCompass,
  faCaretDown,
  faBars,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import search_icon from "../../assets/search.png";

const Navbar = () => {

const [navToggle , setNavToggle] = useState(false);

const navopen = ()=>{
  navToggle ? setNavToggle(false) : setNavToggle(true)
}

  return (
    <>
      <div>
        <nav className="container">
          <div className="first">
            <div>
              <div className="logo">
                <h1>h</h1>
              </div>
            </div>
            <div className="text">
              <div className="text-h">
                <h1 className="blue">hobby</h1> &nbsp;
                <h1 className="purple">cue</h1>
              </div>
              <div className="text-p">
                <p>Your hobby, Your Community</p>
              </div>
            </div>

            <div className="search-bar">
              <form className="form" action="">
                <input
                  className="search"
                  type="search"
                  placeholder="Search here"
                  aria-label="Search"
                />
                <button className="btn" type="submit">
                  <img className="img" src={search_icon} alt="" />
                </button>
              </form>
            </div>
            <div className={`toggle-navbar ${navToggle ? "hide" : ""}`} onClick={navopen}>
            <FontAwesomeIcon className="toggle-icon" onClick={navopen} icon={faBars} />
            </div>
          </div>


          <div className={`first1 ${navToggle ? " " : "nav-hide"}`}>
            <div className="close-nav">
            <FontAwesomeIcon className="toggle-icon-close" icon={faXmark} />
            </div>
            <button className="dropdown">
              <FontAwesomeIcon className="dropdown-icon-clr" icon={faCompass} />
              &nbsp; Explore{" "}
              <FontAwesomeIcon
                className="dropdown-icon-clr"
                icon={faCaretDown}
              />
            </button>

            <button className="dropdown">
              <FontAwesomeIcon className="dropdown-icon-clr" icon={faCompass} />
              &nbsp; Hobbies
              <FontAwesomeIcon
                className="dropdown-icon-clr"
                icon={faCaretDown}
              />
            </button>

            <FontAwesomeIcon className="img1" icon={faBell} />
            <FontAwesomeIcon className="img1" icon={faBookmark} />
            <FontAwesomeIcon className="img1" icon={faCartShopping} />
            <button className="btn-br">Sign in</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
