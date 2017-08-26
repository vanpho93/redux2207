const filterStatusReducer = (state = 'SHOW_ALL', action) => {
    if (action.type === 'CHANGE_FILTER_STATUS') {
        return action.newStatus;
    }
    return state;
};

export default filterStatusReducer;
