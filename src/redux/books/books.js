/* eslint-disable no-unused-labels */

/* eslint-disable no-restricted-syntax */

/* eslint-disable no-labels */

/* eslint-disable no-unused-expressions */

// Books Constants
const ADD = 'bookstore/books/add';

// Books Reducer
const booksReducerDefaultState = [];

export default (state = booksReducerDefaultState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state.books,
        action.book,
      ];

    default:
      return state;
  }
};

// Books Add Action
export const add = (book) => {
  type: ADD;
  book;
};
