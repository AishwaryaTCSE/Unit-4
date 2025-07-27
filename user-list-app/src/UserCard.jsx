import React from "react";

const UserCard = ({ name, email, age }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{name}</h3>
      <p>📧 {email}</p>
      <p>🎂 Age: {age}</p>
    </div>
  );
};

export default UserCard;
