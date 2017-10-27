function counerReducer(count, action) {
    return action.type === 'INCREMENT' ? ++count : count;
}

export default counerReducer;


