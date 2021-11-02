/* eslint-disable no-unused-labels */

/* eslint-disable no-restricted-syntax */

/* eslint-disable no-labels */

/* eslint-disable no-unused-expressions */

// Categories Constants
const ADD = 'bookstore/categories/add';

// Categories Reducer
const categoriesReducerDefaultState = [];

export default (state = categoriesReducerDefaultState, action) => {
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

// Category Add Action
export const add = (category) => {
  type: ADD;
  category;
};
