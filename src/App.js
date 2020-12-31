import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Menu from "./components/Menu";
import Restaurant from "./components/Restaurant";
import logo from "./assets/img/logo-teal.svg";
import Loader from "react-loader-spinner";

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
    <Loader
      className="loader"
      type="Oval"
      color="#43CDBD"
      height={200}
      width={200}
      timeout={5000} //5 seconds
    />
  ) : (
    <div className="container">
      <header>
        <img alt="logo" src={logo} />
      </header>

      <Restaurant data={data.restaurant} />
      <div>
        <Menu data={data.categories} />
      </div>
    </div>
  );
}
export default App;
