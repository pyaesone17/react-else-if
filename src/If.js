import React, { Component } from 'react';

export default class If extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}
