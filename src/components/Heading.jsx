import React, { useState } from "react";

function Heading() {
  const [mouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div>
      <header className="header-top">
        <img className="logo-img" src="logo.svg" alt="logo" />
        <span className="menu-pages work">HOW WE WORK</span>
        <span className="menu-pages blog">BLOG</span>
        <span className="menu-pages account">ACCOUNT</span>
        <span
          style={{
            backgroundColor: mouseOver && "black",
            color: mouseOver && "white"
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="menu-pages"
        >
          VIEW PLANS
        </span>
      </header>
    </div>
  );
}

export default Heading;
