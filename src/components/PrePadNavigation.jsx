import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../assets/images/prepad.svg";
export const PrePadNavigation = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div id="prepad-navigation">
      <div>
        <img alt="dfnx logo" src={LOGO} width="100" height="35" className="logo"></img>
      </div>
      <div className="navigation-links">
        <NavLink to="/" onClick={handleActive}>
          List
        </NavLink>
        <NavLink to="/create" onClick={handleActive}>
          Create
        </NavLink>
      </div>
    </div>
  );
};
