import React, { Component } from "react";
import PropTypes from "prop-types";

export default class If extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

If.propTypes = {
  children: PropTypes.any.isRequired
};
