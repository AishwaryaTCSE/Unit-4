
import React from "react";

const Navbar = ({ activePage, onNavClick }) => {
  const navStyle = {
    display: "flex",
    gap: "30px",
    padding: "15px",
    backgroundColor: "#f2f2f2",
    borderBottom: "2px solid #ccc",
    fontSize: "18px",
  };

  const getStyle = (page) => ({
    color: activePage === page ? "blue" : "black",
    fontWeight: activePage === page ? "bold" : "normal",
    cursor: "pointer",
  });

  return (
    <nav style={navStyle}>
      <span onClick={() => onNavClick("home")} style={getStyle("home")}>Home</span>
      <span onClick={() => onNavClick("about")} style={getStyle("about")}>About</span>
      <span onClick={() => onNavClick("contact")} style={getStyle("contact")}>Contact</span>
    </nav>
  );
};

export default Navbar;
