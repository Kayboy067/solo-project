import axios from 'axios';
import { put, takeEvery } from "redux-saga/effects";

function* createRate(action) {
    try{
        yield axios.post('api/currency', action.payload)
    } catch (error) {
        console.log('Error posting receiver info', error);
    }
} //end

function* fetchInputOutput() {
    try{
        response = yield axios.get('api/currency')
        yield put({type: 'SET_INPUT_OUTPUT', payload: response.data})

    }catch (error){
        console.log('Error fetching receiver', error);
    }
} //end




function* estimateSaga() {
    yield takeEvery('SET_INPUT_OUTPUT', createRate);
    yield takeEvery('FETCH_INPUT_OUTPUT', fetchInputOutput)
}

export default estimateSaga
