import React from "react";
import { Link } from "react-router-dom";

import SweetUI from "../../images/candy.svg";

import "./header.css";
/*
  Header component should trigger the menu
  on click we need to show / hide the sidebar
  the state is maintained in the APP component
*/
const Header = (props) => {
  const { menuState, setMenuState } = props;
  return (
    <header className="site-header">
      <div className="brand-name">
        <Link to="/">
          <span>sweet ui</span>
        </Link>
      </div>
      <div className="my-menu-bar">
        <button
          className={`menu-trigger ${menuState ? "menu-close" : ""}`}
          onClick={() => setMenuState(!menuState)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="brand-icon">
        <Link to="/">
          <div className="icon">
            <img src={SweetUI} alt="Sweet UI" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
