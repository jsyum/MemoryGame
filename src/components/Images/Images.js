import React, { Component } from "react";
import "./Images.css";

class Images extends Component {
  state = {
    sources: [
      "https://i.ibb.co/PZrpHPg/chapel.jpg",
      "https://i.ibb.co/w0KFQRF/martinback.jpg",
      "https://i.ibb.co/dj7Kmt7/martingratitude.jpg",
      "https://i.ibb.co/xJS5177/martinbuds.jpg"
    ],
    clicked: []
  };

  renderImg() {
    return (
      <div>
        {this.state.sources.map(source => (
          <img
            width="200px"
            height="200px"
            className="galleryImg"
            src={source}
            key={source}
            alt="blob"
          />
        ))}
      </div>
    );
  }

  render() {
    return <div>{this.renderImg()}</div>;
  }
}
export default Images;
