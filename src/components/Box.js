import React, { Component } from 'react';
import { connect } from 'react-redux';

class Box extends Component {
    render() {
        return (
            <h3>{this.props.value}</h3>
        );
    }
}

export default connect(state => ({ value: state.value }))(Box);
