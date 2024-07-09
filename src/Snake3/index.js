import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/game";
import "./assets/index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<Game />, rootElement);

export default Game; // Exporting Game component as default
