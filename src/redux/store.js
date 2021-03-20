import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {initialStoreData} from '../data/dataStore';
import axios from 'axios';


const initialState = {
  app: [],
};
console.log('store',initialStoreData.app)
const reducers = {}

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const storeReducer = combineReducers(reducers);

const store = createStore(
  storeReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;