import React, { Component } from "react";
import PropTypes from "prop-types";

class Painting extends Component {
  render() {
    const { id, name, src } = this.props.painting;
    return (
      <img
        width="200px"
        height="200px"
        alt={name}
        src={src}
        key={id}
        onClick={this.props.changeClickedState.bind(this, id)}
      />
    );
  }
}

Painting.propTypes = {
  painting: PropTypes.object.isRequired,
  changeClickedState: PropTypes.func.isRequired
};

export default Painting;
