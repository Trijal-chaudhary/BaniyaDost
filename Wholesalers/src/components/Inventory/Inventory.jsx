import React, { useEffect, useState } from "react";
import "./Inventory.css";
import { wholeIsLogged } from "../../services/fetching";
import { useNavigate } from "react-router-dom";
const Inventory = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  // const products = [
  //   {
  //     name: "Basmati Rice 25kg",
  //     price: "₹1500",
  //     stock: 120,
  //     category: "Grains",
  //     img: "https://5.imimg.com/data5/SELLER/Default/2022/1/WX/OF/AJ/142173535/25kg-titanium-basmati-rice.jpg",
  //   },
  //   {
  //     name: "Cooking Oil 5L",
  //     price: "₹850",
  //     stock: 60,
  //     category: "Oil",
  //     img: "https://mysunpure.in/cdn/shop/files/Untitleddesign_13.png?v=1685704325",
  //   },
  //   {
  //     name: "Sugar 10kg",
  //     price: "₹500",
  //     stock: 30,
  //     category: "Grocery",
  //     img: "https://5.imimg.com/data5/ECOM/Default/2023/7/321685079/AJ/VD/XB/53656156/1662610030318-sku-0160-0.jpg",
  //   },
  //   {
  //     name: "Wheat Flour 20kg",
  //     price: "₹720",
  //     stock: 45,
  //     category: "Grains",
  //     img: "https://5.imimg.com/data5/SELLER/Default/2023/9/345640771/YF/BC/OF/42057331/20-kg-paro-wheat-flour-500x500.jpeg",
  //   },
  // ];
  useEffect(() => {
    wholeIsLogged("data").then((data) => {
      // console.log(data.details.Products);
      setProducts(data.details.Products);
    });
  }, []);
  return (
    <div className="productsContainer7713">
      <div className="productsHeader7713">
        <h2>Products</h2>
        <button
          onClick={() => navigate("/addproduct")}
          className="addProductBtn7713"
        >
          + Add Product
        </button>
      </div>

      <div className="productsGrid7713">
        {products?.map((product, index) => (
          <div className="productCard7713" key={index}>
            <img src={product.img} alt="product" className="productImage7713" />

            <h3 className="productName7713">{product.name}</h3>

            <p className="productCategory7713">{product.category}</p>

            <div className="productInfo7713">
              <span>Price: {product.price}</span>
              <span>Stock: {product.stock}</span>
            </div>

            <button className="editBtn7713">Edit Product</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
