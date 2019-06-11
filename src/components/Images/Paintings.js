import React, { Component } from "react";
import Painting from "./Painting";
import PropTypes from "prop-types";

class Paintings extends Component {
  render() {
    return this.props.paintings.map(painting => (
      <Painting
        key={painting.id}
        painting={painting}
        changeClickedState={this.props.changeClickedState}
      />
    ));
  }
}

Paintings.propTypes = {
  paintings: PropTypes.array.isRequired,
  changeClickedState: PropTypes.func.isRequired
};

export default Paintings;
