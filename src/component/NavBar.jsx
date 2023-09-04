import React, { useState } from "react";
import "../style/navbrar.css";
import Item from "./Item.jsx";
const data = [
  { e: "home", value: "Home" },
  { e: "about", value: "about" },
  { e: "skills", value: "skills" },
  { e: "work", value: "my work" },
  { e: "contact", value: "contact me" },
];
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav shadow">
      <div className="container">
        <div className="logo">
          <a href="#home">Osama-Dev</a>
        </div>
        <ul className={`navList ${open ? "showList" : ""}`} id="navList">
          {data.map((e, indx) => (
            <Item setOpen={setOpen} e={e.e} value={e.value} key={indx} />
          ))}
        </ul>
        <div className="toggleButton ">
          <button
            className={`toggleIcon ${open ? "active" : ""}`}
            id="toggleButton"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
