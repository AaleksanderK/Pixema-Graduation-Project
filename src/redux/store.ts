import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from './reducers/user-reduser';
import createSagaMiddleware from 'redux-saga'
import { watcherUser } from './action-creators/user-action-creators';
import { all } from 'redux-saga/effects';


const sagaMiddleware = createSagaMiddleware();
function* rootSaga(){
  yield all([
 watcherUser()
  ])
}

const store =  createStore(combineReducers({ user: userReducer }), applyMiddleware(sagaMiddleware));

function handleStoreChange() {
    const state = store.getState();
    localStorage.setItem('localState', JSON.stringify(state));
  
  }
  
 store.subscribe(handleStoreChange)
  

export default store

sagaMiddleware.run(rootSaga);