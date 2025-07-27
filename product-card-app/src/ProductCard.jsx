import React from "react";

const ProductCard = ({ name, price, image, discount }) => {
  return (
    <div
      style={{
        width: "220px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <h3>{name}</h3>
      <p>💰 ₹{price}</p>
      {discount && (
        <div
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "5px",
            borderRadius: "5px",
            display: "inline-block",
            fontSize: "14px",
          }}
        >
          🎉 {discount}% OFF
        </div>
      )}
    </div>
  );
};

export default ProductCard;
