// reducer state store action
import { createStore } from 'redux';

const defaultState = { value: 0 };

const reducer = (state = defaultState, action) => {
    if (action.type === 'ADD') return { value: state.value + 1 };
    return state;
}

const store = createStore(reducer);

export default store;
