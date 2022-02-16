import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker saga will be fired on "CREATE_RECEIVER_INFO"




function* createReceiverInfo(action){
    try {
        const response = yield axios.post('api/user/receiver', action.payload)
        yield put({ type: 'SET_ACTIVE_RECEIVER', payload: response.data})


    } catch (error) {
        console.log('Error posting receiver info', error);
    }
} // end 

function* fetchReceiver(){
    try {
        const receiver = yield axios.get('api/user/receiver')
        yield put({type: 'SET_RECEIVER', payload: receiver.data})
    } catch (error){
        console.log('Error fetching receiver', error);
    }

} // end



function* receiverSaga(){
 yield takeEvery('CREATE_RECEIVER_INFO',  createReceiverInfo)
 yield takeEvery('FETCH_RECEIVER', fetchReceiver)
}

export default receiverSaga