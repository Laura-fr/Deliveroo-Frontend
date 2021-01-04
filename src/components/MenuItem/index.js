import React from "react";
import "./index.css";

const MenuItem = ({ data, setProducts, products }) => {
  const handleClick = () => {
    const newProducts = [...products];

    let isFound = false;
    for (let i = 0; i < newProducts.length; i++) {
      if (newProducts[i].id === data.id) {
        newProducts[i].quantity++;
        isFound = true;
        break;
      }
    }

    if (isFound === false) {
      newProducts.push({
        title: data.title,
        price: data.price,
        quantity: 1,
        id: data.id,
      });
    }

    setProducts(newProducts);
  };
  return (
    <div className="menu-item-container" onClick={handleClick}>
      <div>
        <h3>{data.title}</h3>
        <p>{data.description && data.description.slice(0, 60) + "..."}</p>
        <span>{data.price} €</span>
      </div>

      {data.picture && (
        <img style={{ height: 130 }} src={data.picture} alt={data.title} />
      )}
    </div>
  );
};

export default MenuItem;
