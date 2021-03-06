import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker saga will be fired on "CREATE_PAYMENT_INFO"

function* creatPaymentInfo(action) {
    try{
       const response = yield axios.post('api/user/payment', action.payload)
        yield put({ type: 'SET_CARD_DETAIL', payload: response.data})
        yield put({type: 'FETCH_PAYMENT'});
        
    } catch (error) {
        console.log('Error posting payment info', error);
    }
} // end

function* fetchPayment(){
    try {
        const payment = yield axios.get('api/user/payment')
        yield put({type: 'SET_PAYMENT', payload: payment.data})
    } catch (error){
        console.log('Error fetching payment', error);
    }

} // end

function* paymentSaga() {
    yield takeEvery('CREATE_PAYMENT_INFO', creatPaymentInfo)
    yield takeEvery('FETCH_PAYMENT', fetchPayment)
}

export default paymentSaga