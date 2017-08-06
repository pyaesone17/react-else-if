import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Else extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

Else.propTypes = {
  children: PropTypes.any.isRequired
};
