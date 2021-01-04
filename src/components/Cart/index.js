import React from "react";
import "./index.css";

const Cart = ({
  product,
  products,
  index,
  setProducts,
  handleRemoveProduct,
}) => {
  return (
    <div className="cart">
      <div className="cart-line">
        <button
          className="add-and-remove-button"
          onClick={() => {
            handleRemoveProduct(index);
          }}
        >
          -
        </button>
        <span>{product.quantity}</span>
        <button
          className="add-and-remove-button"
          onClick={() => {
            //copy created
            const newProducts = [...products];
            //copy updated
            newProducts[index].quantity++;
            // state updated
            setProducts(newProducts);
          }}
        >
          +
        </button>
        <span>{product.title}</span>
      </div>
    </div>
  );
};

export default Cart;
