import React from "react";
import "./index.css";
import MenuItem from "../MenuItem";

const Category = ({ data, setProducts, products }) => {
  return (
    data.meals.length > 0 && (
      <div>
        <h2>{data.name}</h2>
        <div className="category-menu-container">
          {data.meals.map((item, index) => {
            return (
              <MenuItem
                key={item.id}
                data={item}
                setProducts={setProducts}
                products={products}
              />
            );
          })}
        </div>
      </div>
    )
  );
};

export default Category;
