import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Profile", path: "/profile" },
    { label: "Store", path: "/store" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        width: "100%"
      }}
    >
      <NavBar links={navLinks} />

      <main
        style={{
          flexGrow: 1,
          margin: "20px auto",
          maxWidth: 900,
          width: "95%",
        }}
      >
        {children}
      </main>

      <footer
        style={{
          backgroundColor: "#999999",
          color: "black",
          padding: "10px 20px",
          textAlign: "right",
          fontSize: 14,
          borderRadius: "0 0 6px 6px",
        }}
      >
        About | Petstore LLC, 2026
      </footer>
    </div>
  );
};

export default Layout;
