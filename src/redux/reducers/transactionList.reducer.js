const transactionListReducer = (state = [], action) => {

    switch (action.type) {
        case 'SHOW_TRANSACTION_HISTORY':
            return action.payload;
        case 'DISPLAY_TRANSACTION':
            return action.payload;
        default:
            return state;
    }
};


export default transactionListReducer;