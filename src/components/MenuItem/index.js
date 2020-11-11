import React from "react";
import "./index.css";

const MenuItem = ({ data }) => {
  return (
    <div className="menu-item-container">
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
