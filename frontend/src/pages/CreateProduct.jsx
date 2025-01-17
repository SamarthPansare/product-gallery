import React, { useEffect, useState } from "react";
import { createProduct } from "../services/productService";

const CreateProduct = () => {
  const [form, setForm] = useState({ name: "", price: 0, img_url: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
      createProduct(form).then((data) => alert(`Product created ${data}`));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ height:"50vh"}} >
      <form style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", height:"100%" }}>
        <label>
          Name of the product:
          <input type="text" name="name" onChange={handleChange} required />
        </label>
        <label>
          price of the product:
          <input type="number" name="price" onChange={handleChange} required />
        </label>
        <label>
          Image url of the product:
          <input type="text" name="img_url" onChange={handleChange} required />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
