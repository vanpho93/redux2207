import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/action';

class Word extends Component {
    render() {
        const { en, vn, memorized, removeWordByEn, toggleMemorizedByEn } = this.props;
        const englistText = memorized ? '-------' : en;
        const buttonText = memorized ? 'Fotgot' : 'Memorized';
        return (
            <div>
                <h3>{ englistText }</h3>
                <p>{vn}</p>
                <button onClick={() => toggleMemorizedByEn(en)}>{ buttonText }</button>
                <button onClick={() => removeWordByEn(en)}>DELETE</button>
            </div>
        );
    }
}

export default connect(null, actionCreators)(Word);
