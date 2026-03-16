import React from "react";
import "./CheckOut.css";
import { ShopOrderProduct } from "../../../services/fetching";
import { useNavigate } from "react-router-dom";
const CheckOut = ({ id, total, productAdded, setRenderCheckOut }) => {
  const navigate = useNavigate();
  const handleOrder = () => {
    ShopOrderProduct({ productAdded, id }).then(() => navigate("/"));
  };
  return (
    <div className="checkoutOverlay5271">
      <div className="checkoutModal5271">
        <div className="checkoutHeader5271">
          <h2>Checkout</h2>
          <button
            onClick={() => setRenderCheckOut(false)}
            className="checkoutCloseBtn5271"
          >
            ✕
          </button>
        </div>

        <div className="checkoutBody5271">
          {productAdded.map((ele) => (
            <div className="checkoutProductCard5271">
              <img
                src={ele.img}
                alt="product"
                className="checkoutProductImg5271"
              />

              <div className="checkoutProductInfo5271">
                <h3>{ele.name}</h3>
                <p>{ele.price}</p>
                <p>Qty: {ele.Qty}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="checkoutFooter5271">
          <div className="checkoutSummaryRow5271">
            <span>Total</span>
            <span>{total}</span>
          </div>

          <button
            onClick={() => handleOrder()}
            className="checkoutOrderBtn5271"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
