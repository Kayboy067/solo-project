const inputOutputReducer = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_INPUT_OUTPUT':
            return action.payload
        default:
            return state;

    }


    
}

export default inputOutputReducer