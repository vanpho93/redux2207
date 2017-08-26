import React, { Component } from 'react';
import { connect } from 'react-redux';
import Word from './Word';
import WordForm from './WordForm';
import WordFilter from './WordFilter';

class ListWord extends Component {
    render() {
        return (
            <div>
                <WordFilter />
                <br />
                <WordForm />
                { this.props.arrWords.map((e, i) => (
                    <Word 
                        en={e.en} 
                        vn={e.vn} 
                        memorized={e.memorized}
                        key={e.en} 
                        index={i}
                        onRemoveWord={this.removeWord}
                        onToggleMemorized={this.toggleMemorized}
                    />
                ))}
            </div>            
        );
    }
}

export default connect(state => ({ arrWords: state.arrWords }))(ListWord);
