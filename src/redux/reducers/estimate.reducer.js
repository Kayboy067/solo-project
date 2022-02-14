const estimateReducer = (state = [], action) =>{
    switch (action.type) {
        case 'SET_INPUT_OUTPUT':
            
            return action.payload;
    
        default:
            return state;
    }
}

export default estimateReducer