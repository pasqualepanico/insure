import React from "react";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOptions from "./MenuOptions";

function MobileNavBar() {
  const [isPressed, setIsPressed] = React.useState(false);

  function showMenu(event) {
    if (event.target) {
      setIsPressed(true);
    }
    setTimeout(setIsPressed, 5000);
  }

  return (
    <div>
      <Toolbar>
        <img className="logo-mobile-style" src="logo.svg" alt="logo-insure" />
        <IconButton
          className="hamburger"
          onClick={showMenu}
          size="large"
          edge="start"
          color="default"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon className="stlyling-hamburger"></MenuIcon>
          {isPressed && <MenuOptions />}
        </IconButton>
      </Toolbar>
    </div>
  );
}

export default MobileNavBar;
