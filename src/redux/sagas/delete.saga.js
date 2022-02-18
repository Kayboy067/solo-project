import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteTransactions(action) {
        try {
            console.log('delete transaction', action.payload);
            yield axios({
                method: 'DELETE',
                url: `api/user/transaction/${action.payload.id}`,

            })
            // yield put({
            //     type: 'DELETE_PAST_TRANSACTION'
            // })
            yield put ({type: 'FETCH_TRANSACTION'})
        } catch (err) {
            console.log(err)
        }
    }


function* deleteSaga() {
        yield takeEvery('DELETE_TRANSACTION', deleteTransactions);
    }
    
export default deleteSaga;