import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ElseIf extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

ElseIf.propTypes = {
  children: PropTypes.any.isRequired
};
