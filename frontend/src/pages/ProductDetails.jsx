import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;
  return (
    <div>
      <ProductCard key={id} product={product} />
    </div>
  );
};

export default ProductDetails;
