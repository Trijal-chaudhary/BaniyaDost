import React from "react";
import "./OrderProduct.css";
const OrderProduct = () => {
  const products = [
    {
      name: "Sugar 10kg",
      price: "₹500",
      stock: 30,
      category: "Grocery",
      img: "https://5.imimg.com/data5/ECOM/Default/2023/7/321685079/AJ/VD/XB/53656156/1662610030318-sku-0160-0.jpg",
    },
    {
      name: "Basmati Rice 25kg",
      price: "₹2100",
      stock: 15,
      category: "Grocery",
      img: "https://5.imimg.com/data5/SELLER/Default/2022/7/ZF/ER/VK/156548983/basmati-rice.jpg",
    },
    {
      name: "Fortune Sunflower Oil 5L",
      price: "₹780",
      stock: 40,
      category: "Grocery",
      img: "https://m.media-amazon.com/images/I/71KJZqE7wFL.jpg",
    },
  ];

  const addToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div className="productsPageContainer7312">
      <h2 className="productsPageTitle7312">Available Products</h2>

      <div className="productsGrid7312">
        {products.map((product, index) => (
          <div key={index} className="productCard7312">
            <img
              src={product.img}
              alt={product.name}
              className="productImage7312"
            />

            <h3 className="productName7312">{product.name}</h3>

            <p className="productPrice7312">{product.price}</p>

            <p className="productCategory7312">Category: {product.category}</p>

            <p className="productStock7312">Stock: {product.stock}</p>

            <button
              className="addToCartButton7312"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderProduct;
