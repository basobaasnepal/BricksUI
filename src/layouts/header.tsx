import React from "react";
import "../sass/layouts/header.scss";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">Bricks-UI</div>
        <div className="nav">
          <div className="nav-item">Design</div>
          <div className="nav-item">Docs</div>
          <div className="nav-item">Component</div>
          <div className="nav-item">Resources</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
