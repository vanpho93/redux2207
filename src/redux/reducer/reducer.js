import { combineReducers } from 'redux';
import arrWordsReducer from './arrWord';
import filterStatusReducer from './filterStatus';

export default combineReducers({
    arrWords: arrWordsReducer,
    filterStatus: filterStatusReducer
});
