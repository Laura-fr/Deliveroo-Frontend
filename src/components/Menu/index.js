import React, { useState } from "react";
import "./index.css";
import Category from "../Category";
import Cart from "../Cart";

const Menu = ({ data }) => {
  const [products, setProducts] = useState([]);

  const handleRemoveProduct = (index) => {
    // Créer une copie
    const newProducts = [...products];
    if (newProducts[index].quantity === 1) {
      // Supprimer l'élément du tableau
      newProducts.splice(index, 1);
      setProducts(newProducts);
    } else {
      //Modifier la copie
      newProducts[index].quantity--;
      // Mettre à jour le state
      setProducts(newProducts);
    }
  };

  let total = 2.5;
  for (let i = 0; i < products.length; i++) {
    total += products[i].quantity * products[i].price;
  }
  return (
    <div className="menu-container">
      <div>
        {data.map((category, index) => {
          return (
            <div key={index} className="category">
              <Category
                data={category}
                products={products}
                setProducts={setProducts}
              />
            </div>
          );
        })}
      </div>
      <div>
        <div className="cart-container">
          <button className="cart-button">Valider mon panier</button>
          {products.map((product, index) => {
            return (
              <div key={product.id}>
                <Cart
                  index={index}
                  handleRemoveProduct={handleRemoveProduct}
                  products={products}
                  product={product}
                  setProducts={setProducts}
                />
              </div>
            );
          })}
          <div className="total-card">
            <p>Frais de livraison : 2,50 €</p>
            <p className="total">Total : {total.toFixed(2)} €</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
