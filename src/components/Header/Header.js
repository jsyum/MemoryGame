import React, { Component } from "react";

class Header extends Component {
  render() {
    const { score, topScore } = this.props;
    return (
      <div>
        <h1>Clicky Game</h1>
        <h2>
          Click on an image to earn points, but don't click any more than once!
        </h2>
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    );
  }
}

export default Header;
