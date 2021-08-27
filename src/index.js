import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware();

// Reducers
const gifListReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIF':
            return action.payload;
        case 'SET_SEARCH_RESULTS':
            return action.payload
        default:
            return state;
    }
} 

function* getGif() {
    try{
        const response = yield axios.get('/api/favorite');
        console.log('get favorite', response.data);
        
        yield put({
            type: 'SET_GIF',
            payload: response.data
        })
    }   
    catch(err) {
        console.log('getGif failed!');
        // alert('getGif failed!')
    }
}


function* fetchSearchResults(action) {
    try{
        const response = yield axios.post('/api/search', action.payload);
        console.log('api response', response.data);

        yield put({
            type: 'SET_SEARCH_RESULTS'
        })
    }
    catch(err){
        console.log('fetchSearchResults err');
        
    }
}

// generator function
function* watchSaga() {
    yield takeEvery('GET_GIF', getGif);
    yield takeEvery('FETCH_SEARCH_RESULTS', fetchSearchResults )

}

// Create store instance
const storeInstance = createStore(combineReducers({
    gifListReducer
}), applyMiddleware(logger, sagaMiddleware))

// run saga
sagaMiddleware.run(watchSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
