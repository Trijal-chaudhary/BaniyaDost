import React, { useState } from "react";
import "./AddProduct.css";
import { AddProductapi } from "../../../services/fetching";
const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    img: "",
  });

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddProductapi(productData);
  };

  return (
    <div className="addProductContainer9032">
      <div className="addProductCard9032">
        <h2 className="addProductTitle9032">Add New Product</h2>

        <form className="addProductForm9032" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="addProductInput9032"
            onChange={handleChange}
          />

          <input
            type="text"
            name="price"
            placeholder="Price (₹)"
            className="addProductInput9032"
            onChange={handleChange}
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            className="addProductInput9032"
            onChange={handleChange}
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            className="addProductInput9032"
            onChange={handleChange}
          />

          <input
            type="text"
            name="img"
            placeholder="Image URL"
            className="addProductInput9032"
            onChange={handleChange}
          />

          <button className="addProductButton9032">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
