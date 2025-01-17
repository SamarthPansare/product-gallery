import React, { useState, useEffect } from "react";

import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <>
      <h2>Product Gallery</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ShowProducts;
