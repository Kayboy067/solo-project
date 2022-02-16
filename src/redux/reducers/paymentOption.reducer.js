const paymentOptionReducer = (state = {}, action) => {
    switch(action.type) {
        case 'PAYMENT_RECEIVING_METHOD':
            return action.payload;
        default:
            return state;
    }
}

export default paymentOptionReducer