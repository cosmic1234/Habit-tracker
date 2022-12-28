import React from "react";
import { Link } from "react-router-dom";
import Class from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={Class.nav}>
      <h1>Habit Tracker</h1>
      <div>
        <Link className={Class.link} to={"/"}>
          Home
        </Link>
        <Link className={Class.link} to={"/dashboard"}>
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
