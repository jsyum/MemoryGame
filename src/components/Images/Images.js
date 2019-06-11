import React, { Component } from "react";
import "./Images.css";

class App extends Component {
  state = {
    paintings: [
      {
        id: 1,
        name: "rothko chapel",
        src: "https://i.ibb.co/PZrpHPg/chapel.jpg",
        clicked: false
      },
      {
        id: 2,
        name: "with my back to the world",
        src: "https://i.ibb.co/w0KFQRF/martinback.jpg",
        clicked: false
      },
      {
        id: 3,
        name: "gratitude",
        src: "https://i.ibb.co/dj7Kmt7/martingratitude.jpg",
        clicked: false
      },
      {
        id: 4,
        name: "buds",
        src: "https://i.ibb.co/xJS5177/martinbuds.jpg",
        clicked: false
      },
      {
        id: 5,
        name: "faraway love",
        src: "https://i.ibb.co/QHP1xMd/martinlove.jpg",
        clicked: false
      },
      {
        id: 6,
        name: "morning",
        src: "https://i.ibb.co/PzKTjwL/martinmorning.jpg",
        clicked: false
      },
      {
        id: 7,
        name: "rothko grey",
        src: "https://i.ibb.co/4PYM0xR/rothkogrey.jpg",
        clicked: false
      },
      {
        id: 8,
        name: "four darks in red",
        src: "https://i.ibb.co/V3DCgB8/rothkored.jpg",
        clicked: false
      },
      {
        id: 9,
        name: "rust and blue",
        src: "https://i.ibb.co/1J7Rb1H/rothkorust.jpg",
        clicked: false
      }
    ]
  };

  renderImg() {
    return (
      <div>
        {this.state.paintings.map(source => (
          <img
            width="200px"
            height="200px"
            src={source.src}
            key={source.id}
            alt={source.name}
          />
        ))}
      </div>
    );
  }

  render() {
    return <div>{this.renderImg()}</div>;
  }
}
export default App;
