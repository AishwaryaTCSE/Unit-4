import React, { useState } from "react";
import ProductCard from "./ProductCard";

const App = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    discount: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};

    if (!form.name.trim()) {
      errs.name = "Name is required.";
    }

    if (!form.price || isNaN(form.price) || Number(form.price) <= 0) {
      errs.price = "Price must be a positive number.";
    }

    if (!form.image.includes("http")) {
      errs.image = "Image must be a valid URL.";
    }

    if (
      form.discount !== "" &&
      (isNaN(form.discount) ||
        Number(form.discount) < 0 ||
        Number(form.discount) > 100)
    ) {
      errs.discount = "Discount must be between 0 and 100.";
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setProducts([...products, form]);
      setForm({ name: "", price: "", image: "", discount: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🛍️ Add New Product</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.name}</div>
        </div>

        <div>
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.price}</div>
        </div>

        <div>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.image}</div>
        </div>

        <div>
          <input
            type="text"
            name="discount"
            placeholder="Discount % (Optional)"
            value={form.discount}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.discount}</div>
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Add Product
        </button>
      </form>

      <h2>🧾 Product Cards</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((p, index) => (
          <ProductCard
            key={index}
            name={p.name}
            price={p.price}
            image={p.image}
            discount={p.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
