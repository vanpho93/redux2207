import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordForm extends Component {
    addWord() {
        const { txtEn, txtVn } = this.refs;
        this.props.dispatch({ type: 'ADD', vn: txtVn.value, en: txtEn.value });
    }

    render() {
        return (
            <div style={{ backgroundColor: 'gray', padding: 10, width: 150 }}>
                <input type="text" placeholder="Enter English word" ref="txtEn" />
                <br /><br />
                <input type="text" placeholder="Enter Vietnamese meaning" ref="txtVn" />
                <br /><br />
                <button onClick={this.addWord.bind(this)}>Add</button>
            </div>
        );
    }
}

export default connect()(WordForm);
