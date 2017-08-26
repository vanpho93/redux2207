import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordFilter extends Component {
    changeFilterStatus(newStatus) {
        this.props.dispatch({ type: 'CHANGE_FILTER_STATUS', newStatus });
    }

    

    render() {
        const getStyle = (status) => {
            const condition = this.props.filterStatus === status;
            return condition ? { color: 'green' } : { color: 'black' };
        }
        return (
            <div>
                <button onClick={() => this.changeFilterStatus('SHOW_ALL')} style={getStyle('SHOW_ALL')}>
                    SHOW_ALL
                </button>            
                <button onClick={() => this.changeFilterStatus('SHOW_MEMORIZED')} style={getStyle('SHOW_MEMORIZED')}>
                    SHOW_MEMORIZED
                </button>            
                <button onClick={() => this.changeFilterStatus('SHOW_FORGOT')} style={getStyle('SHOW_FORGOT')}>
                    SHOW_FORGOT
                </button>  
            </div>          
        );
    }
}

const mapStateToProp = state => ({ filterStatus: state.filterStatus });

export default connect(mapStateToProp)(WordFilter);
