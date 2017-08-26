import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordFilter extends Component {
    changeFilterStatus(newStatus) {
        this.props.dispatch({ type: 'CHANGE_FILTER_STATUS', newStatus });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.changeFilterStatus('SHOW_ALL')}>SHOW_ALL</button>            
                <button onClick={() => this.changeFilterStatus('SHOW_MEMORIZED')}>SHOW_MEMORIZED</button>            
                <button onClick={() => this.changeFilterStatus('SHOW_FORGOT')}>SHOW_FORGOT</button>  
            </div>          
        );
    }
}

export default connect()(WordFilter);
