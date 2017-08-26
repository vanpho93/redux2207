import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Word extends Component {
    render() {
        const { en, vn, memorized } = this.props;
        const englistText = memorized ? '-------' : en;
        const buttonText = memorized ? 'Fotgot' : 'Memorized';
        return (
            <div>
                <h3>{ englistText }</h3>
                <p>{vn}</p>
                <button>{ buttonText }</button>
                <button>DELETE</button>
            </div>
        );
    }
}
