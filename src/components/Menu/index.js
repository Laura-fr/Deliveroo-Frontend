import React from "react";
import "./index.css";
import Category from "../Category";
import Basket from "../Basket";

const Menu = ({ data }) => {
  return (
    <div className="menu-container">
      <div>
        {data.map((category, index) => {
          return (
            <div className="category">
              <Category key={index} data={category} />
            </div>
          );
        })}
      </div>
      <div className="basket-container">
        <Basket counter={data.counter} />
      </div>
    </div>
  );
};

export default Menu;
