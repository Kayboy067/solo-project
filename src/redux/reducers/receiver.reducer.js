const receiverReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_RECEIVER':
            return action.payload;
        default:
            return state;
    }
}

export default receiverReducer