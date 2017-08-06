import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Condition extends Component {
  nextComponent($components, $current) {
    let childrens = $components;
    return childrens[$current + 1] ? childrens[$current + 1] : null;
  }

  prevComponent($components, $current) {
    let childrens = $components;
    return childrens[$current - 1] ? childrens[$current - 1] : null;
  }

  render() {
    let childrens = React.Children.map(this.props.children, child => child);
    let renderable;

    var myMap = new Map();
    childrens.forEach((child, key) => {
      let current = myMap.get(child.type.name);
      let value = current === undefined ? 1 : current + 1;
      myMap.set(child.type.name, value);
    });

    if (myMap.get("If") > 1) {
      throw new Error(
        `If should not appear ${myMap.get("If")} times in Condition Block`
      );
    }

    if (myMap.get("Else") > 1) {
      throw new Error(
        `Else should not appear ${myMap.get("ElseIf")} times in Condition Block`
      );
    }

    childrens.forEach((child, key) => {
      if (child.type.name === "Else") {
        let prev = this.prevComponent(childrens, key);
        let next = this.nextComponent(childrens, key);

        if (prev === null) {
          throw new Error("Else's previous condition should be If or ElseIf");
        }

        if (next !== null) {
          throw new Error("Else's should not have next condition");
        }
      }
      if (child.type.name === "If") {
        let next = this.nextComponent(childrens, key);
        if (next === "If") {
          throw new Error("If's next item must not be If in Condition Block");
        }
      } else if (child.type.name === "ElseIf") {
        let next = this.nextComponent(childrens, key);
        if (next === "If") {
          throw new Error(
            "ElseIf's next item must not be If in Condition Block"
          );
        }
      }
    });

    childrens.some(child => {
      if (
        child.props.is === true ||
        child.props.is === 1 ||
        child.type.name === "Else"
      ) {
        renderable = child;
        return true;
      }
      return false;
    });

    return (
      <div>
        {renderable}
      </div>
    );
  }
}

Condition.propTypes = {
  children: PropTypes.any.isRequired
};

