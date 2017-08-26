export const addNewWord = (en, vn) => ({ type: 'ADD', en, vn });

export const removeWordByEn = (en) => ({ type: 'REMOVE', en });

export const toggleMemorizedByEn = (en) => ({ type: 'TOGGLE_MEMORIZED', en });

export const changeFilterStatus = (newStatus) => ({ type: 'CHANGE_FILTER_STATUS', newStatus });
