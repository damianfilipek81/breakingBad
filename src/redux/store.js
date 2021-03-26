import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios';
import favoritesReducer from './favoritesRedux';

export function charactersReducer(state = initialState.characters, action) {
  switch (action.type) {
    case 'characters/charactersLoaded': {
      return action.payload
    }
    default:
      return state
  }
}

export async function fetchCharacters(dispatch) {
  const response = await axios.get('https://breakingbadapi.com/api/characters/')
  dispatch({ type: 'characters/charactersLoaded', payload: response.data })
}

export const initialState = {
  characters: [],
  favorites: [],
}


const reducers = {
  characters: charactersReducer,
  favorites: favoritesReducer,
}

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const storeReducer = combineReducers(reducers);

const store = createStore(
  storeReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;