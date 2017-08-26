import React, { Component } from 'react';
import { connect } from 'react-redux';
import Word from './Word';
import WordForm from './WordForm';
import WordFilter from './WordFilter';

class ListWord extends Component {
    render() {
        const { arrWords, filterStatus } = this.props;
        const filteredArrWord = arrWords.filter(e => {
            if (filterStatus === 'SHOW_ALL') return true;
            if (filterStatus === 'SHOW_MEMORIZED') return e.memorized;
            return !e.memorized;
        });
        return (
            <div>
                <WordFilter />
                <br />
                <WordForm />
                { filteredArrWord.map((e, i) => (
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

const mapStateToProp = state => ({ 
    arrWords: state.arrWords,
    filterStatus: state.filterStatus 
});

export default connect(mapStateToProp)(ListWord);
