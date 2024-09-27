import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header-parent">
      <div className="container">
        <div className="brand">
          <h4 className="m-0">Oakberry </h4>
          <p>Real Estate Agency</p>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Property</li>
            <li>Agents</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </nav>
        <button>Login</button>
      </div>
    </header>
  );
}

export default Header;
