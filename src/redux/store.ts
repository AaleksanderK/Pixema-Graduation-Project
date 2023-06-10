import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from './reducers/user-reduser';
import createSagaMiddleware from 'redux-saga'
import { watcherUser } from './action-creators/user-action-creators';
import { all } from 'redux-saga/effects';
import { watcherMovie } from './action-creators/movie-action-creators';
import { moviesReducer } from './reducers/movie-reduser';


const sagaMiddleware = createSagaMiddleware();
function* rootSaga(){
  yield all([
    watcherUser(),
    watcherMovie()
  ])
}

const store =  createStore(combineReducers({ user: userReducer, movies: moviesReducer }), applyMiddleware(sagaMiddleware));

function handleStoreChange() {
    const state = store.getState();
    localStorage.setItem('localState', JSON.stringify(state));
  
  }
  
 store.subscribe(handleStoreChange)
  

export default store

sagaMiddleware.run(rootSaga);