import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Menu from "./components/Menu";
import Restaurant from "./components/Restaurant";
import logo from "./assets/img/logo-teal.svg";
function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const response = await axios.get(
      "https://my-deliveroo-backend.herokuapp.com/"
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    console.log("rentre dans le use effect !!!");
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="container">
      <header>
        <img alt="logo" src={logo} />
      </header>
      <hr />
      <Restaurant data={data.restaurant} />

      <Menu data={data.categories} />
    </div>
  );
}
export default App;
