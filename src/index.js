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
            console.log("SET SEARCH is",action.payload)
            return action.payload;
        default:
            return state;
    }
} 

const lawFirmReducer = (state=[], action) =>{
    switch(action.type) {
        case 'SET_GOOGLE_RESULTS':
            return action.payload;
        default:
            return state
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

function* fetchLawFirmResults(action){
    try{
        const response = yield axios.get('/api/lawFirms', {
            params: {
                q: action.payload
            }
        });
        yield put ({
            type: 'SET_GOOGLE_RESULTS',
            payload: response.data 
        })
    }
    catch(error) {
            console.log("GET /lawFirms error", error)

    }
}

function* fetchSearchResults(action) {
    try{
        console.log('action payload is', action.payload);
        
        const response = yield axios.get('/api/search', {
            params: {
                q: action.payload
            }
        });

        yield put({
            type: 'SET_SEARCH_RESULTS',
            payload: response.data
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
    yield takeEvery("FETCH_LAWFIRM_RESULTS", fetchLawFirmResults)

}

// Create store instance
const storeInstance = createStore(
  combineReducers({
    gifListReducer,
    lawFirmReducer,
  }),
  applyMiddleware(logger, sagaMiddleware)
);

// run saga
sagaMiddleware.run(watchSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
