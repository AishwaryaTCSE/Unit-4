
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("green");

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === "green" ? "yellow" : "green"));
  };

  const buttonStyle = {
    backgroundColor: color,
    color: color === "green" ? "white" : "black", // contrast text
    border: "none",
    padding: "15px 30px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    marginBottom: "20px"
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <button style={buttonStyle} onClick={toggleColor}>
        Color: {color.charAt(0).toUpperCase() + color.slice(1)}
      </button>
      <p>Current Color: {color.charAt(0).toUpperCase() + color.slice(1)}</p>
    </div>
  );
}

export default App;
