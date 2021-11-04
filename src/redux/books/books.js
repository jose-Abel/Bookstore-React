import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = () => (dispatch) => axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZtfyD3dYJgRiEVKbxPqy/books').then(
  (books) => dispatch({ type: GET_BOOKS_SUCCESS, books }),
  (err) => dispatch({ type: GET_BOOKS_FAILURE, err }),
);

// axios({
//   method: 'post',
//   url: '/login',
//   data: {
//     firstName: 'Finn',
//     lastName: 'Williams'
//   }
// });

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
    case GET_BOOKS_SUCCESS:
      return action.books;

    default:
      return state;
  }
};
