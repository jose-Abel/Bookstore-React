import { createStore, combineReducers } from 'redux';

import booksReducer from './books/books';

import categoriesReducer from './categories/categories';

const store = createStore(
  combineReducers({
    books: booksReducer,
    categories: categoriesReducer,
  }),
);

export default store;
