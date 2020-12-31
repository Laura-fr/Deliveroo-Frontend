import React from "react";
import "./index.css";

const Basket = ({ counter }) => {
  return (
    <div className="basket">
      <button>Valider mon panier</button>
      <div>
        <span>votre panier est vide</span>
      </div>
    </div>
  );
};

export default Basket;
