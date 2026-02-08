import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ links = [] }) => {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        backgroundColor: "#999999",
        padding: "10px 20px",
        display: "flex",
        gap: 20,
        zIndex: 1000,
        boxSizing: "border-box",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          style={({ isActive }) => ({
            color: "black",
            textDecoration: "none",
            padding: "5px 12px",
            borderRadius: 4,
            backgroundColor: isActive ? "#666" : "transparent",
            transition: "background-color 0.2s",
          })}
          onMouseEnter={(e) => {
            if (e.target.style.backgroundColor === "transparent") {
              e.target.style.backgroundColor = "#bbb";
            }
          }}
          onMouseLeave={(e) => {
            if (e.target.style.backgroundColor === "#bbb") {
              e.target.style.backgroundColor = "transparent";
            }
            else if (!e.isActive) {
                e.target.style.backgroundColor = "transparent"
            }
          }}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
