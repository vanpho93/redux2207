import React, { Component } from 'react';
import Word from './Word';
import WordForm from './WordForm';
import WordFilter from './WordFilter';

class NewWord {
    constructor(en, vn, memorized) {
        this.en = en;
        this.vn = vn;
        this.memorized = memorized;
    }
}

const arrWords = [
    new NewWord('Hello', 'Xin chao', false),
    new NewWord('Good bye!', 'Tam biet', true),
    new NewWord('Moring', 'Buoi sang', false)
];

export default class ListWord extends Component {
    render() {
        return (
            <div>
                <WordFilter />
                <WordForm />
                { arrWords.map((e, i) => (
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