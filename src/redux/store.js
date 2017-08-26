// reducer state store action
import { createStore } from 'redux';

class NewWord {
    constructor(en, vn, memorized) {
        this.en = en;
        this.vn = vn;
        this.memorized = memorized;
    }
}

const arrWords = [
    new NewWord('Hello 123', 'Xin chao', false),
    new NewWord('Good bye!', 'Tam biet', true),
    new NewWord('Moring', 'Buoi sang', false)
];

const defaultState = {
    arrWords,
    filterStatus: 'SHOW_ALL'
};
// reducer phai la pure function this.state.value++
const reducer = (state = defaultState, action) => {
    if (action.type === 'ADD') {
        const { en, vn } = action; // const en = action.en, vn = action.vn
        const word = new NewWord(en, vn, false);
        return { ...state, arrWords: [word].concat(state.arrWords) };
    }
    if (action.type === 'REMOVE') {
        const { en } = action;
        return { 
            ...state,
            arrWords: state.arrWords.filter(e => e.en !== en) 
        }
    }
    if (action.type === 'CHANGE_FILTER_STATUS') {
        return {
            ...state,
            filterStatus: action.newStatus
        };
    }
    if (action.type === 'TOGGLE_MEMORIZED') {
        return {
            ...state,
            arrWords: state.arrWords.map(e => {
                if (e.en !== action.en) return e;
                return { ...e, memorized: !e.memorized };
            })
        }
    }
    return state;
}

const store = createStore(reducer);

export default store;
