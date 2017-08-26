import React, { Component } from 'react';
import { connect } from 'react-redux';

class Word extends Component {
    removeWordByEn() {
        const { dispatch, en } = this.props;
        dispatch({ type: 'REMOVE', en });
    }

    toggleMemorizedByEn() {
        const { dispatch, en } = this.props;
        dispatch({ type: 'TOGGLE_MEMORIZED', en });
    }

    render() {
        const { en, vn, memorized } = this.props;
        const englistText = memorized ? '-------' : en;
        const buttonText = memorized ? 'Fotgot' : 'Memorized';
        return (
            <div>
                <h3>{ englistText }</h3>
                <p>{vn}</p>
                <button onClick={this.toggleMemorizedByEn.bind(this)}>{ buttonText }</button>
                <button onClick={this.removeWordByEn.bind(this)}>DELETE</button>
            </div>
        );
    }
}

export default connect()(Word);
