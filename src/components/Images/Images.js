import React, { Component } from "react";

class Images extends Component {
  state = {
    sources: ["https://ibb.co/FbhvTyz", "https://ibb.co/FbhvTyz"],
    clicked: []
  };

  renderImg() {
    return (
      <div>
        {this.state.sources.map(source => (
          <img src={source} key={source} alt="blob" />
        ))}
      </div>
    );
  }

  render() {
    return <div>{this.renderImg()}</div>;
  }
}
export default Images;
