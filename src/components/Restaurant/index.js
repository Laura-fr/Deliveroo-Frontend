import React from "react";
import "./index.css";

const Restaurant = ({ data }) => {
  return (
    <div className="restaurant-container">
      <div>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
      </div>
      <img src={data.picture} alt={data.name} />
    </div>
  );
};

export default Restaurant;
