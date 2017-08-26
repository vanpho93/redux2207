import React, { Component } from 'react';

export default class WordFilter extends Component {
    render() {
        return (
            <div>
                <button>SHOW_ALL</button>            
                <button>SHOW_MEMORIZED</button>            
                <button>SHOW_FORGOT</button>  
            </div>          
        );
    }
}