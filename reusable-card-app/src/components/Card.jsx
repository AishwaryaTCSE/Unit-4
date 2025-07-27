import React from "react";

const Card = ({ title, children }) => {
  const cardStyle = {
    border: "2px solid #333",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    backgroundColor: "#f8f8f8",
    boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
  };

  return (
    <div style={cardStyle}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
