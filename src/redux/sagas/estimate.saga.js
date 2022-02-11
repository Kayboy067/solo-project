import { put, takeEvery } from "redux-saga/effect";
import axios from 'axios';

function* createRate(action) {
    try{
        yield put({})
    } catch {

    }
}




function* estimateSaga() {
    yield takeEvery('SET_RATE', createRate);
}

export default estimateSaga
