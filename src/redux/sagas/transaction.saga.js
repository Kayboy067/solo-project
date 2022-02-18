import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


// worker saga will be fired on "CREATE_TRANSACTION"

function* createTransaction(action) {
    try{
        const response = yield axios.post('api/user/transaction', action.payload)
        yield put({ type: 'SET_ACTIVE_TRANSACTION', payload: response.data})
    } catch (err) {
        console.log('Error posting transactions', err);
    }
    
} // end createTransaction


function* fetchTransaction() {
    try{
        const transaction = yield axios.get('api/user/transaction')
        yield put({type: 'SET_TRANSACTION', payload: transaction.data})
    } catch (err) {
        console.log('Error fetching transaction', err);
    }
} // end

function* transactionSaga() {
    yield takeEvery('CREATE_TRANSACTION', createTransaction)
    yield takeEvery('FETCH_TRANSACTION', fetchTransaction)
}

export default transactionSaga