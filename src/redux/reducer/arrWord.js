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

export default (state = arrWords, action) => {
    if (action.type === 'ADD') {
        const { en, vn } = action; // const en = action.en, vn = action.vn
        const word = new NewWord(en, vn, false);
        return [word].concat(state);
    }
    if (action.type === 'REMOVE') {
        const { en } = action;
        return state.filter(e => e.en !== en);
    }
    if (action.type === 'TOGGLE_MEMORIZED') {
        return state.map(e => {
                if (e.en !== action.en) return e;
                return { ...e, memorized: !e.memorized };
        });
    }
    return state;
};