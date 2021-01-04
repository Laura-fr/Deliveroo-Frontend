import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import logo from "./assets/img/logo-teal.svg";

// Components import
import Menu from "./components/Menu";
import Restaurant from "./components/Restaurant";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://my-deliveroo-backend.herokuapp.com/"
    );

    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
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
      <footer>
        <p>
          Made with{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            React
          </a>{" "}
          at{" "}
          <a href="https://www.lereacteur.io/" target="_blank" rel="noreferrer">
            Le Reacteur
          </a>{" "}
          by{" "}
          <a
            href="https://github.com/Laura-fr"
            target="_blank"
            rel="noreferrer"
          >
            Laura
          </a>
        </p>
      </footer>
    </div>
  );
}
export default App;
