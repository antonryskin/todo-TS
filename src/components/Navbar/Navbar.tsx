import React from "react";

function Navbar(props:any) {
  return (
    <nav>
      <div className="nav-wrapper teal lighten-1 px1">
        <a href="/" className="brand-logo">
          Todo
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">Todo list</a>
          </li>
          <li>
            <a href="/">Info</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
