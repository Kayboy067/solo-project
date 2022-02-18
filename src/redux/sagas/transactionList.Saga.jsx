import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getTransactionList(action) {
 
    try {
        
        const response = yield axios.get('api/user/transaction', action.payload)
        console.log('response',response.data[0]);
        yield put({
            type: 'DISPLAY_TRANSACTION',
            payload: response.data,
        })

    } catch (error) {
        console.log('Error with GET Transaction History saga:', error)
    }
}

function* transactionListSaga() {
    yield takeEvery('GET_TRANSACTIONS', getTransactionList);
}

export default transactionListSaga;