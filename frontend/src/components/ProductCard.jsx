import React from "react";
import { Link, redirect } from "react-router-dom";
import { deleteProductById } from "../services/productService";

const ProductCard = ({ product }) => {

    //TO-DO: Fix this function
  const handleDelete = () => {
    deleteProductById(product._id).then((data) => alert(`Deleted: ${data}`));
  };
  return (
    <div>
      <h3>{product.name}</h3>
      <img
        src={product.img_url}
        alt="product image"
        style={{ width: "25%", height: "50%" }}
      />
      <p>{product.price}</p>
      <Link to={`/product-details/${product._id}`}> Show Details </Link>

      {/** TO DO: build delete functionality */} 
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductCard;
