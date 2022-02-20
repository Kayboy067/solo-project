const receiverReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_RECEIVER':
            return action.payload;
        case 'UPDATE_ACTIVE_RECEIVER':
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default receiverReducer