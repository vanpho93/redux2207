import React, { Component } from 'react';

export default class WordForm extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'gray', padding: 10, width: 150 }}>
                <input type="text" placeholder="Enter English word" ref="txtEn" />
                <br /><br />
                <input type="text" placeholder="Enter Vietnamese meaning" ref="txtVn" />
                <br /><br />
                <button>Add</button>
            </div>
        );
    }
}