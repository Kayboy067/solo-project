import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker saga will be fired on "CREATE_PAYMENT_INFO"

function* creatPaymentInfo(action) {
    try{
        yield axios.post('api/user/payment', action.payload)
    } catch (error) {
        console.log('Error posting payment info', error);
    }
} // end

function* paymentSaga() {
    yield takeEvery('CREATE_PAYMENT_INFO', creatPaymentInfo)
}

export default paymentSaga