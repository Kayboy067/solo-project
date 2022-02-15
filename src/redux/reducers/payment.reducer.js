const paymentReducer = (state = [], action) =>{
    switch (action.type) {
        case 'SET_PAYMENT':
            
            return action.payload;
    
        default:
            return state;
    }
}

export default paymentReducer