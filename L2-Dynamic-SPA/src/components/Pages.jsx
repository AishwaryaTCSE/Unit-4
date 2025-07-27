
import React from "react";

const Pages = ({ activePage }) => {
  const pageStyle = {
    padding: "40px",
    fontSize: "28px",
    textAlign: "center",
  };

  if (activePage === "home") {
    return <div style={{ ...pageStyle, backgroundColor: "#e3f6f5" }}>🏠 Welcome to Home</div>;
  } else if (activePage === "about") {
    return <div style={{ ...pageStyle, backgroundColor: "#fcefe3" }}>📘 About Us</div>;
  } else if (activePage === "contact") {
    return <div style={{ ...pageStyle, backgroundColor: "#ffe5ec" }}>📞 Contact Us</div>;
  } else {
    return <div style={pageStyle}>404 Page Not Found</div>;
  }
};

export default Pages;
