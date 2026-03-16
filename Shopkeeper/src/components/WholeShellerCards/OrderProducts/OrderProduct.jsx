import React from "react";
import "./OrderProduct.css";
import { useEffect } from "react";
import { wholeByIdForProduct } from "../../../services/fetching";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CheckOut from "../CheckOut/CheckOut";
const OrderProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [renderCheckOut, setRenderCheckOut] = useState(false);
  const [productAdded, setProductAdded] = useState([]);
  const [total, setTotal] = useState(0);
  // const products = [
  //   {
  //     name: "Sugar 10kg",
  //     price: "₹500",
  //     stock: 30,
  //     category: "Grocery",
  //     img: "https://5.imimg.com/data5/ECOM/Default/2023/7/321685079/AJ/VD/XB/53656156/1662610030318-sku-0160-0.jpg",
  //   },
  //   {
  //     name: "Basmati Rice 25kg",
  //     price: "₹2100",
  //     stock: 15,
  //     category: "Grocery",
  //     img: "https://5.imimg.com/data5/SELLER/Default/2022/7/ZF/ER/VK/156548983/basmati-rice.jpg",
  //   },
  //   {
  //     name: "Fortune Sunflower Oil 5L",
  //     price: "₹780",
  //     stock: 40,
  //     category: "Grocery",
  //     img: "https://m.media-amazon.com/images/I/71KJZqE7wFL.jpg",
  //   },
  // ];
  useEffect(() => {
    wholeByIdForProduct(id).then((ele) => {
      // console.log(ele.details);
      setProducts(ele.details.Products);
    });
  }, []);
  const handelAddToCart = (what, idx) => {
    const updated = [...products];
    if (what === "add") {
      if (!updated[idx].Qty) {
        updated[idx].Qty = 1;
      } else {
        if (updated[idx].Qty < updated[idx].stock) {
          updated[idx].Qty += 1;
        }
      }
    } else {
      if (updated[idx].Qty > 0) {
        updated[idx].Qty -= 1;
      }
    }
    const temp = [];
    let sum = 0;
    products.map((ele, idx) => {
      if (ele.Qty && ele.Qty > 0) {
        temp.push(ele);
        sum += ele.Qty * parseInt(ele.price.replace("₹", ""));
      }
    });
    setProductAdded(temp);
    setTotal(sum);
    setProducts(updated);
  };
  return (
    <div className="productsPageContainer7312">
      {renderCheckOut && (
        <CheckOut
          total={total}
          productAdded={productAdded}
          setRenderCheckOut={setRenderCheckOut}
        />
      )}

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
            {!product.Qty ? (
              <button
                className="addToCartButton7312"
                onClick={() => handelAddToCart("add", index)}
              >
                Add to Cart
              </button>
            ) : (
              <div className="addorsub">
                <div
                  onClick={() => handelAddToCart("sub", index)}
                  className="subfromcart"
                >
                  -
                </div>
                <p>{product?.Qty}</p>
                <div
                  onClick={() => handelAddToCart("add", index)}
                  className="subfromcart"
                >
                  +
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <svg
        className="CartSvgProduct"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        onClick={() => setRenderCheckOut(true)}
      >
        <path d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
      </svg>
    </div>
  );
};

export default OrderProduct;
