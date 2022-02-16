const transactionReducer = (state = {
    amount: '',
    rate: '',
    convertedAmount: '',
    sendingFee: '',
    date: '',
    userId: '',
    receiverId: '',
    country: ''
}, action) => {
    switch(action.type) {
        case 'SET_TRANSACTION':
            return action.payload;
        case 'SAVE_TRANSACTION_DATA':
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default transactionReducer