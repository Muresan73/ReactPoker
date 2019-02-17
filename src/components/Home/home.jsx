import React from "react";
import "./home.scss";
import axios from "axios";

const HomePage = () => {
  const handleClick = () => {
    axios.get("/ping").then(response => console.log(response));
  };
  return (
    <div>
      <h3>Start Poker session?</h3>
      <button onClick={handleClick}>Create Game</button>
    </div>
  );
};

export default HomePage;
