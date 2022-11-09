import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 className="marvel">
          <span> Marvel</span> information portal
        </h1>
      </div>
      <div className="links">
        <Link className="link" to="/">
          <h2>Characters</h2>
        </Link>
        <h2>/</h2>
        <Link className="link" to="comics">
          <h2>Comics</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
