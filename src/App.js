import React from "react";
import "./App.css";
import Images from "./components/Images/Images";

function App() {
  return (
    <div>
      <h1>Clicky Game</h1>
      <h2>
        Click on an image to earn points, but don't click on any more than once
      </h2>
      <Images />
    </div>
  );
}

export default App;
