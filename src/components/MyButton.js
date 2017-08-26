import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyButton extends Component {
    render() {
        const { dispatch } = this.props;
        return <button onClick={() => dispatch({ type: 'ADD' })}>
                    Add
                </button>;
    }
}

export default connect()(MyButton);
