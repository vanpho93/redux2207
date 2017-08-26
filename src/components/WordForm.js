import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/action';

class WordForm extends Component {
    addWord() {
        const { txtEn, txtVn } = this.refs;
        // const action = addNewWord(txtEn.value, txtVn.value);
        // this.props.dispatch(action);
        this.props.addNewWord(txtEn.value, txtVn.value);
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

export default connect(null, actionCreators)(WordForm);
