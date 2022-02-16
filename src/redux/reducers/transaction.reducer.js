const transactionReducer = (state = {
    amount: '',
    rate: '',
    convertedAmount: '',
    date: '',
    country: ''
}, action) => {
    switch(action.type) {
        case 'SET_TRANSACTION':
            return action.payload;
        case 'SAVE_TRANSACTION_DATA':
            return {...state, ...action.payload}
        case 'SET_ACTIVE_RECEIVER':
            return {...state, receiver_id: action.payload.id}
        default:
            return state;
    }
};





export default transactionReducer

