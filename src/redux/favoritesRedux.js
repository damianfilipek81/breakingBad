export const getData = state => state.characters.filter(data => state.favorites.includes(data.name));

const reducerName = 'favorites';
const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_FAVORITE_CHAR = createActionName('ADD_FAVORITE_CHAR');
export const REMOVE_FAVORITE_CHAR = createActionName('REMOVE_FAVORITE_CHAR');

export const addFavoriteCharacter = payload => ({ payload, type: ADD_FAVORITE_CHAR });
export const removeFavoriteCharacter = payload => ({ payload, type: REMOVE_FAVORITE_CHAR });

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_FAVORITE_CHAR:
      return [...statePart, action.payload]
    case REMOVE_FAVORITE_CHAR:
      return statePart.filter(favorite => favorite != action.payload);
    default:
      return statePart;
  }
}