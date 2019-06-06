import React from "react";
import "./App.css";
import Images from "./components/Images";

class ShowImage extends React.Component {
  render() {
    return (
      <div className="Images">
        {this.state.images.map(image => {
          return <img src="{images.src}" />;
        })}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>Clicky Game</h1>
      <h2>
        Click on an image to earn points, but don't click on any more than once
      </h2>
    </div>
  );
}

export default ShowImage;
