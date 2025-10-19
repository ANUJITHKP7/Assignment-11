import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex space-x-6 justify-center">
        <NavLink to="/" className={({ isActive }) => (isActive ? "font-bold underline" : "")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "font-bold underline" : "")}>
          About
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => (isActive ? "font-bold underline" : "")}>
          Users
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
