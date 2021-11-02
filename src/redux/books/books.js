/* eslint-disable no-unused-labels */

/* eslint-disable no-restricted-syntax */

/* eslint-disable no-labels */

/* eslint-disable no-unused-expressions */

// Books Constants
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// Books Reducer
const initialState = [];

// Books Add Action
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state.filter((book) => book.id !== action.payload.id),
        action.payload,
      ];

    case REMOVE_BOOK:
      return [
        ...state.filter((book) => book.id !== action.payload),
      ];

    default:
      return state;
  }
};
